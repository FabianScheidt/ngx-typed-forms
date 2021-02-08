import { TypedFormArray } from './typed-form-array';
import { TypedFormControl } from './typed-form-control';
import { TypedFormGroup } from './typed-form-group';

export type DefaultNonGroupType = string | number | boolean;

/**
 * - Represents a form array if T is an array
 * - Represents a form control if T is in the list of non-group types. Since boolean expands to the literal true | false, we always return a
 *   form control for booleans. This is not a nice way to do it but prevents odd behavior in most situatioms.
 * - Represents a form group otherwise. This should typically only be the case for object types.
 */
export type TypedControl<T, NonGroupType = DefaultNonGroupType> = T extends Array<infer X>
  ? TypedFormArray<X, T>
  : T extends boolean
  ? TypedFormControl<boolean>
  : T extends DefaultNonGroupType
  ? TypedFormControl<T>
  : TypedFormGroup<T>;

export type TypedControls<T, NonGroupType = DefaultNonGroupType> = {
  [K in keyof T]: TypedControl<T[K], NonGroupType>;
};
