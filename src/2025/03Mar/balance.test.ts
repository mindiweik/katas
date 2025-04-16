import assert from 'assert'
import { balance } from './balance'

describe(balance.name, () => {
  const testInput1 = `1000.00!=

125 Market !=:125.45
126 Hardware =34.95
127 Video! 7.45
128 Book :14.32
129 Gasoline ::16.10`

  const testInput2 = `1000.00!=

125 Market; !=:125.45
126 Hardware =34.95;
127 Video! 7.45
128 Book :14.32
129 Gasoline ::16.10`

  const expectedOutput =
    'Original Balance: 1000.00\r\n125 Market 125.45 Balance 874.55\r\n126 Hardware 34.95 Balance 839.60\r\n127 Video 7.45 Balance 832.15\r\n128 Book 14.32 Balance 817.83\r\n129 Gasoline 16.10 Balance 801.73\r\nTotal expense  198.27\r\nAverage expense  39.65'

  it(`should return ${expectedOutput}`, () => {
    const actual = balance(testInput1)
    assert.deepStrictEqual(actual, expectedOutput)
  })

  it(`should return ${expectedOutput}`, () => {
    const actual = balance(testInput2)
    assert.deepStrictEqual(actual, expectedOutput)
  })
})
