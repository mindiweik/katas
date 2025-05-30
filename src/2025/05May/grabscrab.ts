/**
 * This solution works, but is a naive solution:
 */

export function grabscrab(anagram: string, dictionary: string[]): string[] {
  const sortedAnagram = [...anagram].sort().join('')
  return dictionary.filter((word) => [...word].sort().join('') === sortedAnagram)
}

/**
 * Refactored:
 */

/**
 * Notes:
 */
