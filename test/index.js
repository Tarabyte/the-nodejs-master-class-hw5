const path = require('path')
const bfs = require('./bfs')

// requires all test
const loadTests = async dir => {
  const full = path.join(process.cwd(), dir)

  const specs = []
  // collect all tests
  await bfs(full, file => {
    if (file.endsWith('.test.js') || file.endsWith('.spec.js')) {
      specs.push(file)
    }
  })

  // require all tests
  specs.forEach(file => require(file))
}

// all pending tests
const tests = new Map()
// add tests
const addTest = (name, test, attempt = 0) => {
  const fullName = attempt ? `${name} (${attempt})` : name
  if (!tests.has(fullName)) {
    tests.set(fullName, test)
  } else {
    addTest(name, test, attempt + 1)
  }
}

// declare a test
const test = (name, fn) => {
  addTest(name, fn)
}

/**
 * Execute all pending tests
 */
const runAllTests = async () => {
  await loadTests('.')

  const all = [...tests.entries()]

  if (!all.length) {
    console.log(`\x1b[33mNo tests found\x1b[0m`)
  } else {
    for (const [name, test] of all) {
      try {
        await test()
        console.log(`\x1b[32m✔ ${name}\x1b[0m`)
      } catch (e) {
        console.error(`\x1b[31m✖ ${name}\x1b[0m\n`, e)
      }
    }
  }
}

test.runAllTests = runAllTests

module.exports = test

if (require.main === module) {
  runAllTests()
}
