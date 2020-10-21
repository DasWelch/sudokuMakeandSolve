import { groups } from "./groups.js";

function isBetween(n, a, b) {
  let num = (n - a) * (n - b);
  return num <= 0;
}

// checks if number already exits in the row
function NumberInRow(num, board, i) {
  for (let r = 0; r < board[i].length; r++) {
    if (num === board[i][r]) {
      return true;
    }
  }
  return false;
}
// checks if number alread exits in column
function NumberInCol(num, board, j) {
  for (let c = 0; c < board.length; c++) {
    if (num === board[c][j]) {
      return true;
    }
  }
  return false;
}

// checks if number alread exits in 3x3 section of board. checks one
function check3x3(num, board, group) {
  for (let r = 0; r < group.length; r++) {
    groupi = group[r][0];
    groupj = group[r][1];

    //console.log(groupi +', '+groupj);

    if (num === board[groupi][groupj]) {
      return true;
    }
  }
  return false;
}

// checks for numbers that work in each 3x3 section of the board. checks all
function NumberIn3x3(num, board, i, j) {
  if (isBetween(i, 0, 2)) {
    if (isBetween(j, 0, 2)) {
      return check3x3(num, board, groups.group0);
    } else if (isBetween(j, 3, 5)) {
      return check3x3(num, board, groups.group1);
    } else {
      return check3x3(num, board, groups.group2);
    }
  } else if (isBetween(i, 3, 5)) {
    if (isBetween(j, 0, 2)) {
      return check3x3(num, board, groups.group3);
    } else if (isBetween(j, 3, 5)) {
      return check3x3(num, board, groups.group4);
    } else {
      return check3x3(num, board, groups.group5);
    }
  } else {
    if (isBetween(j, 0, 2)) {
      return check3x3(num, board, groups.group6);
    } else if (isBetween(j, 3, 5)) {
      return check3x3(num, board, groups.group7);
    } else {
      return check3x3(num, board, groups.group8);
    }
  }
}

// function simpleNaiveBoardGenerator(board) {
//   for (let i = 0; i < board.length; i++) {
//     for (let j = 0; j < board[i].length; j++) {
//       let numWorks = false;
//       let num = Math.floor(Math.random() * (10 - 1)) + 1; // gives us 1 to 9 for random numbers
//       let lastInRow = 1;
//       while (!numWorks) {
//         //console.log("num is: " + num);
//         if (
//           !NumberInRow(num, board, i) &&
//           !NumberInCol(num, board, j) &&
//           !NumberIn3x3(num, board, i, j)
//         ) {
//           numWorks = true;
//           board[i][j] = num;
//           lastInRow = 1;
//           console.log("board[" + i + "][" + j + "]" + "= " + board[i][j]);
//           console.table(board);
//         } else if (j === 8) {
//           num = lastInRow;
//           if (lastInRow >= 10) {
//             return false;
//           } else {
//             lastInRow++;
//           }
//         } else {
//           num = Math.floor(Math.random() * (10 - 1)) + 1;
//         }
//         //else we just loop
//       }
//     }
//   }
// }

// function startNaiveBoardGen() {
//   let boardDone = false;
//   while (!boardDone) {
//     let board = createBoard();
//     boardDone = simpleNaiveBoardGenerator(board);
//   }
// }

// rowA is the Starting row for the first group of 3 you would like to swap
// rowB is the starting row for the second group you would like to swap
function swapRows(board, rowA, rowB) {
  const temp = [board[rowA], board[rowA + 1], board[rowA + 2]];
  board[rowA] = board[rowB];
  board[rowA + 1] = board[rowB + 1];
  board[rowA + 2] = board[rowB + 2];

  board[rowB] = temp[0];
  board[rowB + 1] = temp[1];
  board[rowB + 2] = temp[2];

  return board;
}

function swapCols(board, colA, colB) {
  let temp = [];
// feel like this can be more efficient
  for (let cols = 0; cols < 3; cols++) {
    let tempcol= []
    for (let i = 0; i < board.length; i++) {
      tempcol[i] = board[i][colA + cols];
    }
    temp[cols] = tempcol
  }

  console.table(board);
  
  for (let cols = 0; cols < 3; cols++) {
    let addcol = colB+cols
    console.log("addcol " + addcol)
    for (let i = 0; i < board.length; i++) {
      board[i][colA + cols] = board[i][addcol];
    }
  }

  console.table(temp)
  for (let cols = 0; cols < 3; cols++) {
    for (let i = 0; i < temp.length; i++) {
      board[i][colB + cols] = temp[i][cols];
    }
  }

  console.table(board)

  return board;
}

function createBoard() {
  let board = new Array(9);
  for (let i = 0; i < board.length; i++) {
    board[i] = new Array(9);
    for (let j = 0; j < board[i].length; j++) {
      board[i][j] = 0;
    }
  }

  board = starterboard(board);

  return board;
}

// adds numbers to the board and creates a starting board that can be transmuted to get a working sudoku board
function starterboard(board) {
  let k = 1;
  let n = 1;

  for (let i = 0; i < 9; i++) {
    k = n;

    for (let j = 0; j < 9; j++) {
      //this loop draws each line

      if (k <= 9) {
        board[i][j] = k;
        k++;
      } else {
        k = 1;
        board[i][j] = k;
        k++;
      }
    }
    //console.log("n is " + n + " and k is " + k);
    //more code here
    n = k + 3;

    if (k === 10) {
      //this shifts each line down over by 3
      n = 4;
    }
    if (n > 9) {
      //this shifts us over by 1
      n = (n % 9) + 1;
    }
  }
  return board;
}

//this is the main. made it to help my C# brain work in javascript better
function main() {
  let board = createBoard();
  console.table(board);
  swapCols(board, 0, 3);
  //console.table(swapRows(board, 0, 6));
}

main(); // this is our program start
