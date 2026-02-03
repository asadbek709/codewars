// ===============================================================
// 1. Sum of positive
// function positiveSum(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > 0) {
//       sum += arr[i];
//     }
//   }
//   return sum;
// }

// ===============================================================

// 2.Sum Arrays
// function sum(numbers) {
// let num = 0
//     numbers.forEach((value) => {
//         if(value > 0) num += value
//     });
//     return num
// // }

// ===============================================================

// 3.Elementlarni olib tashlash
// function removeEveryOther(arr){
//   return arr.filter((value, index) => index % 2 === 0);
// }

// ===============================================================

// 4.Vergul ajratgichlari bilan massiv elementlarini chop etish
//  printArray = _ => _.join(",")

// ===============================================================

// 5.Sum aralash massiv
// function sumMix(x) {
//     let sum = 0;
//     for (let i = 0; i < x.length; i++) {
//         sum += Number(x[i]);
//     }
//     return sum;
// }

// ===============================================================

//6. Sort and Star
// function twoSort(s) {
//     s.sort();   
//     const first = s[0];   
//     return first.split('').join('***');
// }

// ===============================================================

// 7 Abbreviate a Two Word Name
// function abbrevName(name) {
//   return name.charAt(0).toUpperCase() + "." +
//          name.charAt(name.indexOf(" ") + 1).toUpperCase();
// }   

// 8 Count by X
// function countBy(x, n) {
//   let result = [];
//   for (let i = 1; i <= n; i++) {
//     result.push(x * i);
//   }
//   return result;
// }

// 9 Simple multiplication
// function simpleMultiplication(number) {
//   if (number % 2 === 0) {
//     // Agar juft bo'lsa
//     return number * 8;
//   } else {
//     // Agar toq bo'lsa
//     return number * 9;
//   }
// }
//  10 Remove exclamation marks
// function removeExclamationMarks(s) {
//   return s.replaceAll("!", "");
// }

// 11 Sort My Textbooks
// function sorter(textbooks) {
//  return textbooks.sort((a, b) => a.toLowerCase() > b.toLowerCase() ? 1 : -1);
// }

// 12 Convert a string to an array
// const stringToArray = (_) => _.split(" ")

// 13 Square(n) Sum
// function squareSum(numbers){
//     let sum = 0
//     numbers.forEach((value) => {
//       sum += value **2
//     })
//   return sum
// }



// 1 masala ===============================

// let people = [
//   { id: 1, firstName: "Eshmat", lastName: "Toshmatov", age: 20, status: "Talaba" },
//   { id: 2, firstName: "Gulmat", lastName: "Surmatov", age: 17, status: "O'quvchi" },
//   { id: 3, firstName: "Dilshod", lastName: "Karimov", age: 25, status: "Ishchi" },
//   { id: 4, firstName: "Malika", lastName: "Xoliqova", age: 30, status: "Uqituvchi" },
//   { id: 5, firstName: "Zafar", lastName: "Bozorov", age: 19, status: "Talaba" },
//   { id: 6, firstName: "Umida", lastName: "Raxmatova", age: 22, status: "Tadbirkor" },
//   { id: 7, firstName: "Rustam", lastName: "Ziyodov", age: 35, status: "Dasturchi" },
//   { id: 8, firstName: "Nodira", lastName: "Saidova", age: 28, status: "Muhandis" },
//   { id: 9, firstName: "Javlon", lastName: "Qurbonov", age: 24, status: "Frilanser" },
//   { id: 10, firstName: "Shahnoza", lastName: "Ergasheva", age: 18, status: "O'quvchi" }
// ];
// let almashtirish = people.map(obj => {
//   if (obj.id === 5) {
//     return {
//       id: 5,
//       firstName: "Ali",
//       lastName: "Valiyev",
//       age: 25,
//       status: "Dasturchi"
//     };
//   }
//   return obj;
// });

// console.log(almashtirish);

// ==============================================================================================

// 2 masalaaaaaaaa

// let obyect = people.filter((obj)=>{
//     return obj.lastName.endsWith("va")
// })
// console.log(obyect );

// ===============================================================
// 3 masalaaaaaaaaaa

// let keraklisiniOLish = people.filter((obj)=>{
//     return obj.id !== 4 &&  obj.id !== 9
// })
// console.log(keraklisiniOLish);

// ============================================================

// 4 MASALAAAAAA

// let isminiTanlash = people.find(obj => obj.id === 7);
// isminiTanlash.firstName = "Gulbashakar";
// console.log(isminiTanlash);

