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

// 5 Number of trailing zeros of N!
// function zeros (n) {
//   let nol = 0;
//     let i = 5;
//     while (i <= n) {
//        nol += Math.floor(n / i);
//         i *= 5;
//     }
//     return nol;
// }

// 6 Not very secure
// function alphanumeric(str){
//   return /^[a-zA-Z0-9]+$/.test(str);
// }

// 7 Convert A Hex String To RGB
// function hexStringToRGB(hexString) {
//     hexString = hexString.replace('#', '');

//     // Har bir rang komponentini ajratamiz
//     const r = parseInt(hexString.slice(0, 2), 16);
//     const g = parseInt(hexString.slice(2, 4), 16);
//     const b = parseInt(hexString.slice(4, 6), 16);

//     return { r, g, b };
// }