import { FormControl } from '@angular/forms';
import { Modify } from './modify';
import { TypedAbstractControl } from './typed-abstract-control';
import { ValidatorArgs } from './validator-args';

export interface TypedFormControl<T> extends Modify<FormControl, TypedAbstractControl<T>> {}

export function typedFormControl<T>(formState?: T, ...args: ValidatorArgs): TypedFormControl<T> {
  return new FormControl(formState, ...args);
}
