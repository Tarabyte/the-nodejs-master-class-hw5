const assert = require('assert')
const test = require('../test')
const lib = require('./lib')

// delay
test('lib.delay should be a function', () => {
  assert.strictEqual(typeof lib.delay, 'function')
})

test('lib.delay should resolve with the given value', async () => {
  const value = {}
  const delaying = lib.delay(100, value)

  assert.strictEqual(typeof delaying.then, 'function')
  assert.strictEqual(await delaying, value)
})

// factorial
test('lib.factorial should be a function', () => {
  assert.strictEqual(typeof lib.factorial, 'function')
})

test('lib.factorial should return 1 for 0', () => {
  assert.strictEqual(lib.factorial(0), 1)
})

test('lib.factorial should return 120 for 5', () => {
  assert.strictEqual(lib.factorial(5), 120)
})

test('lib.factorial should not throw on negative values', () => {
  assert.doesNotThrow(() => {
    const value = lib.factorial(-1)

    assert.ok(Number.isNaN(value))
  })
})

// fizzBuzz
test('lib.fizzBuzz should return correct values for multiples of 3 and/or 5', () => {
  assert.deepStrictEqual(lib.fizzBuzz(15), [
    '1',
    '2',
    'fizz',
    '4',
    'buzz',
    'fizz',
    '7',
    '8',
    'fizz',
    'buzz',
    '11',
    'fizz',
    '13',
    '14',
    'fizzbuzz',
  ])
})

test('lib.fizzBuzz should not throw on non number inputs', () => {
  assert.doesNotThrow(() => {
    const value = lib.fizzBuzz('test')

    assert.deepStrictEqual(value, [])
  })
})
