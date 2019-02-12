# The NodeJS MasterClass Homework Assignment #5

The NodeJS MasterClass Homework Assignment #5

## Assignment

Create a new empty repository with a /test folder, and an /app folder.

Inside of the app folder, create a library (lib.js) and fill it with simple functions. These can serve any purpose you wish, such as generating a random number, or checking whether or not a string is a palindrome. Really, any kind of functions will do.

Inside the /test folder, create a simple test runner, and then write tests for the functions in your lib.js file. You should try to test that they return (or callback) the correct value when passed valid parameters, and that they return a predictable value (and don't crash) when passed invalid parameters.

This is open ended, and can take whatever form you wish.

## Implementation

Test runner loads all files ending `.spec.js` or `.test.js` and evaluates them sequentially.

Usage:

```javascript
// inside some.test.js file
const assert = require('assert')
const test = require('path_to_test_folder')

// sync test
test('descriptive test name', () => {
  // assert something
})

// async test
test('another descriptive test name', async () => {
  // const expected = await someAsyncJob()
  // assert something
})
```

## Examples

- `app/lib.test.js` -- library tests
- `test/bfs.spec.js` -- utility function tests
