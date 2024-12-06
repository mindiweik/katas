import assert from 'assert'
import { capitalize } from './alternativeCapitalization'

const test1 = 'abcdef'
const test2 = 'codewars'
const test3 = 'abracadabra'
const test4 = 'codewarriors'
const test5 = 'indexinglessons'
const test6 = 'codingisafunactivity'

describe(capitalize.name, () => {
  it('should return with ["AbCdEf", "aBcDeF"]', () => {
    assert.deepStrictEqual(capitalize(test1), ['AbCdEf', 'aBcDeF'])
  })

  it('should return with ["CoDeWaRs", "cOdEwArS"]', () => {
    assert.deepStrictEqual(capitalize(test2), ['CoDeWaRs', 'cOdEwArS'])
  })

  it('should return with ["AbRaCaDaBrA", "aBrAcAdAbRa"]', () => {
    assert.deepStrictEqual(capitalize(test3), ['AbRaCaDaBrA', 'aBrAcAdAbRa'])
  })

  it('should return with ["CoDeWaRrIoRs", "cOdEwArRiOrS"]', () => {
    assert.deepStrictEqual(capitalize(test4), ['CoDeWaRrIoRs', 'cOdEwArRiOrS'])
  })

  it('should return with ["InDeXiNgLeSsOnS", "iNdExInGlEsSoNs"]', () => {
    assert.deepStrictEqual(capitalize(test5), ['InDeXiNgLeSsOnS', 'iNdExInGlEsSoNs'])
  })

  it('should return with ["CoDiNgIsAfUnAcTiViTy", "cOdInGiSaFuNaCtIvItY"]"', () => {
    assert.deepStrictEqual(capitalize(test6), ['CoDiNgIsAfUnAcTiViTy', 'cOdInGiSaFuNaCtIvItY'])
  })
})
