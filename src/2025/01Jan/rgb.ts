/**
 * Notes: Valid decimal values for RGB are 0 - 255.
 * Any values that fall out of that range must be rounded to the closest valid value.
 * 
 * Your answer should always be 6 characters long, the shorthand with 3 will not work here
 */

/**
 * This solution works, but is a naive solution:
 */
// const toHex = (n: number): string => {
// 	if (n <= 0) return '00'
// 	if (n >= 255) return 'FF'

// 	const firstDigit = Math.floor(n / 16) > 0 ? Math.floor(n / 16) : 0
// 	const secondDigit = (n / 16) % 1 > 0 ? Math.floor((n / 16) % 1 * 16) : 0

// 	const firstCode = firstDigit.toString(16).toUpperCase()
// 	const secondCode = secondDigit.toString(16).toUpperCase()

// 	return firstCode + secondCode
// }

// export const rgb = (r: number, g: number, b: number): string => `${toHex(r)}${toHex(g)}${toHex(b)}`

/**
 * Refactored:
 */
const toHex = (n: number): string => {
  if (n <= 0) return '00'
  if (n >= 255) return 'FF'

  const firstDigit = Math.floor(n / 16) > 0 ? Math.floor(n / 16) : 0
  const secondDigit = (n / 16) % 1 > 0 ? Math.floor(((n / 16) % 1) * 16) : 0

  return firstDigit.toString(16).toUpperCase() + secondDigit.toString(16).toUpperCase()
}

export const rgb = (r: number, g: number, b: number): string => `${toHex(r)}${toHex(g)}${toHex(b)}`

/**
 * Notes:
 * I loved this approach:
 * 
 
 export function rgb(r: number, g: number, b: number): string {
  // Clamp the values to the range [0, 255]
  r = Math.max(0, Math.min(255, r));
  g = Math.max(0, Math.min(255, g));
  b = Math.max(0, Math.min(255, b));

  // Convert the clamped values to hexadecimal strings
  const rHex = r.toString(16).padStart(2, '0');
  const gHex = g.toString(16).padStart(2, '0');
  const bHex = b.toString(16).padStart(2, '0');

  // Concatenate the hexadecimal strings and return the result
  return (rHex + gHex + bHex).toUpperCase();
}
 */
