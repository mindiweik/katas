/**
 * This solution works, but is a naive solution:
 */

// export const hammingDistance = (a: string, b: string): number => {
// 	let result = 0

// 	a.split('').forEach((char, index) => {
// 		if (char !== b[index]) {
// 			result++
// 		}		
// 	})

// 	return result
// }

/**
 * Refactored:
 */
export const hammingDistance = (a: string, b: string): number => {
	return a.split('').filter((char, index) => char !== b[index]).length
}

/**
 * Notes:
 * - Don't forget about the spread operator option! `[a...].filter`
 * - I thought about using ASCII codes, but realized that was an unnecessary lookup!
 */
