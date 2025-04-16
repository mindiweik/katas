/**
Task
The UK driving number is made up from the personal details of the driver. The individual letters and digits can be code using the below information

Rules
1–5: The first five characters of the surname (padded with 9s if less than 5 characters)

6: The decade digit from the year of birth (e.g. for 1987 it would be 8)

7–8: The month of birth (7th character incremented by 5 if driver is female i.e. 51–62 instead of 01–12)

9–10: The date within the month of birth

11: The year digit from the year of birth (e.g. for 1987 it would be 7)

12–13: The initial letter of the first name and middle name, padded with a 9 if no middle name

14: Arbitrary digit – usually 9, but decremented to differentiate drivers with the first 13 characters in common. We will always use 9

15–16: Two computer check digits. We will always use "AA"
Your task is to code a UK driving license number using an Array of data. The Array will look like

data = ["John","James","Smith","01-Jan-2000","M"]
Where the elements are as follows

0 = Forename
1 = Middle Name (if any)
2 = Surname
3 = Date of Birth (In the format Day Month Year, this could include the full Month name or just shorthand ie September or Sep)
4 = M-Male or F-Female
You will need to output the full 16 digit driving license number, in all UPPERCASE.
 */

/**
 * This solution works, but is a naive solution:
 */

const monthNames = {
  Jan: '01',
  January: '01',
  Feb: '02',
  February: '02',
  Mar: '03',
  March: '03',
  Apr: '04',
  April: '04',
  May: '05',
  Jun: '06',
  June: '06',
  Jul: '07',
  July: '07',
  Aug: '08',
  August: '08',
  Sep: '09',
  September: '09',
  Oct: '10',
  October: '10',
  Nov: '11',
  November: '11',
  Dec: '12',
  December: '12',
}

export const driver = (data: string[]): string => {
  const [forename, middleName, surname, dateOfBirth, gender] = data
  const [day, month, year] = dateOfBirth.split('-')

  const monthNumber =
    month in monthNames
      ? monthNames[month as keyof typeof monthNames]
      : (() => {
          throw new Error('Invalid month')
        })()

  const surnameCode = (surname + '99999').slice(0, 5).toUpperCase()
  const decadeCode = year[2]
  const yearCode = year[3]
  const monthCode = gender === 'F' ? String(Number(monthNumber) + 50) : monthNumber
  const firstMiddleNameCode = (forename[0] + (middleName[0] || '9')).toUpperCase()

  return surnameCode + decadeCode + monthCode + day + yearCode + firstMiddleNameCode + '9AA'
}

/**
 * Refactored:
 */

/**
 * Notes:
 */
