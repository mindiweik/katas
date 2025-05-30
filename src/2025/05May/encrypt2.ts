/**
 For encrypting strings this region of chars is given (in this order!):

all letters (ascending, first all UpperCase, then all LowerCase)
all digits (ascending)
the following chars: .,:;-?! '()$%&"
These are 77 chars! (This region is zero-based.)

Write two methods:

export function encrypt(text:string):string
export function decrypt(encryptedText:string):string
Prechecks:

If the input-string has chars, that are not in the region, throw an Exception(C#, Python) or Error(JavaScript).
If the input-string is null or empty return exactly this value!
For building the encrypted string:

For every second char do a switch of the case.
For every char take the index from the region. Take the difference from the region-index of the char before (from the input text! Not from the fresh encrypted char before!). (Char2 = Char1-Char2)
Replace the original char by the char of the difference-value from the region. In this step the first letter of the text is unchanged.
Replace the first char by the mirror in the given region. ('A' -> '"', 'B' -> '&', ...)
Simple example:

Input: "Business"
Step 1: "BUsInEsS"
Step 2: "B61kujla"
B -> U
B (1) - U (20) = -19
-19 + 77 = 58
Region[58] = "6"
U -> s
U (20) - s (44) = -24
-24 + 77 = 53
Region[53] = "1"
Step 3: "&61kujla"
 */

const region = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
  '0',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '.',
  ',',
  ':',
  ';',
  '-',
  '?',
  '!',
  ' ',
  "'",
  '(',
  ')',
  '$',
  '%',
  '&',
  '"',
]

const regionIndex = (char: string) => region.indexOf(char)
const regionChar = (index: number) => region[index]

const validateInput = (text: string): void => {
  for (const char of text) {
    if (!region.includes(char)) {
      throw new Error(`Invalid character: ${char}`)
    }
  }
}

const switchEverySecondCase = (text: string): string => {
  return [...text]
    .map((char, i) => {
      if (i % 2 === 1) {
        if (/[A-Z]/.test(char)) return char.toLowerCase()
        if (/[a-z]/.test(char)) return char.toUpperCase()
      }
      return char
    })
    .join('')
}

const mirrorChar = (char: string): string => {
  return region[76 - regionIndex(char)]
}

export function encrypt(text: string): string {
  if (!text) return text
  validateInput(text)

  // Step 1 - switch every second char case
  let result = switchEverySecondCase(text)

  // Step 2 - region-index difference
  result = [...result]
    .map((char, mapIndex) => {
      if (mapIndex === 0) return char // first char remains unchanged
      const prevChar = regionChar(regionIndex(result[mapIndex - 1]))
      const prevIndex = regionIndex(prevChar)
      const currentIndex = regionIndex(char)
      const newIndex = (prevIndex - currentIndex + 77) % 77
      return regionChar(newIndex)
    })
    .join('')

  // Step 3 - region-index mirror the first char
  result = mirrorChar(result[0]) + result.slice(1)

  return result
}

export function decrypt(encryptedText: string): string {
  if (!encryptedText) return encryptedText
  validateInput(encryptedText)

  // Step 3 - region-index mirror the first char
  let result = mirrorChar(encryptedText[0]) + encryptedText.slice(1)

  // Step 2 - reverse the region-index difference logic
  const step2Chars = result.split('')
  const decrypted: string[] = [step2Chars[0]] // start with the mirrored first char

  for (let i = 1; i < step2Chars.length; i++) {
    const prevChar = decrypted[i - 1] // use last decrypted char
    const prevIndex = regionIndex(prevChar)
    const encryptedIndex = regionIndex(step2Chars[i])
    const originalIndex = (prevIndex - encryptedIndex + 77) % 77
    decrypted.push(regionChar(originalIndex))
  }

  result = decrypted.join('')

  // Step 1 - switch every second char case
  return switchEverySecondCase(result)
}
