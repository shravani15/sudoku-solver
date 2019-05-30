// Take the user input of the puzzle. How? The user inputs the puzzle as an array of numbers like below.
// 1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--
// So first define the datatype. Where do you want to store? I want to store the puzzle as a 2d array instead of a string
var numArray=[[1,0,3,4,5,6,7,8,9], [1,0,3,4,0,6,7,8,9], [1,2,3,4,5,6,7,8,0],[1,0,3,4,5,6,7,8,9], [1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],] 
var numString=["1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--"];
console.log(numArray);
console.log(numString);
// Now, I want to know how to replace the zeroes with a given digit, say '1'
// For this I want to check each element within each array within the array. How?

//how to create an empty 9x9 matrix
// var matrix = [];
// for(var i=0; i<9; i++) {
//     matrix[i] = new Array(9);
// }
// console.log(matrix);
//using math.js library to make a matrix
// const matrix1 = math.matrix([3,4,5], [4,5,6]);
// console.log(matrix1);
