const { sum } = require('./index')

describe('Playground test suite', () => {
  it('sum 2 numbers', () => {
    expect(sum(1, 1)).toBe(2)
  })
})