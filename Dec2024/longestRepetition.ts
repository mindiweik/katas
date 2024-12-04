/** 
 * This has an issue because we need to specifically return the first in the order of APPEARANCE!
 * 
export function longestRepetition(text: string): [string, number] {
	const counts: Record<string, number> = {}
	let currentLetter = ''
	let currentCount = 0

	for (const letter of text) {
		if (currentLetter !== letter) {
			currentLetter = letter
			currentCount = 1
		} else {
			currentCount++
		}

		if (counts[letter]) {
			if (currentCount > counts[letter]) {
				counts[letter] = currentCount
			}
		} else {
			counts[letter] = currentCount
		}
	}

	let longestChar = ''
	let longestCount = 0
	for (const key of Object.keys(counts)) {
		if (counts[key] > longestCount) {
			longestChar = key
			longestCount = counts[key]
		}
	}

	return [longestChar, counts[longestChar] ?? 0]
}
	*/


/**
 * This solution works, but is a naive solution:
 */
// export function longestRepetition(text: string): [string, number] {
	
// 	if (text.length === 0) {
// 		return ['', 0]
// 	}
	
// 	let currentChar = text[0]
// 	const arr: [string, number][] = [[currentChar, 0]]

// 	for (const letter of text) {
// 		if (letter === currentChar) {
// 			arr[arr.length-1][1]++
// 		} else {
// 			currentChar = letter
// 			arr.push([letter, 1])
// 		}

// 	}

// 	let longestOption = arr[0]
// 	for (const subArr of arr) {
// 		if (subArr[1] > longestOption[1]) {
// 			longestOption = subArr
// 		}
// 	}

// 	return longestOption
// }

/**
 * Attempt at refactoring:
 */

export function longestRepetition(text: string): [string, number] {
	if (text.length === 0) {
		return ["", 0];
	}

	const arr: [string, number][] = [[text[0], 0]];

	for (const letter of text) {
		if (letter === arr[arr.length - 1][0]) {
			arr[arr.length - 1][1]++;
		} else {
			arr.push([letter, 1]);
		}
	}

	let longestOption = arr[0];
	for (const subArr of arr) {
		if (subArr[1] > longestOption[1]) {
			longestOption = subArr;
		}
	}

	return longestOption;
}

const test1 = 'aaaabb' // ['a', 4]
const test2 = 'bbbaaabaaaa' // ['a', 4]
const test3 = 'cbdeuuu900' // ['u', 3]
const test4 = 'abbbbb' // ['b', 5]
const test5 = 'aabb' // ['a', 2]
const test6 = 'ba' // ['b', 1]
const test7 = '' // ['', 0]

console.log(longestRepetition(test1)) // ['a', 4]
console.log(longestRepetition(test2)) // ['a', 4]
console.log(longestRepetition(test3)) // ['u', 3]
console.log(longestRepetition(test4)) // ['b', 5]
console.log(longestRepetition(test5)) // ['a', 2]
console.log(longestRepetition(test6)) // ['b', 1]
console.log(longestRepetition(test7)) // ['', 0]