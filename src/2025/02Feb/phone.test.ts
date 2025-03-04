import assert from 'assert'
import { directory, phone } from './phone'

const testing = (string: string, num: string, expected: string) => {
  assert.equal(phone(string, num), expected)
}

describe(phone.name, function () {
  it('should properly parse the phone book data', function () {
    testing(
      directory,
      '48-421-674-8974',
      'Phone => 48-421-674-8974, Name => Anastasia, Address => Via Quirinal Roma',
    )
    testing(
      directory,
      '19-421-674-8974',
      'Phone => 19-421-674-8974, Name => C Powel, Address => Chateau des Fosses Strasbourg F-68000',
    )
    testing(
      directory,
      '1-921-512-2222',
      'Phone => 1-921-512-2222, Name => Wilfrid Stevens, Address => Wild Street AA-67209',
    )
    testing(
      directory,
      '1-908-512-2222',
      "Phone => 1-908-512-2222, Name => Peter O'Brien, Address => High Street CC-47209",
    )
  })
})
