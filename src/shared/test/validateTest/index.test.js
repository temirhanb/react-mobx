const validate = require("./validate");


describe('Validation value', () => {
  test('value 50', () => {
    expect(validate(50)).toBe(true)
  })
  test('value 0', () => {
    expect(validate(0)).toBe(true)
  })
  test('value 100', () => {
    expect(validate(100)).toBe(true)
  })
  test('value -1', () => {

    expect(validate(-1)).toBe(false)
  })
  test('value 101', () => {
    expect(validate(101)).toBe(false)
  })
})