// ========================================================================

// 5 MASALAAAAA




// let sortlash = people.sort((a, b)=>{
//     return  a.lastName.localeCompare(b.lastName)
// })
// console.log(sortlash);



// =======================================================================


// Question:

// 1. id si 5 ga teng bo'lgan odamni ma'lumotini manashu object ga almashtirib bering.
// {id: 5, firstName: "Ali", lastName: "Valiyev", age: 25, status: "Dasturchi"}

// 2. people array ichida lastName ning oxiri “va” qo’shimchasi bilan tugagan shaxslar qolsin.

// 3. id si 4 va 9 ga teng bo’lgan odamlar arraydan o’chirib tashlansin.

// 4. id si 7 ga teng bo’lgan object firstName ning qiymatini “Gulbashakar” ga o’zgartirib bering.

// 5. shu people arrayni lastName bo’yicha sort qilib bering.

// 15 Count the Monkeys!
// function monkeyCount(n) {
// // your code here
  
//   let sum = []
  
//    for (let i = 1; i <= n; i++) {
//      sum.push(i);
//    }
//   return sum
// }

// 16 Opposite number
// function opposite(number) {
//   return -number
// }

// 17 Type of sum
// function typeOfSum(a, b) {
//   return typeof (a + b)
// }

// 18 What's up next?
// function nextItem(xs, item) {
//   let found = false;
//   for (const x of xs) {
//     if (found) return x;
//     if (x === item) found = true;
//   }
//   return undefined;
// }

// 19 Count words
// function countWords(str) {
//   if (!str) return 0;
//   const words = str.trim().match(/\S+/g);
//   return words ? words.length : 0;
// }

// 20 How many arguments
// function args_count(arguments) {
//   return arguments.length;
// }

// 21 Friend or Foe
// function friend(friends){
//   //your code here
//  return friends.filter(name => name.length === 4)
// }

// 22 Saralangan obyektlar ro'yxatini qaytaring
// function sortList (sortBy, list) {
//   return list.sort((a, b) =>  a[sortBy] - b[sortBy]);
// }

// 23 Sort rectangles and circles by area
// function sortByArea(arr) {
//   return arr.map(shape => {
//       let area;
//       if (Array.isArray(shape)) {
//         area = shape[0] * shape[1];
//       } else {
//         area = Math.PI * shape * shape;
//       }
//       return Number(area.toFixed(2));
//     }).sort((a, b) => a - b);
// }

// 24 Who likes it
// function likes(names) {
//   const count = names.length;
//   switch (count) {
//     case 0:
//       return "no one likes this";
//     case 1:
//       return `${names[0]} likes this`;
//     case 2:
//       return `${names[0]} and ${names[1]} like this`;
//     case 3:
//       return `${names[0]}, ${names[1]} and ${names[2]} like this`;
//     default:
//       return `${names[0]}, ${names[1]} and ${count - 2} others like this`;
//   }
// }

// 25 Make a function that does arithmetic!
// function arithmetic(a, b, operator){
//   if(operator === "add"){
//     return a + b
//   }else if(operator === "subtract"){
//     return a - b
//   }else if (operator === "multiply"){
//     return a * b
//   }else if (operator === "divide"){
//      return a / b
//   }
// }

// 26 How many consecutive numbers are needed
// function consecutive(arr) {
//   arr.sort((a, b) => a - b)
//   let min = Math.min(...arr)
//   let max = Math.max(...arr)
//   let newArr = []
//   for(let i = min; i <= max; i++){
//      newArr.push(i)
//   }
//   return (newArr.length - arr.length)
// }

// 27 Return substring instance count
// function solution(fullText, search) {
  
//   return fullText.split(search).length -1 ;
// }

// 28 Sort with Arrow Functions
// let OrderPeople = (people) => people.sort((a , b) => a.age - b.age); 

// 29 Are they square
// let isSquare = arr => arr.length ? arr.map ((x) => !`${(Math.sqrt(x) % 1)}`.includes(".")).every((v) => v) : undefined;

// 30 Grasshopper - Basic Function Fixer
// function addFive(num) {
//   let total = num + 5
//   return total
// }

// 31 Square Every Digit 
// function squareDigits(num){
//  return Number(num.toString().split('').map(d => d * d).join(''));
// }

// 32 You're a square!F
// let isSquare = function(n){
//   return n >= 0 && Number.isInteger(Math.sqrt(n));
// }

