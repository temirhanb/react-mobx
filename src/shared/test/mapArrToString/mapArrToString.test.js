const mapArrToString = require("./mapArrToString");


describe('Test mapArrToString', () => {
  test('Correct value', () => {
    expect(mapArrToString([1, 2, 3, 4])).toEqual(['1', '2', '3', '4'])
  })
  test('Uncorrected value', () => {
    expect(mapArrToString([1, 2, 3, 4, null, undefined])).toEqual(['1', '2', '3', '4'])
  })
  test('empty array', () => {
    expect(mapArrToString([])).toEqual([])
  })
  test('negative array', () => {
    expect(mapArrToString([1, 2, 3, 4])).not.toEqual([1, 2, 3, 4])
  })
})
