/**
 * Traverse file directory using folders first approach
 */
const fs = require('fs')
const path = require('path')
const { promisify } = require('util')
const readdir = promisify(fs.readdir)
const stat = promisify(fs.stat)

// well technically this is not a bfs :) but...
async function bfs(dir, fn) {
  const dirs = []
  const files = []

  // read the dir
  for (const item of await readdir(dir)) {
    const full = path.join(dir, item)
    const stats = await stat(full)

    // split files and folders
    if (stats.isDirectory()) {
      dirs.push(full)
    } else if (stats.isFile()) {
      files.push(full)
    } else {
      console.warn(`We do not follow symlinks ${full} is ignored`)
    }
  }

  // process files
  for (const file of files) {
    await fn(file)
  }

  // process folders
  for (const dir of dirs) {
    await bfs(dir, fn)
  }
}

module.exports = bfs
