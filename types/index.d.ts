
import type ByteView from "byteview";

declare module "@neumatter/utilities";

declare namespace utilities {
  export function getCasePattern(input: string): ByteView;

  export function applyCasePattern(input: string, pattern: ByteView): string;

  export function throwIfNotWithin<T extends any>(
    value: T,
    availableValues?: Array<T>
  ): void;

  export function throwIfNoInstanceOf<T extends any>(
    value: T,
    availableValues?: Array<typeof T>
  ): void;

  export function assertObject<T extends object>(
    input: T,
    paramName: string
  ): void;

  export function assertString(input: string, paramName: string): void;

  export function assertFunction(input: Function, paramName: string): void;

  export function assertNumber(input: number, paramName: string): void;

  export function assertFiniteNumber(input: number, paramName: string): void;

  export function getObjectOption<O extends object, T>(
    opts: O,
    prop: keyof O,
    values?: Array<any>,
    fallback: T
  ): T

  export function getBooleanOption<O extends object>(
    opts: O,
    prop: keyof O,
    fallback: boolean
  ): boolean;

  export function getStringOption<O extends object>(
    opts: O,
    prop: keyof O,
    values?: Array<string>,
    fallback: string
  ): string;

  export function defaultNumberOption(
    val: number,
    min: number,
    max: number,
    fallback: number
  ): number;

  export function getNumberOption<O extends object>(
    options: O,
    property: keyof O,
    minimum: number,
    maximum: number,
    fallback: number
  ): number;

  export function defaultIntegerOption(
    val: number,
    min: number,
    max: number,
    fallback: number
  ): number;

  export function getIntegerOption<O extends object>(
    options: O,
    property: keyof O,
    minimum: number,
    maximum: number,
    fallback: number
  ): number;
}
