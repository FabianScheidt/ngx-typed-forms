import { FormArray } from '@angular/forms';
import { Modify } from './modify';
import { TypedAbstractControl } from './typed-abstract-control';
import { TypedControl } from './typed-control';
import { ValidatorArgs } from './validator-args';

export interface TypedFormArray<X, T = Array<X>> extends Modify<FormArray, TypedAbstractControl<T>> {
  controls: TypedControl<X>[];
  push: (control: TypedControl<X>) => void;
  insert: (index: number, control: TypedControl<X>) => void;
  at: (index: number) => TypedControl<X>;
  setControl: (index: number, control: TypedControl<X>) => void;
}

export function typedFormArray<X, T = Array<X>>(controls: TypedControl<X>[], ...args: ValidatorArgs): TypedFormArray<X, T> {
  return new FormArray(controls, ...args) as any;
}
