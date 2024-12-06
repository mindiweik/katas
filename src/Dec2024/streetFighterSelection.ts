/**
 * Selection Grid Layout in text:

| Ryu  | E.Honda | Blanka  | Guile   | Balrog | Vega    |
| Ken  | Chun Li | Zangief | Dhalsim | Sagat  | M.Bison |
 */

type Move = 'down' | 'up' | 'right' | 'left'

/**
 * This solution works, but is a naive solution:
 */
// export const streetFighterSelection = (fighters: string[][], position: number[], moves: Move[]) => {
// 	const result: string[] = []
// 	let x = position[0]
// 	let y = position[1]

// 	for (const move of moves) {
// 		if (move === 'up') {
// 			x = (x === 1) ? 0 : 0
// 		} else if (move === 'down') {
// 			x = (x === 0) ? 1 : 1
// 		} else if (move === 'left') {
// 			y = (y === 0) ? fighters[0].length - 1 : y - 1
// 		} else if (move === 'right') {
// 			y = (y === fighters[0].length - 1) ? 0 : y + 1
// 		}

// 		result.push(fighters[x][y])
// 	}

// 	return result
// }

/**
 * Refactored:
 */

export const streetFighterSelection = (fighters: string[][], position: number[], moves: Move[]) => {
  const length = fighters[0].length - 1
  let x = position[0]
  let y = position[1]

  return moves.map((move) => {
    if (move === 'up') {
      x = 0
    } else if (move === 'down') {
      x = 1
    } else if (move === 'left') {
      y = !y ? length : y - 1
    } else if (move === 'right') {
      y = y === length ? 0 : y + 1
    }

    return fighters[x][y]
  })
}

/**
 * Notes:
 *
 * I liked that someone used a decrement/increment for the y value
 */
