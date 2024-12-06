export const capitalize = (s: string): [string, string] => {
  const evens = s
    .split('')
    .map((char, i) => (i % 2 === 0 ? char.toUpperCase() : char))
    .join('')
  const odds = s
    .split('')
    .map((char, i) => (i % 2 !== 0 ? char.toUpperCase() : char))
    .join('')
  return [evens, odds]
}

// export function capitalize(s: string): [string, string] {
// 	let evens = '', odds = '', i = 0
// 	for (const letter of s) {
// 		if (i % 2 === 0) {
// 			evens += letter.toUpperCase()
// 			odds += letter
// 		} else {
// 			evens += letter
// 			odds += letter.toUpperCase()
// 		}
// 		i++
// 	}

// 	return [evens, odds]
// }

/**
 * Options I liked:
 * 
export const capitalize = (s: string) => [
  [...s].map((l, i) => i % 2 ? l : l.toUpperCase()).join(''),
  [...s].map((l, i) => i % 2 ? l.toUpperCase() : l).join(''),
];

... index%2 and !(index%2) --> using the falsy/truthy approach

 */
