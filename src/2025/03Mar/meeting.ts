/**
 * This solution works, but is a naive solution:
 */

export const meeting = (s: string): string => {
	return s.split(';').map((name) => {
		const [firstName, lastName] = name.toUpperCase().split(':')
		return `(${lastName}, ${firstName})`
	}).sort().join('')
}

// console.log(
//   meeting(
//     'Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill',
//   ),
// )

/**
 * Refactored:
 */

/**
 * Notes:
 */