/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * This solution works, but is a naive solution:
 */

// export function findTheNotFittingElement(series: unknown[]): number | string | boolean | null {
// 	const digitCharRegex = /[0-9]/
//   const upperCharRegex = /[A-Z]/
//   const lowerCharRegex = /[a-z]/
// 	const specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/

// 	// mixture of types only
// 	const onlyOneBoolean = series.filter((item) => typeof item === 'boolean')
// 	if (onlyOneBoolean.length === 1) return onlyOneBoolean[0]

// 	const onlyOneNumber = series.filter((item) => typeof item === 'number')
// 	if (onlyOneNumber.length === 1) return onlyOneNumber[0]

// 	const onlyOneChar = series.filter((item) => typeof item === 'string')
// 	if (onlyOneChar.length === 1) return onlyOneChar[0]

// 	const booleans = onlyOneBoolean.length
// 	const numbers = onlyOneNumber.length
// 	const chars = onlyOneChar.length

// 	if (booleans) {
// 		const trueBools = series.filter((item) => item === true)
// 		if (trueBools.length === 1) {
// 			return trueBools[0]
// 		} else {
// 			return false
// 		}
// 	} else if (numbers) {
// 		const numbersArr = series as number[]

// 		// positive and negative
// 		const positiveNumbers = numbersArr.filter((item) => item > 0)
// 		const negativeNumbers = numbersArr.filter((item) => item < 0)

// 		if (positiveNumbers.length === 1) {
// 			return positiveNumbers[0]
// 		} else if (negativeNumbers.length === 1) {
// 			return negativeNumbers[0]
// 		}

// 		// evens and odds
// 		const evenNumbers = numbersArr.filter((item) => item % 2 === 0)
// 		const oddNumbers = numbersArr.filter((item) => item % 2 !== 0)
// 		if (evenNumbers.length === 1) {
// 			return evenNumbers[0]
// 		} else if (oddNumbers.length === 1) {
// 			return oddNumbers[0]
// 		}

// 		// digits
// 		const numbers: { [key: number]: number } = {}
//     for (const num of numbersArr) {
//       if (numbers[num]) {
//         numbers[num]++
//       } else {
//         numbers[num] = 1
//       }
//     }
// 	const singleDigits = Object.keys(numbers).filter((key) => numbers[+key] === 1)
//     if (singleDigits.length === 1) {
//       return +singleDigits[0]
//     }
// 	} else if (chars) {
// 		const charsArr = series as string[]

// 		// number string
// 		const digitChars = charsArr.filter((item) => digitCharRegex.test(item))
// 		if (digitChars.length === 1) {
// 			return digitChars[0]
// 		}

// 		// upper vs lower
// 		const upperChars = charsArr.filter((item) => upperCharRegex.test(item))
// 		const lowerChars = charsArr.filter((item) => lowerCharRegex.test(item))
// 		if (upperChars.length === 1) {
// 			return upperChars[0]
// 		} else if (lowerChars.length === 1) {
// 			return lowerChars[0]
// 		}

// 		// special chars
// 		const specialChars = charsArr.filter((item) => specialCharRegex.test(item))
// 		if (specialChars.length === 1) {
// 			return specialChars[0]
// 		}

// 		// letters
// 		const letters: { [key: string]: number } = {};
// 		for (const letter of charsArr) {
// 			if (letters[letter]) {
// 				letters[letter]++;
// 			} else {
// 				letters[letter] = 1;
// 			}
// 		}
// 		const singleDigits = Object.keys(letters).filter((key) => letters[key] === 1);
// 		if (singleDigits.length === 1) {
// 			return singleDigits[0];
// 		}
// 	}

// 	return null;
// }

/**
 * Refactored:
 */
//  // eslint-disable-next-line @typescript-eslint/no-explicit-any
// const groupByType = (series: any[]) => {
//   const grouped = {
//     boolean: [] as boolean[],
//     number: [] as number[],
//     string: [] as string[],
//   }

//   for (const item of series) {
//     if (typeof item === 'boolean') grouped.boolean.push(item)
//     else if (typeof item === 'number') grouped.number.push(item)
//     else if (typeof item === 'string') grouped.string.push(item)
//   }

//   return grouped
// }

// const findUnique = <T>(series: T[], condition: (item: T) => boolean): T | null => {
//   const filtered = series.filter(condition)
//   return filtered.length === 1 ? filtered[0] : null
// }

// const checkElementsList = <T extends number | string>(series: T[]): T | null => {
//   const countMap = new Map<T, number>()

//   for (const el of series) {
//     countMap.set(el, (countMap.get(el) || 0) + 1)
//   }

//   // eslint-disable-next-line @typescript-eslint/no-unused-vars
//   const unique = [...countMap.entries()].find(([_, count]) => count === 1)
//   return unique ? unique[0] : null
// }

