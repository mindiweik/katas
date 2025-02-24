/**
 * This solution works, but is a naive solution:
 */

// export const towerBuilder = (nFloors: number): string[] => {
//   const result: string[] = []
//   let floor: number = 1
//   let stars: number = 1

//   while (floor <= nFloors) {
//     let current: string = buildFloors('', stars)
//     current = buildSpace(current, nFloors)
//     result.push(current)
//     stars += 2
//     floor++
//   }

//   return result
// }

// const buildFloors = (current: string, stars: number): string => {
//   while (stars > 0) {
//     current += '*'
//     stars--
//   }
//   return current
// }

// const buildSpace = (current: string, nFloors: number): string => {
//   while (current.length < nFloors * 2 - 1) {
//     current = ' ' + current + ' '
//   }
//   return current
// }

/**
 * Refactored:
 */

export const towerBuilder = (nFloors: number): string[] => {
	const result: string[] = []

	for (let i = 0; i < nFloors; i++) {
		const spaces = ' '.repeat(nFloors - i - 1)
		const stars = '*'.repeat(2 * i + 1)
		result.push(spaces + stars + spaces)
	}

	return result
}

/**
 * Notes:
 */
