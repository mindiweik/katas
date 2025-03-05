/**
 * Rules:
 *
 * 1. The second and the last letter are switched (e.g. Hello becomes Holle).
 * 2. The first letter is replaced by its character code. (e.g. H becomes 72)
 * 3. There are no special characters used, only letters and spaces.
 * 4. All words are separated by a single space.
 * 5. There are no leading or trailing spaces.
 */

/**
 * This solution works, but is a naive solution:
 */

// export const decipherThis = (str: string): string => {
//   const result: string[] = []
//   const words = str.split(' ')
//   words.forEach((word) => {
//     const firstChar = String.fromCharCode(Number(word.match(/(\d+)/g)?.[0]))
// 		const remainingCharList = word.match(/\D/g)
// 		let remaining = ''
// 		if (remainingCharList) {
// 			const temp = remainingCharList[0]
// 			remainingCharList[0] = remainingCharList[remainingCharList.length - 1]
// 			remainingCharList[remainingCharList.length - 1] = temp
// 			remaining = remainingCharList.join('')
// 		}
// 		result.push(firstChar + remaining)
//   })

//   return result.join(' ')
// }

/**
 * Refactored:
 */
export const decipherThis = (str: string): string => {
  return str
    .split(' ')
    .map((word) => {
      const firstChar = String.fromCharCode(Number(word.match(/(\d+)/g)?.[0]))
      const remainingCharList = word.match(/\D/g)
      let remaining = ''
      if (remainingCharList) {
        const temp = remainingCharList[0]
        remainingCharList[0] = remainingCharList[remainingCharList.length - 1]
        remainingCharList[remainingCharList.length - 1] = temp
        remaining = remainingCharList.join('')
      }
      return firstChar + remaining
    })
    .join(' ')
}

/**
 * Notes:
 * There are plenty of clever regex patterns that can be used,
 * but they are often a bit difficult to understand upon first glance.
 *
 * I prefer the more readable approach!
 */
