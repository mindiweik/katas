/**
 * This solution works, but is a naive solution:
 */

// export const fish = (shoal: string): number => {
//   let currentSize = 1
//   let amountNeededForIncrease = 4
//   let totalConsumedFish = 0

//   // remove algae and sort
//   const shoalArr = shoal
//     .split('')
//     .map((fish) => parseInt(fish))
//     .filter((fish) => fish > 0)
// 		.sort()

//   if (shoalArr.length === 0) {
//     return 1
//   }

//   for (let i = 0; i < shoalArr.length; i++) {
// 		const currFish = shoalArr[i]
//     if (currFish <= currentSize) {
//       totalConsumedFish+=currFish
//     }
//     if (totalConsumedFish >= amountNeededForIncrease) {
//       currentSize++
//       totalConsumedFish = totalConsumedFish - amountNeededForIncrease
//       amountNeededForIncrease = currentSize * 4
//     }
// 	}

//   return currentSize
// }

/**
 * Refactored:
 */

export const fish = (shoal: string): number => {
  let currentSize = 1
  let consumedFish = 0
  let amountNeededForNextIncrease = 4

  const pond: { [key: string]: number } = {}

  for (const fish of shoal) {
    pond[fish] = pond[fish] ? pond[fish] + 1 : 1
  }

  for (const fishSize in pond) {
    let inspectSize = parseInt(fishSize)
    if (inspectSize <= currentSize) {
      consumedFish = consumedFish + inspectSize * pond[inspectSize]
    }

    while (inspectSize >= 0) {
      if (consumedFish - amountNeededForNextIncrease >= 0) {
        currentSize++
        consumedFish = consumedFish - amountNeededForNextIncrease
        amountNeededForNextIncrease = currentSize * 4
      }
      inspectSize--
    }
  }

  return currentSize
}

/**
 * Notes:
 */
