import { FormGroup } from '@angular/forms';
import { DeepNonFunctionalProperties } from './non-function-properties';
import { Modify } from './modify';
import { DefaultNonGroupType, TypedControls } from './typed-control';
import { TypedAbstractControl } from './typed-abstract-control';
import { ValidatorArgs } from './validator-args';

export interface TypedFormGroup<T, NonFunctionalT = DeepNonFunctionalProperties<T>, NonGroupType = DefaultNonGroupType>
  extends Modify<FormGroup, TypedAbstractControl<NonFunctionalT>> {
  controls: TypedControls<NonFunctionalT, NonGroupType>;
}

export function typedFormGroup<T, NonFunctionalT = DeepNonFunctionalProperties<T>>(
  controls: TypedControls<NonFunctionalT>,
  ...args: ValidatorArgs
): TypedFormGroup<T> {
  return new FormGroup(controls, ...args) as any;
}
