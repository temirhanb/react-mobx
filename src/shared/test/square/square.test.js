const square = require("./square");


describe('Test square', () => {
  // test('Correct value', () => {
  //   expect(square(3)).toBe(9)
  // })
  // test('less value', () => {
  //   expect(square(3)).toBeLessThan(10)
  // })
  // test('greater value', () => {
  //   expect(square(3)).toBeGreaterThan(7)
  // })
  // test('not undefined', () => {
  //   expect(square(3)).not.toBe(undefined)
  // })
  test('Mock test', () => {
    const testMathPow = jest.spyOn(Math, 'pow')
    square(2)
    expect(testMathPow).toBeCalledTimes(1)
  })
  test('Mock test 1', () => {
    const testMathPow = jest.spyOn(Math, 'pow')
    square(1)
    expect(testMathPow).toBeCalledTimes(0)
  })
  afterEach(() => {
    jest.clearAllMocks()
  })
})
