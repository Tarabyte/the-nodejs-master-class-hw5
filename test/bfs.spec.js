const assert = require('assert')
const test = require('.')
const bfs = require('./bfs')

test('bfs should be a function', () => {
  assert.strictEqual(typeof bfs, 'function')
})

test('bfs should traverse current file', async () => {
  const all = []

  await bfs(__dirname, file => all.push(file))

  assert.ok(all.find(file => file.endsWith(__filename)))
})
