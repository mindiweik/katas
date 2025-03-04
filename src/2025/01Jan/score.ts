/**
 Three 1's => 1000 points
 Three 6's =>  600 points
 Three 5's =>  500 points
 Three 4's =>  400 points
 Three 3's =>  300 points
 Three 2's =>  200 points
 One   1   =>  100 points
 One   5   =>   50 point

 Note: your solution must not modify the input array.

Example scoring

 Throw       Score
 ---------   ------------------
 5 1 3 4 1   250:  50 (for the 5) + 2 * 100 (for the 1s)
 1 1 1 3 1   1100: 1000 (for three 1s) + 100 (for the other 1)
 2 4 4 5 4   450:  400 (for three 4s) + 50 (for the 5)

 */

/**
 * This solution works, but is a naive solution:
 */

// export const score = (dice: number[]): number => {
// 	let finalScore = 0
// 	const sortedDice: { [key: string]: number } = {}
// 	dice.forEach(die => {
// 		if (sortedDice[die]) {
// 			sortedDice[die]++
// 		} else {
// 			sortedDice[die] = 1
// 		}
// 	})

// 	const keys = Object.keys(sortedDice)
// 	for (const key of keys) {
// 		if (sortedDice[key]) {
// 			let amount = sortedDice[key]
// 			switch (key) {
// 				case '1':
// 					if (amount >= 3) {
// 						finalScore += 1000
// 						amount -= 3
// 					}
// 					if (amount === 2) {
// 						finalScore += 200
// 					} else if (amount === 1) {
// 						finalScore += 100
// 					}
// 					break
// 				case '2':
// 					if (amount === 3) {
// 						finalScore += 200
// 					}
// 					break
// 				case '3':
// 					if (amount === 3) {
// 						finalScore += 300
// 					}
// 					break
// 				case '4':
// 					if (amount === 3) {
// 						finalScore += 400
// 					}
// 					break
// 				case '5':
// 					if (amount >= 3) {
// 						finalScore += 500
// 						amount -= 3
// 					}
// 					if (amount === 2) {
// 						finalScore += 100
// 					} else if (amount === 1) {
// 						finalScore += 50
// 					}
// 					break
// 				case '6':
// 					if (amount === 3) {
// 						finalScore += 600
// 					}
// 			}
// 		}
// 	}

// 	return finalScore
// }

/**
 * Refactored:
 */
// export const score = (dice: number[]): number => {
// 	let finalScore = 0
// 	const joinedDice = dice.join('')

// 	let ones = joinedDice.match(/(1)/g)?.length || 0
// 	const twos = joinedDice.match(/(2)/g)?.length || 0
// 	const threes = joinedDice.match(/(3)/g)?.length || 0
// 	const fours = joinedDice.match(/(4)/g)?.length || 0
// 	let fives = joinedDice.match(/(5)/g)?.length || 0
// 	const sixes = joinedDice.match(/(6)/g)?.length || 0

// 	if (ones) {
// 		if (ones >= 3) {
// 			finalScore += 1000
// 			ones -= 3
// 		}
// 		if (ones > 0) {
// 			finalScore += ones * 100
// 		}
// 	}

// 	if (twos >= 3) {
// 		finalScore += 200
// 	}

// 	if (threes >= 3) {
// 		finalScore += 300
// 	}

// 	if (fours >= 3) {
// 		finalScore += 400
// 	}

// 	if (fives) {
// 		if (fives >= 3) {
// 			finalScore += 500
// 			fives -= 3
// 		}
// 		if (fives > 0) {
// 			finalScore += fives * 50
// 		}
// 	}

// 	if (sixes >= 3) {
// 		finalScore += 600
// 	}

// 	return finalScore
// }

export const score = (dice: number[]): number => {
  let finalScore = 0
  const joinedDice = dice.join('')

  const amounts = [
    joinedDice.match(/(1)/g)?.length || 0,
    joinedDice.match(/(2)/g)?.length || 0,
    joinedDice.match(/(3)/g)?.length || 0,
    joinedDice.match(/(4)/g)?.length || 0,
    joinedDice.match(/(5)/g)?.length || 0,
    joinedDice.match(/(6)/g)?.length || 0,
  ]

  amounts.forEach((amount, index) => {
    if (index === 0) {
      if (amount >= 3) {
        finalScore += 1000
        amount -= 3
      }
      if (amount > 0) {
        finalScore += amount * 100
      }
    } else if (index === 4) {
      if (amount >= 3) {
        finalScore += 500
        amount -= 3
      }
      if (amount > 0) {
        finalScore += amount * 50
      }
    } else {
      if (amount >= 3) {
        finalScore += (index + 1) * 100
      }
    }
  })

  return finalScore
}

/**
 * Notes:
 */
