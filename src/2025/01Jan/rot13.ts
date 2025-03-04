/**
 * This solution works, but is a naive solution:
 */

// export const rot13 = (str: string) => {
// 	let result = ''

// 	for (let i = 0; i < str.length; i++) {
// 		const code = str.charCodeAt(i)

// 		if (code >= 65 && code <= 122) {
// 			if (code + 13 > 122) {
//         result += String.fromCharCode(code - 13)
// 			} else {
// 				result += String.fromCharCode(code + 13)
// 			}
// 		} else {
// 			result += str[i]
// 		}

// 	}

// 	return result
// }

/**
 * Refactored:
 */

export const rot13 = (str: string) => {
  return str.replace(/[A-Za-z]/g, (c) => {
    return String.fromCharCode(c.charCodeAt(0) + (c.toLowerCase() <= 'm' ? 13 : -13))
  })
}

/**
 * Notes:
 *
 * I also saw this regex: `/[a-z]/gi` which I prefer because it's simpler.
 */
