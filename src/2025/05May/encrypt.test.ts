import assert from 'assert'
import { decrypt, encrypt } from './encrypt'

describe('encrypt and decrypt', () => {
  describe(encrypt.name, () => {
    it('should return "This is a test!"', () => {
      const actual = encrypt('This is a test!', 0)
      const expected = 'This is a test!'
      assert.strictEqual(actual, expected)
    })

    it('should return "hsi  etTi sats!"', () => {
      const actual = encrypt('This is a test!', 1)
      const expected = 'hsi  etTi sats!'
      assert.strictEqual(actual, expected)
    })

    it('should return "s eT ashi tist!"', () => {
      const actual = encrypt('This is a test!', 2)
      const expected = 's eT ashi tist!'
      assert.strictEqual(actual, expected)
    })

    it('should return " Tah itse sits!"', () => {
      const actual = encrypt('This is a test!', 3)
      const expected = ' Tah itse sits!'
      assert.strictEqual(actual, expected)
    })

    it('should return "This is a test!"', () => {
      const actual = encrypt('This is a test!', 4)
      const expected = 'This is a test!'
      assert.strictEqual(actual, expected)
    })

    it('should return "This is a test!"', () => {
      const actual = encrypt('This is a test!', -1)
      const expected = 'This is a test!'
      assert.strictEqual(actual, expected)
    })

    it('should return "hskt svr neetn!Ti aai eyitrsig"', () => {
      const actual = encrypt('This kata is very interesting!', 1)
      const expected = 'hskt svr neetn!Ti aai eyitrsig'
      assert.strictEqual(actual, expected)
    })
  })

  describe(decrypt.name, () => {
    it('should return "This is a test!"', () => {
      const actual = decrypt('This is a test!', 0)
      const expected = 'This is a test!'
      assert.strictEqual(actual, expected)
    })

    it('should return "This is a test!"', () => {
      const actual = decrypt('hsi  etTi sats!', 1)
      const expected = 'This is a test!'
      assert.strictEqual(actual, expected)
    })

    it('should return "This is a test!"', () => {
      const actual = decrypt('s eT ashi tist!', 2)
      const expected = 'This is a test!'
      assert.strictEqual(actual, expected)
    })

    it('should return "This is a test!"', () => {
      const actual = decrypt(' Tah itse sits!', 3)
      const expected = 'This is a test!'
      assert.strictEqual(actual, expected)
    })

    it('should return "This is a test!"', () => {
      const actual = decrypt('This is a test!', 4)
      const expected = 'This is a test!'
      assert.strictEqual(actual, expected)
    })

    it('should return "This is a test!"', () => {
      const actual = decrypt('This is a test!', -1)
      const expected = 'This is a test!'
      assert.strictEqual(actual, expected)
    })

    it('should return "This kata is very interesting!"', () => {
      const actual = decrypt('hskt svr neetn!Ti aai eyitrsig', 1)
      const expected = 'This kata is very interesting!'
      assert.strictEqual(actual, expected)
    })
  })

  describe('Null or Empty', () => {
    it('should return "" for encrypt', () => {
      const actual = encrypt('', 0)
      const expected = ''
      assert.strictEqual(actual, expected)
    })

    it('should return "" for decrypt', () => {
      const actual = decrypt('', 0)
      const expected = ''
      assert.strictEqual(actual, expected)
    })

    it('should return null for encrypt', () => {
      const actual = encrypt(null, 0)
      const expected = null
      assert.strictEqual(actual, expected)
    })

    it('should return null for decrypt', () => {
      const actual = decrypt(null, 0)
      const expected = null
      assert.strictEqual(actual, expected)
    })
  })
})
