//var sudoku = new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);
var sudoku = new Array(1,0,5,8,0,2,0,0,0,0,9,0,0,7,6,4,0,5,2,0,0,4,0,0,8,1,9,0,1,9,0,0,7,3,0,6,7,6,2,0,8,3,0,9,0,0,0,0,0,6,1,0,5,0,0,0,7,6,0,0,0,3,0,4,3,0,0,2,0,5,0,1,6,0,0,3,0,8,9,0,0); 
// ... and we solve it!!
solve(sudoku);
 
// given a sudoku cell, returns the row
// Why math.floor? Why cell/9?
// We are going to iterate through the rows and columns using cell indexes. The starting index is 0 and final index is 80. 
// Cell/9 gives me remainder and math.floor rounds it to the nearest integer less than than decimal so that the integer returned is row number.
function returnRow(cell) {
    return Math.floor(cell / 9);
}

// given a sudoku cell, returns the column
function returnColumn(cell){
    return cell%9;
}

// given a sudoku cell, returns the 3x3 block
function returnBlock(cell) {
    return Math.floor(returnRow(cell) / 3) * 3 + Math.floor(returnCol(cell) / 3);
}

// given a number, a row and a sudoku, returns true if the number can be placed in the row
function IsPossibleRow(number, row, sudoku){
    
}