/**
 * Selection Grid Layout in text:

| Ryu  | E.Honda | Blanka  | Guile   | Balrog | Vega    |
| Ken  | Chun Li | Zangief | Dhalsim | Sagat  | M.Bison |
 */

type Move = 'down' | 'up' | 'right' | 'left'

const fighters = [
  ['Ryu', 'E.Honda', 'Blanka', 'Guile', 'Balrog', 'Vega'],
  ['Ken', 'Chun Li', 'Zangief', 'Dhalsim', 'Sagat', 'M.Bison'],
]
let moves: Move[] = []

export function streetFighterSelection(fighters: string[][], position: number[], moves: Move[]) {
  // Your code here!
}
