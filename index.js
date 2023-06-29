
import ByteView from 'byteview'

/**
 *
 * @param {string} input
 * @returns {ByteView}
 */
export function getCasePattern (input) {
  const set = new Set('ABCDEFGHIJKLMNOPQRSTUVWXYZ')
  let index = -1
  const { length } = input
  const response = new ByteView(length)

  while (++index < length) {
    if (set.has(input[index])) { // is Capital
      response[index] = 1
    }
  }

  return response
}

/**
 *
 * @param {string} input
 * @param {ByteView} pattern
 * @returns {string}
 */
export function applyCasePattern (input, pattern) {
  let index = -1
  const length = input.length
  const patternLength = pattern.length
  let response = ''

  while (++index < length) {
    if (index >= patternLength) {
      response += input.slice(index)
      break
    } else {
      response += pattern[index]
        ? input.charAt(index).toUpperCase()
        : input.charAt(index)
    }
  }

  return response
}

/**
 *
 * @param {any} value
 * @param {undefined | Array<any>} availableValues
 */
export function throwIfNotWithin (value, availableValues) {
  if (availableValues !== undefined && availableValues.length) {
    let found = false

    const set = new Set(availableValues)
    found = set.has(value)
    // for (const availableValue of availableValues) {
    //   if (value === availableValue) {
    //     found = true
    //     break
    //   }
    // }

    if (!found) {
      throw new RangeError(`${value} is not within [${availableValues.join(', ')}]`)
    }
  }
}

/**
 *
 * @param {any} value
 * @param {undefined | Array<any>} availableValues
 */
export function throwIfNoInstanceOf (value, availableValues) {
  if (availableValues !== undefined && availableValues.length) {
    let found = false

    for (const availableValue of availableValues) {
      if (value instanceof availableValue) {
        found = true
        break
      }
    }

    if (!found) {
      throw new RangeError(`${value} is not within [${availableValues.join(', ')}]`)
    }
  }
}

export function assertObject (input, paramName) {
  if (typeof input !== 'object') {
    const message = `Expected '${paramName}' to be type 'object'. Received type '${typeof input}'.`
    throw new TypeError(message)
  }
}

export function assertString (input, paramName) {
  if (typeof input !== 'string') {
    const message = `Expected '${paramName}' to be type 'string'. Received type '${typeof input}'.`
    throw new TypeError(message)
  }
}

export function assertFunction (input, paramName) {
  if (typeof input !== 'function') {
    const message = `Expected '${paramName}' to be type 'function'. Received type '${typeof input}'.`
    throw new TypeError(message)
  }
}

export function assertNumber (input, paramName) {
  if (typeof input !== 'number') {
    const message = `Expected '${paramName}' to be type 'number'. Received type '${typeof input}'.`
    throw new TypeError(message)
  } else if (Number.isNaN(input)) {
    const message = `Expected '${paramName}' to be type 'number'. Received 'NaN'.`
    throw new TypeError(message)
  }
}

export function assertFiniteNumber (input, paramName) {
  assertNumber(input, paramName)

  if (!Number.isFinite(input)) {
    const message = `Expected '${paramName}' to be finite. Received infinite value.`
    throw new TypeError(message)
  }
}

export function getObjectOption (opts, prop, values, fallback) {
  if (typeof opts !== 'object') {
    throw new TypeError('Options must be an object')
  }

  const value = opts[prop]

  if (value !== undefined) {
    throwIfNoInstanceOf(value, values)
    return value
  }

  return fallback
}

/**
 *
 * @param {Record<string, any>} opts
 * @param {string | Symbol | number} prop
 * @param {boolean} fallback
 * @returns {boolean}
 */
export function getBooleanOption (opts, prop, fallback) {
  if (typeof opts !== 'object') {
    throw new TypeError('Options must be an object')
  }

  const value = opts[prop]

  if (value !== undefined) {
    return Boolean(value)
  }

  return fallback
}

export function getStringOption (opts, prop, values, fallback) {
  if (typeof opts !== 'object') {
    throw new TypeError('Options must be an object')
  }

  let value = opts[prop]

  if (value !== undefined) {
    value = String(value)
    throwIfNotWithin(value, values)
    return value
  }

  return fallback
}

export function defaultNumberOption (
  val,
  min,
  max,
  fallback
) {
  if (val !== undefined) {
    val = Number(val)
    if (isNaN(val) || val < min || val > max) {
      throw new RangeError(`${val} is outside of range [${min}, ${max}]`)
    }
    return val
  }
  return fallback
}

export function getNumberOption (
  options,
  property,
  minimum,
  maximum,
  fallback
) {
  const val = options[property]
  // @ts-expect-error
  return defaultNumberOption(val, minimum, maximum, fallback)
}

/**
 *
 * @param {number} val
 * @param {number} min
 * @param {number} max
 * @param {number} fallback
 * @returns {number}
 */
export function defaultIntegerOption (
  val,
  min,
  max,
  fallback
) {
  if (val !== undefined) {
    val = Math.floor(Number(val))
    if (isNaN(val) || val < min || val > max) {
      throw new RangeError(`${val} is outside of range [${min}, ${max}]`)
    }
    return val
  }
  return fallback
}

export function getIntegerOption (
  options,
  property,
  minimum,
  maximum,
  fallback
) {
  const val = options[property]
  // @ts-expect-error
  return defaultIntegerOption(val, minimum, maximum, fallback)
}

/*
class PrivateConstructor {
  static #isInternalConstructing = false

  constructor () {
    if (!PrivateConstructor.#isInternalConstructing) {
      throw new TypeError(`${this.constructor.name} is not constructable`)
    }
    PrivateConstructor.#isInternalConstructing = false
    // More initialization logic
  }

  static create () {
    PrivateConstructor.#isInternalConstructing = true
    const instance = new PrivateConstructor()
    return instance
  }
}
*/
