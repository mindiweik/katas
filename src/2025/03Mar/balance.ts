/**
 * Notes:
 * The first line shows the original balance. Each other line (when not blank) gives information: check number, category, check amount. (Input form may change depending on the language).

First you have to clean the lines keeping only letters, digits, dots and spaces.

Then return a report as a string (underscores show spaces -- don't put them in your solution. They are there so you can see them and how many of them you need to have):

"Original_Balance:_1000.00
125_Market_125.45_Balance_874.55
126_Hardware_34.95_Balance_839.60
127_Video_7.45_Balance_832.15
128_Book_14.32_Balance_817.83
129_Gasoline_16.10_Balance_801.73
Total_expense__198.27
Average_expense__39.65"
On each line of the report you have to add the new balance and then in the last two lines the total expense and the average expense. So as not to have a too long result string we don't ask for a properly formatted result.

Notes
See input examples in Sample Tests.
It may happen that one (or more) line(s) is (are) blank.
Round to 2 decimals your calculated results (Elm: without trailing 0)
The line separator of results may depend on the language \n or \r\n. See examples in the "Sample tests".
 */

/**
 * This solution works, but is a naive solution:
 */

const FIRST_LINE_PATTERN = /([\d.])/g
const CLEAN_LINE_PATTERN = /[^a-zA-Z0-9.\s]/g
const EXPENSE_LINE_PATTERN = /^(\d+)\s+([a-zA-Z\s]+)\s*[^0-9]*([\d.]+)$/

export const balance = (book: string) => {
  const lines = book.replace(CLEAN_LINE_PATTERN, '').split('\n').filter(Boolean)

  const originalBalance = lines[0].match(FIRST_LINE_PATTERN)?.join('')
  if (!originalBalance) return 'There was an issue parsing the original balance.'
  lines.shift()

  let balance: number = Number.parseFloat(originalBalance)
  const expenses: number[] = []
  let checksString: string = ''

  for (const line of lines) {
    const match = line.match(EXPENSE_LINE_PATTERN)

    if (match) {
      const checkNumber = match[1]
      const checkRecipient = match[2].trimEnd()
      const checkExpense = Number.parseFloat(match[3])

      expenses.push(checkExpense)
      balance -= checkExpense

      checksString +=
        checkNumber +
        ' ' +
        checkRecipient +
        ' ' +
        checkExpense.toFixed(2) +
        ' Balance ' +
        balance.toFixed(2) +
        '\r\n'
    }
  }

  const totalExpense = expenses.reduce((acc, curr) => acc + curr, 0)
  const averageExpense = (totalExpense / expenses.length).toFixed(2)

  return (
    `Original Balance: ${originalBalance}\r\n` +
    `${checksString}` +
    `Total expense  ${totalExpense.toFixed(2)}\r\n` +
    `Average expense  ${averageExpense}`
  )
}

/**
 * Refactored:
 */

/**
 * Notes:
 */
