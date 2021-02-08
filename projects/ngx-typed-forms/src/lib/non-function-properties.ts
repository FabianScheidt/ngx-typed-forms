/**
 * Type that contains all keys of an object that are not functions.
 * This effectively returns all property names of classes that are not instance methods.
 */
export type NonFunctionPropertyNames<T> = {
  // tslint:disable-next-line:ban-types
  [K in keyof T]: T[K] extends Function ? never : K;
}[keyof T];

/**
 * Type that contains all properties of an object that are not functions.
 * This effectively returns all properties that are not instance methods.
 */
export type NonFunctionProperties<T> = Pick<T, NonFunctionPropertyNames<T>>;

/**
 * Similar to NonFunctionProperties: This type contains all properties of an object that are not functions.
 * If the object contains other objects, functions are stripped as well.
 */
export type DeepNonFunctionalProperties<T> = T extends Array<infer X>
  ? Array<DeepNonFunctionalProperties<X>>
  : T extends object
  ? { [K in keyof NonFunctionProperties<T>]: DeepNonFunctionalProperties<T[K]> }
  : T;
