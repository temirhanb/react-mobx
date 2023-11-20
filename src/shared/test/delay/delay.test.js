const delay = require("./delay");


describe('Test async function', () => {
  test('Correct async fetch', async () => {
    const sum = await delay(() => 5 + 5, 1000)
    expect(sum).toBe(10)
  })

})
