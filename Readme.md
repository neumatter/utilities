
# Utilities
[![JavaScript Style Guide](https://cdn.rawgit.com/standard/standard/master/badge.svg)](https://github.com/standard/standard)

<br />

## Table of Contents
- [ Installation ](#install)
- [ Usage ](#usage)

<br />

<a name="install"></a>
## Install

```console
npm i @neumatter/utilities
```

<br />

<a name="usage"></a>
## Usage


### Import

```js
import * as utilities from '@neumatter/utilities'
// use utilities
```


### `utilities.getCasePattern`:

```ts
utilities.getCasePattern(input: string): ByteView
```


### `utilities.applyCasePattern`:

```ts
utilities.applyCasePattern(input: string, pattern: ByteView): string
```


### `utilities.throwIfNotWithin`:

```ts
utilities.throwIfNotWithin<T extends any>(
  value: T,
  availableValues?: Array<T>
): void
```


### `utilities.throwIfNoInstanceOf`:

```ts
utilities.throwIfNoInstanceOf<T extends any>(
  value: T,
  availableValues?: Array<typeof T>
): void
```


### `utilities.assertObject`:

```ts
utilities.assertObject<T extends object>(
  input: T,
  paramName: string
): void
```


### `utilities.assertString`:

```ts
utilities.assertString(input: string, paramName: string): void
```


### `utilities.assertFunction`:

```ts
utilities.assertFunction(input: Function, paramName: string): void
```


### `utilities.assertNumber`:

```ts
utilities.assertNumber(input: number, paramName: string): void
```


### `utilities.assertFiniteNumber`:

```ts
utilities.assertFiniteNumber(input: number, paramName: string): void
```


### `utilities.getObjectOption`:

```ts
utilities.getObjectOption<O extends object, T>(
  opts: O,
  prop: keyof O,
  values?: Array<any>,
  fallback: T
): T
```


### `utilities.getBooleanOption`:

```ts
utilities.getBooleanOption<O extends object>(
  opts: O,
  prop: keyof O,
  fallback: boolean
): boolean
```


### `utilities.getStringOption`:

```ts
utilities.getStringOption<O extends object>(
  opts: O,
  prop: keyof O,
  values?: Array<string>,
  fallback: string
): string
```


### `utilities.defaultNumberOption`:

```ts
utilities.defaultNumberOption(
  val: number,
  min: number,
  max: number,
  fallback: number
): number
```


### `utilities.getNumberOption`:

```ts
utilities.getNumberOption<O extends object>(
  options: O,
  property: keyof O,
  minimum: number,
  maximum: number,
  fallback: number
): number
```


### `utilities.defaultIntegerOption`:

```ts
utilities.defaultIntegerOption(
  val: number,
  min: number,
  max: number,
  fallback: number
): number
```


### `utilities.getIntegerOption`:

```ts
utilities.getIntegerOption<O extends object>(
  options: O,
  property: keyof O,
  minimum: number,
  maximum: number,
  fallback: number
): number
```
