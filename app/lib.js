/**
 * Simple Library functions
 */

module.exports = {
  /**
   * Delay value promise
   */
  delay(timeout, value) {
    return new Promise((resolve, reject) => {
      setTimeout(value instanceof Error ? reject : resolve, timeout, value)
    })
  },

  /**
   * Recurrsive factorial computation
   * @param {Number} n
   */
  factorial: function factorial(n) {
    if (typeof n !== 'number' || n < 0) {
      return NaN
    }

    return n === 0 ? 1 : n * factorial(n - 1)
  },

  /**
   * Generates fizzBuzz sequence of a given length
   * @param {Number} length
   */
  fizzBuzz(length) {
    if (typeof length !== 'number' || length <= 0) {
      return []
    }

    return Array.from({ length }, (_, i) => {
      i++
      const multiple3 = i % 3 === 0
      const multiple5 = i % 5 === 0

      if (multiple3 && multiple5) return 'fizzbuzz'
      if (multiple3) return 'fizz'
      if (multiple5) return 'buzz'
      return `${i}`
    })
  },
}
