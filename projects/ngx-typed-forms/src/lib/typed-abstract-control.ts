import { AbstractControl } from '@angular/forms';
import { Observable } from 'rxjs';

export interface FormEventOptions {
  emitEvent?: boolean;
  onlySelf?: boolean;
}

export interface TypedAbstractControl<T> extends AbstractControl {
  valueChanges: Observable<T>;
  statusChanges: Observable<'VALID' | 'INVALID' | 'PENDING' | 'DISABLED'>;
  setValue: (v: T, options?: FormEventOptions) => void;
  patchValue: (v: Partial<T>, options?: FormEventOptions) => void;
  value: T;
}
