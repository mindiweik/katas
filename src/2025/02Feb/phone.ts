/**
 John keeps a backup of his old personal phone book as a text file. On each line of the file he can find the phone number (formatted as +X-abc-def-ghij where X stands for one or two digits), the corresponding name between < and > and the address.

Unfortunately everything is mixed, things are not always in the same order; parts of lines are cluttered with non-alpha-numeric characters (except inside phone number and name).

Examples of John's phone book lines:

"/+1-541-754-3010 156 Alphand_St. <J Steeve>\n"

" 133, Green, Rd. <E Kustur> NY-56423 ;+1-541-914-3010!\n"

"<Anastasia> +48-421-674-8974 Via Quirinal Roma\n"

Could you help John with a program that, given the lines of his phone book and a phone number num returns a string for this number : "Phone => num, Name => name, Address => address"

Examples:
s = "/+1-541-754-3010 156 Alphand_St. <J Steeve>\n 133, Green, Rd. <E Kustur> NY-56423 ;+1-541-914-3010!\n"

phone(s, "1-541-754-3010") should return "Phone => 1-541-754-3010, Name => J Steeve, Address => 156 Alphand St."
It can happen that there are many people for a phone number num, then return : "Error => Too many people: num"

or it can happen that the number num is not in the phone book, in that case return: "Error => Not found: num"
 */

export const directory =
  '/+1-541-754-3010 156 Alphand_St. <J Steeve>\n 133, Green, Rd. <E Kustur> NY-56423 ;+1-541-914-3010\n' +
  '+1-541-984-3012 <P Reed> /PO Box 530; Pollocksville, NC-28573\n :+1-321-512-2222 <Paul Dive> Sequoia Alley PQ-67209\n' +
  '+1-741-984-3090 <Peter Reedgrave> _Chicago\n :+1-921-333-2222 <Anna Stevens> Haramburu_Street AA-67209\n' +
  '+1-111-544-8973 <Peter Pan> LA\n +1-921-512-2222 <Wilfrid Stevens> Wild Street AA-67209\n' +
  '<Peter Gone> LA ?+1-121-544-8974 \n <R Steell> Quora Street AB-47209 +1-481-512-2222\n' +
  '<Arthur Clarke> San Antonio $+1-121-504-8974 TT-45120\n <Ray Chandler> Teliman Pk. !+1-681-512-2222! AB-47209,\n' +
  "<Sophia Loren> +1-421-674-8974 Bern TP-46017\n <Peter O'Brien> High Street +1-908-512-2222; CC-47209\n" +
  '<Anastasia> +48-421-674-8974 Via Quirinal Roma\n <P Salinger> Main Street, +1-098-512-2222, Denver\n' +
  '<C Powel> *+19-421-674-8974 Chateau des Fosses Strasbourg F-68000\n <Bernard Deltheil> +1-498-512-2222; Mount Av.  Eldorado\n' +
  '+1-099-500-8000 <Peter Crush> Labrador Bd.\n +1-931-512-4855 <William Saurin> Bison Street CQ-23071\n' +
  '<P Salinge> Main Street, +1-098-512-2222, Denve\n' +
  '/+5-541-754-3010 156 Alphandria_Street. <Jr Part>\n 1333, Green, Road <F Fulgur> NW-46423 ;+6-541-914-3010!\n' +
  '+5-541-984-3012 <Peter Reeves> /PO Box 5300; Albertville, SC-28573\n :+5-321-512-2222 <Paulo Divino> Boulder Alley ZQ-87209\n' +
  '+3-741-984-3090 <F Flanaghan> _Chicago Av.\n :+3-921-333-2222 <Roland Scorsini> Bellevue_Street DA-67209\n' +
  '+8-111-544-8973 <Laurence Pantow> SA\n +8-921-512-2222 <Raymond Stevenson> Joly Street EE-67209\n' +
  '<John Freeland> Mantow ?+2-121-544-8974 \n <Robert Mitch> Eleonore Street QB-87209 +2-481-512-2222?\n' +
  '<Arthur Paternos> San Antonio $+7-121-504-8974 TT-45121\n <Ray Charles> Stevenson Pk. !+7-681-512-2222! CB-47209,\n' +
  '<JP Gorce> +9-421-674-8974 New-Bern TP-16017\n <P McDon> Revolution Street +2-908-512-2222; PP-47209\n <P McDon> Revolution Street +2-908-512-2222; PP-47209\n' +
  '<Elizabeth Corber> +8-421-674-8974 Via Papa Roma\n <C Saborn> Main Street, +15-098-512-2222, Boulder\n' +
  '<Colin Marshall> *+9-421-674-8974 Edinburgh UK\n <Bernard Povit> +3-498-512-2222; Hill Av.  Cameron\n' +
  '+12-099-500-8000 <Pete Highman> Ontario Bd.\n +8-931-512-4855 <W Mount> Oxford Street CQ-23071\n' +
  '<Donald Drinkaw> Moon Street, +3-098-512-2222, Peterville\n'