// const findTheNotFittingBoolean = (series: boolean[]): boolean => {
//   const trueBools = series.filter((item) => item === true)
//   return trueBools.length === 1 ? trueBools[0] : false
// }

// const findTheNotFittingNumber = (series: number[]): number | null => {
//   return (
//     findUnique(series, (item) => item > 0) || // Positive number
//     findUnique(series, (item) => item < 0) || // Negative number
//     findUnique(series, (item) => item % 2 === 0) || // Even number
//     findUnique(series, (item) => item % 2 !== 0) || // Odd number
//     checkElementsList(series) // Unique digit
//   )
// }

// const findTheNotFittingChar = (series: string[]): string | null => {
//   const digitCharRegex = /[0-9]/
//   const upperCharRegex = /[A-Z]/
//   const lowerCharRegex = /[a-z]/
//   const specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/

//   return (
//     findUnique(series, (item) => digitCharRegex.test(item)) || // Digit
//     findUnique(series, (item) => upperCharRegex.test(item)) || // Uppercase
//     findUnique(series, (item) => lowerCharRegex.test(item)) || // Lowercase
//     findUnique(series, (item) => specialCharRegex.test(item)) || // Special char
//     checkElementsList(series) // Unique letter
//   )
// }

// // eslint-disable-next-line @typescript-eslint/no-explicit-any
// export function findTheNotFittingElement(series: any[]): number | string | boolean | null {
//   const { boolean, number, string } = groupByType(series)

//   if (boolean.length === 1) return boolean[0]
//   if (number.length === 1) return number[0]
//   if (string.length === 1) return string[0]

//   if (boolean.length) return findTheNotFittingBoolean(boolean)
//   if (number.length) return findTheNotFittingNumber(number)
//   if (string.length) return findTheNotFittingChar(string)

//   return null
// }

/**
 * Refactored for as few iterations as possible:
 */
const digitCharRegex = /[0-9]/
const upperCharRegex = /[A-Z]/
const lowerCharRegex = /[a-z]/
const specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/

const addToMap = (map: Map<string, any>, key: string, currentValue: number | boolean | string): Map<string, any> => {
  if (map.has(key)) {
    map.set(key, ([...map.get(key), currentValue]))
  } else {
    map.set(key, [currentValue])
  }

  return map
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function findTheNotFittingElement(series: any[]): number | string | boolean | null {
  let results: Map<string, any> = new Map()

  for (const current of series) {
    if (typeof current === 'boolean') {
      if (current) {
        results = addToMap(results, 'true', current)
      } else {
        results = addToMap(results, 'false', current)
      }
    } else if (typeof current === 'number') {
      if (current > 0) {
        results = addToMap(results, 'positive', current)
      } else {
        results = addToMap(results, 'negative', current)
      }

      if (current % 2 === 0) {
        results = addToMap(results, 'even', current)
      } else {
        results = addToMap(results, 'odd', current)
      }

      results = addToMap(results, 'allDigits', current)
    } else if (typeof current === 'string') {
      if (digitCharRegex.test(current)) {
        results = addToMap(results, 'stringDigits', current)
      }

      if (lowerCharRegex.test(current)) {
        results = addToMap(results, 'lowercase', current)
      }

      if (upperCharRegex.test(current)) {
        results = addToMap(results, 'uppercase', current)
      }

      if (specialCharRegex.test(current)) {
        results = addToMap(results, 'specialChars', current)
      }

      results = addToMap(results, 'allLetters', current)
    }
  }

  if (results.get('true')?.length === 1) return results.get('true')[0]
  if (results.get('false')?.length === 1) return results.get('false')[0]
  if (results.get('positive')?.length === 1) return results.get('positive')[0]
  if (results.get('negative')?.length === 1) return results.get('negative')[0]
  if (results.get('even')?.length === 1) return results.get('even')[0]
  if (results.get('odd')?.length === 1) return results.get('odd')[0]
  if (results.get('stringDigits')?.length === 1) return results.get('stringDigits')[0]
  if (results.get('lowercase')?.length === 1) return results.get('lowercase')[0]
  if (results.get('uppercase')?.length === 1) return results.get('uppercase')[0]
  if (results.get('specialChars')?.length === 1) return results.get('specialChars')[0]

  const allDigits = results.get('allDigits')
  if (allDigits) {
    const countMap = new Map<number, number>()

    for (const digit of allDigits) {
      countMap.set(digit, (countMap.get(digit) || 0) + 1)
    }

    const unique = [...countMap.entries()].find(([_, count]) => count === 1)
    if (unique) return unique[0]
  }

  const allLetters = results.get('allLetters')
  if (allLetters) {
    const countMap = new Map<string, number>()

    for (const letter of allLetters) {
      countMap.set(letter, (countMap.get(letter) || 0) + 1)
    }

    const unique = [...countMap.entries()].find(([_, count]) => count === 1)
    if (unique) return unique[0]
  }

  return null
}

/**
 * Notes:
 */
