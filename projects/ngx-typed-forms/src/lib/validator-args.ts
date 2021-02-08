import { AbstractControlOptions, AsyncValidatorFn, ValidatorFn } from '@angular/forms';

export type ValidatorOrOpts = ValidatorFn | ValidatorFn[] | AbstractControlOptions | null;
export type AsyncValidator = AsyncValidatorFn | AsyncValidatorFn[] | null;

export type ValidatorArgs = [] | [ValidatorOrOpts] | [ValidatorOrOpts, AsyncValidator];
