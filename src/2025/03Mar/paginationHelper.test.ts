import assert from 'assert'
import { PaginationHelper } from './paginationHelper'

describe(PaginationHelper.name, () => {
  const collection = ['a', 'b', 'c', 'd', 'e', 'f']
  const actualHelper = new PaginationHelper(collection, 4)

  it('should return 2', () => {
    const actual = actualHelper.pageCount()
    assert.deepStrictEqual(actual, 2)
  })

  it('should return 6', () => {
    const actual = actualHelper.itemCount()
    assert.deepStrictEqual(actual, 6)
  })

  it('should return 4', () => {
    const actual = actualHelper.pageItemCount(0)
    assert.deepStrictEqual(actual, 4)
  })

  it('should return 2', () => {
    const actual = actualHelper.pageItemCount(1)
    assert.deepStrictEqual(actual, 2)
  })

  it('should return -1', () => {
    const actual = actualHelper.pageItemCount(2)
    assert.deepStrictEqual(actual, -1)
  })

  it('should return 1', () => {
    const actual = actualHelper.pageIndex(5)
    assert.deepStrictEqual(actual, 1)
  })

  it('should return 0', () => {
    const actual = actualHelper.pageIndex(2)
    assert.deepStrictEqual(actual, 0)
  })

  it('should return -1', () => {
    const actual = actualHelper.pageIndex(20)
    assert.deepStrictEqual(actual, -1)
  })

  it('should return -1', () => {
    const actual = actualHelper.pageIndex(-10)
    assert.deepStrictEqual(actual, -1)
  })
})
