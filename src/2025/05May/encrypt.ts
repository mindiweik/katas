/**
 * Implement a pseudo-encryption algorithm which given a string S and an integer N concatenates all the odd-indexed characters of S with all the even-indexed characters of S, this process should be repeated N times.
 * 
 * Examples:

encrypt("012345", 1)  =>  "135024"
encrypt("012345", 2)  =>  "135024"  ->  "304152"
encrypt("012345", 3)  =>  "135024"  ->  "304152"  ->  "012345"

encrypt("01234", 1)  =>  "13024"
encrypt("01234", 2)  =>  "13024"  ->  "32104"
encrypt("01234", 3)  =>  "13024"  ->  "32104"  ->  "20314"
Together with the encryption function, you should also implement a decryption function which reverses the process.

If the string S is an empty value or the integer N is not positive, return the first argument without changes.
 */

/**
 * This solution works, but is a naive solution:
 */

export const encrypt = (text: string | null, n: number): string | null => {
  if (text === null || n <= 0) {
    return text
  }

  let result = [...text]

  while (n > 0) {
    const odds = [], evens = []

    for (let i = 0; i < result.length; i++) {
      if (i % 2 === 0) {
        evens.push(result[i])
      } else {
        odds.push(result[i])
      }
    }

    result = odds.concat(evens)

    n--
  }

  return result.join('')
}

export const decrypt = (encryptedText: string | null, n: number): string | null => {
  if (encryptedText === null || n <= 0) {
    return encryptedText
  }

  let result = encryptedText

  while (n > 0) {
    const half = Math.floor(result.length / 2)
    const odds = result.slice(0, half)
    const evens = result.slice(half)

    let decrypted = ''
    let o = 0, e = 0

    for (let i = 0; i < result.length; i++) {
      if (i % 2 === 0) {
        decrypted += evens[e++]
      } else {
        decrypted += odds[o++]
      }
    }

    result = decrypted
    n--
  }

  return result
}

/**
 * Refactored:
 */

/**
 * Notes:
 */