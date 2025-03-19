/**
 * The lock has a dial with 40 calibration marks numbered 0 to 39 in clockwise order.
 * 
To open the lock, the following steps are taken:

1. Turn the dial clockwise 2 full turns
2. Continue turning clockwise until the 1st number is reached
3. Turn the dial counter-clockwise 1 full turn
4. Continue turning counter-clockwise until the 2nd number is reached
5. Turn the dial clockwise again until the 3rd number is reached
6. Pull the shank and the lock will open.

Given the initial position of the dial and the combination for the lock, how many degrees is the dial rotated in total (clockwise plus counter-clockwise) in opening the lock?

INPUT - There is a line of input containing 4 numbers between 0 and 39. The first number is the position of the dial. The next three numbers are the combination. Consecutive numbers in the combination will be distinct.

OUTPUT - Return the number of degrees that the dial must be turned to open the lock.

A few examples are:

degreesOfLock(0, 30, 0, 30) -> 1350
degreesOfLock(5, 35, 5, 35) -> 1350
degreesOfLock(0, 20, 0, 20) -> 1620
degreesOfLock(7, 27, 7, 27) -> 1620
degreesOfLock(0, 10, 0, 10) -> 1890
degreesOfLock(9, 19, 9, 19) -> 1890

Each notch is 9 degrees, so the total number of degrees is 9 * 40 = 360 degrees.

 */

/**
 * This solution works, but is a naive solution:
 */

// const clockwiseDistance = (curr: number, next: number): number => {
// 	return ((curr - next + 40) % 40) * 9
// }
// const counterClockwiseDistance = (curr: number, next: number): number => {
// 	return ((next - curr + 40) % 40) * 9
// }

// export const degreesOfLock = (position: number, combo1: number, combo2: number, combo3: number): number => {
//   // 1. Turn the dial clockwise 2 full turns
// 	let degrees = 720

//   // 2. Continue turning clockwise until the 1st number is reached
//   degrees += clockwiseDistance(position, combo1)

// 	// 3. Turn the dial counter-clockwise 1 full turn
// 	degrees += 360

// 	// 4. Continue turning counter-clockwise until the 2nd number is reached
// 	degrees += counterClockwiseDistance(combo1, combo2)

// 	// 5. Turn the dial clockwise again until the 3rd number is reached
// 	// 6. Pull the shank and the lock will open.
// 	return (degrees += clockwiseDistance(combo2, combo3))
// }

/**
 * Refactored:
 */

const clockwiseDistance = (curr: number, next: number) => {
  return ((curr - next + 40) % 40) * 9
}
const counterClockwiseDistance = (curr: number, next: number) => {
  return ((next - curr + 40) % 40) * 9
}

export const degreesOfLock = (
  position: number,
  combo1: number,
  combo2: number,
  combo3: number,
): number => {
  return (
    720 +
    clockwiseDistance(position, combo1) +
    360 +
    counterClockwiseDistance(combo1, combo2) +
    clockwiseDistance(combo2, combo3)
  )
}

/**
 * Notes:
 */
