/**
 * This one had clues that were not present in this context, similar to `fix_countdown.ts` in the `01/Jan` folder.
 */

export const villains = [
  'Black Knights',
  'Puppet Master',
  'Ghost Clowner',
  'Witch Doctors',
  'Waxed Phantom',
  'Manor Phantom',
  'Ghost Bigfoot',
  'Haunted Horse',
  'Davy Crockett',
  'Captain Injun',
  'Greens Gloobs',
  'Ghostly Manor',
  'Netty Crabbes',
  'King Katazuma',
  'Gators Ghouls',
  'Headless Jack',
  'Mambas Wambas',
  'Medicines Man',
  'Demon Sharker',
  'Kelpy Monster',
  'Gramps Vamper',
  'Phantom Racer',
  'Skeletons Men',
  'Moon Monsters',
]

export const scoobydoo = (villain: string, villains: string[]) => {
  const clue1 = villain.slice(-5) + villain.slice(0, -5)
  const clue2 = [...clue1].reverse()
  const clue3 = clue2
    .map((char, i) => {
      if (i % 2 !== 0) {
        const code = char.charCodeAt(0) + 5
        char = String.fromCharCode(code <= 122 ? code : code - 26)
      }
      return char
    })
    .join('')

  const answer = villains.find((v) => v.toLowerCase().replace(/\s/g, '') === clue3)

  return answer
}