// 33 Sum of two lowest positive integers
// function sumTwoSmallestNumbers(numbers) {  
//     numbers.sort((a, b) => a - b);
//     return numbers[0] + numbers[1];
// }

// 34 Calculate average
// let findAverage = (array)=> {
//   if(!array.length) return 0;
//   return array.reduce((sum, cur)=>sum+cur, 0)/array.length
// }

// 35 Push a hash/an object into array
// items = [{a: "b", c: "d"}]

// 36 Sum without highest and lowest number
// function sumArray(array) {
//   if(array?.length <= 2 || !array) return 0;
//   return array.reduce((a, b) => a + b, 0) -  Math.min(...array) - Math.max(...array);
// }

// 37 Stringy Strings
// function stringy(size) {
//   let result = "";
//   for(let i = 0; i < size; i++) {
//     if(i% 2 === 0) {
//       result += "1"
//     }else{
//       result += "0"
//     }
//   }
//   return result
// }


// 38 BASIC: Making Six Toast
// function sixToast(num) {
//   return Math.abs(num -6);
// }

// 39 Filter out the geese
// let gooseFilter = (birds) => birds.filter((s) => !["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"].includes(s));

// 40 What is between
// function between(a, b) {
//   let result = [];
//   for (let i = a; i <= b; i++) { 
//     result.push(i);
//   }
//   return result;
// }

// 41 Formatting decimal places #0
// function twoDecimalPlaces(n) {
//   return Number(n.toFixed(2))
// }

// 42 Return Two Highest Values in List
// function twoHighest(arr) {
//   return arr.slice(-2).sort((a, b) => b - a)
// }

// 43 
// function sumNumbers(...args) {
//    return args.filter(value => typeof value === 'number' && !Number.isNaN(value)).reduce((sum, num) => sum + num, 0);
// }

// 44 Moving Zeros To The End
// function moveZeros(arr) {
//    const result = [];
//   let sum = 0;
//   for (const item of arr) {
//     if (item === 0) {
//       sum++;
//     } else {
//       result.push(item);
//     }
//   }
//   return result.concat(Array(sum).fill(0));
// }

// 45 The Hashtag Generator
// function generateHashtag (str) {
//   if (!str.trim()) return false;
//   const hashtag ="#" +str.trim().split(/\s+/).map( word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join("");
//   return hashtag.length > 140 ? false : hashtag;
// }

// 46 RGB To Hex Conversion
// function rgb(r, g, b) {
//   const clamp = (n) => Math.max(0, Math.min(255, n));
//   const toHex = (n) => clamp(n).toString(16).toUpperCase().padStart(2, "0");
//   return toHex(r) + toHex(g) + toHex(b);
// }

// 47 Sort Numbers
// function solution(nums){
//   if (!Array.isArray(nums)) return [];
//   return nums.sort((a, b) => a - b);
//}

// 48 What is type of variable? 
// function type(value) {
//   if(typeof value == "object"){
//     if(Array.isArray(value)) return "array";
//     if(value == null) return "null";
//     if(isFinite(value)) return "date";
//     return "object";
// }
//   return typeof value;
// }

//49 16+18=214
// let add = (n1, n2, max = 0, str = "") => {
//   n1 > n2 ? (max = n1) : (max = n2);
//   let arr1 = `${n1}`.split("");
//   let arr2 = `${n2}`.split("");
//   for (let i = 1; i <= `${max}`.length; i++)
//     str = (+arr1.at(-i) || 0) + (+arr2.at(-i) || 0) + str;
//   return +str;
// };

// 50 Vowel Count
// function getCount(str) {
//   let unlilar = "aeiou";
//   let count = 0;

//   for (let value of str) {
//     if (unlilar.includes(value)) {
//       count++;
//     }
//   }

//   return count;
// }

// 51 Words to sentence
// function wordsToSentence(words) {
//   return words.join(" ");
// }

// 52 Power of 4
// function powerOf4(n) {
//   if (typeof n !== "number" || !Number.isInteger(n) || n <= 0) {
//     return false;
//   }
//   return (n & (n - 1)) === 0 && n % 3 === 1;
// }

// 53 Eng katta juftlikning mahsuloti
// function maxProduct(arr) {
//    let max1 = 0;
//   let max2 = 0; 

//   for (const n of arr) {
//     if (n > max1) {
//       max2 = max1;
//       max1 = n;
//     } else if (n > max2) {
//       max2 = n;
//     }
//   }

//   return max1 * max2;
// }