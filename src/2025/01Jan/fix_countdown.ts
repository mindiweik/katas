// // This code will run before the rocket starts
// function fix_countdown() {
//   delete Array.prototype.Dammit
// }

// // Jim's final countdown function;
// // may not be changed any more.
// // (It used to work the day before!)
// function countdown() {
//   var ret = ''
//   var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//   for (var number in numbers) {
//     console.log('number', number)
//     if (ret) ret += ', '
//     if (number < 10) number = 10 - number
//     else if (number == 10) number = 'Zero'
//     ret += number
//   }
//   ret += '!'
//   return ret
// }


/**
 * This one wasn't easily able to be tested in this context.
 * 
 * The issue is that in the global scope somewhere, the `Array.prototype` had a
 * method called `Dammit` added to it, which was causing issues with the countdown function.
 * The `fix_countdown` function removes this method to ensure the countdown works correctly.
 */