const num =
  '1-541-754-3010,1-541-914-3010,1-541-984-3012,1-321-512-2222,1-741-984-3090,' +
  '1-921-333-2222,1-111-544-8973,1-921-512-2222,1-121-544-8974,1-481-512-2222,' +
  '1-121-504-8974,1-681-512-2222,1-421-674-8974,1-908-512-2222,48-421-674-8974,1-098-512-2222,' +
  '19-421-674-8974,1-498-512-2222,1-099-500-8000,1-931-512-4855,5-555-555-5555,' +
  '5-541-754-3010,6-541-914-3010,5-541-984-3012,5-321-512-2222,3-741-984-3090,' +
  '3-921-333-2222,8-111-544-8973,8-921-512-2222,2-121-544-8974,2-481-512-2222,' +
  '7-121-504-8974,7-681-512-2222,9-421-674-8974,2-908-512-2222,8-421-674-8974,' +
  '15-098-512-2222,9-421-674-8974,3-498-512-2222,12-099-500-8000,8-931-512-4855,' +
  '3-098-512-2222'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const numList = num.split(',')

/**
 * This solution works, but is a naive solution:
 */

export const phone = (string: string, num: string): string => {
  const phoneRegex = /\+\d{1,2}-\d{3}-\d{3}-\d{4}/
  const nameRegex = /<([^>]+)>/
  const result: string[] = []

  const lines = string.split('\n')
  let foundName = ''
  let foundPhone = ''
  let foundAddress = ''
  let count = 0
  let duplicate = false

  for (const line of lines) {
    const phoneMatch = line.match(phoneRegex)

    if (phoneMatch) {
      foundPhone = phoneMatch[0].slice(1)
    }

    if (foundPhone === num) {
      count++

      const nameMatch = line.match(nameRegex)

      if (nameMatch) {
        if (count > 1 && result[1] === nameMatch[1]) {
          duplicate = true
        }
        foundName = nameMatch[1]
      }

      foundAddress = line
        .replace(foundPhone, '')
        .replace(nameMatch ? nameMatch[0] : '', '')
        .replace(/_/g, ' ')
        .replace(/[^a-zA-Z0-9\s._-]/g, '')
        .replace(/[_\s]+/g, ' ')
        .trim()

      if (duplicate) {
        if (foundAddress) {
          result[2] = foundAddress
        }
      } else {
        result.push(num, foundName, foundAddress)
      }

      foundPhone = ''
    }
  }

  if (count === 0) {
    return `Error => Not found: ${num}`
  } else if (count > 1 && !duplicate) {
    return `Error => Too many people: ${num}`
  } else {
    return `Phone => ${num}, Name => ${result[1]}, Address => ${result[2]}`
  }
}

// console.log(phone(directory, numList[0])) // "Phone => 1-541-754-3010, Name => J Steeve, Address => 156 Alphand St."
// console.log(phone(directory, '1-555-555-5555')) // "Error => Not found: 1-555-555-5555"
// console.log(phone(directory, '1-541-754-3010'))
// console.log(phone(directory, '2-908-512-2222'))

/**
 * Refactored:
 */

/**
 * Notes:
 */
