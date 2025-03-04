/** Notes:
 * Build Tower by the following given arguments:
- number of floors (integer and always greater than 0)
- block size (width, height) (integer pair and always greater than (0, 0))
 */

/**
 * This solution works, but is a naive solution:
 */

// export const towerBuilder = (nFloors: number, nBlockSize: [number, number]): string[] => {
// 	const blockWidth = nBlockSize[0]
// 	const blockHeight = nBlockSize[1]
// 	let currentBlockHeight = 1
// 	const tower = []

// 	for (let floor = 0, i = 1; floor < nFloors; floor++, i += 2) {
// 		const spaces = ' '.repeat(blockWidth * (nFloors - floor - 1))
// 		const stars = '*'.repeat(blockWidth * i)

// 		while (currentBlockHeight <= blockHeight) {
// 			tower.push(spaces + stars + spaces)
// 			currentBlockHeight++
// 		}

// 		currentBlockHeight = 1
// 	}

// 	return tower
// }

// console.log(towerBuilder(3, [2, 3])) // [ '    **    ', '    **    ', '    **    ', '  ******  ', '  ******  ', '  ******  ', '**********', '**********', '**********' ]

/**
 * Refactored:
 */

export const towerBuilder = (nFloors: number, nBlockSize: [number, number]): string[] => {
  const [blockWidth, blockHeight] = nBlockSize
  const tower: string[] = []

  for (let floor = 0; floor < nFloors; floor++) {
    const spaces = ' '.repeat(blockWidth * (nFloors - floor - 1))
    const stars = '*'.repeat(blockWidth * (2 * floor + 1))

    for (let h = 0; h < blockHeight; h++) {
      tower.push(spaces + stars + spaces)
    }
  }

  return tower
}

/**
 * Notes:
 */
