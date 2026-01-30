// 1 Create Phone Number 
// function createPhoneNumber(numbers){
//  return `(${numbers.slice(0, 3).join("")}) ${numbers.slice(3, 6).join("")}-${numbers.slice(6).join("")}`;
// }

// 2 Array.diff
// function arrayDiff(a, b) {
//   return a.filter((item) => !b.includes(item))
// }

// 3 Bit Counting
// function countBits(n) {
// return n.toString(2).split("").filter((bit) => bit === "1").length;
// }

// 4 Sort the odd
// function sortArray(array) {
//   const odds = array
//     .filter(n => n % 2 !== 0)
//     .sort((a, b) => a - b);
//   return array.map(n => {
//     if (n % 2 !== 0) {
//       return odds.shift(); 
//     }
//     return n; 
//   });

// 4 search in multidimensional array
// function locate(arr, value) {
//   const Array = arr.flat(Infinity);
//   if(Array.includes(value)) {
//     return true;
//   } else {
//     return false;
//   }
// }