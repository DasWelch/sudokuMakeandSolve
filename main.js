const groups = {
  group0: [ [0,0],[0,1],[0,2],
            [1,0],[1,1],[1,2],
            [2,0],[2,1],[2,2]
          ],
  group1: [ [0,3],[0,4],[0,5],
            [1,3],[1,4],[1,5],
            [2,3],[2,4],[2,5]
          ],
  group2: [ [0,6],[0,7],[0,8],
            [1,6],[1,7],[1,8],
            [2,6],[2,7],[2,8]
          ],
  group3: [ [3,0],[3,1],[3,2],
            [4,0],[4,1],[4,2],
            [5,0],[5,1],[5,2]
          ],
  group4: [ [3,3],[3,4],[3,5],
            [4,3],[4,4],[4,5],
            [5,3],[5,4],[5,5]
          ],
  group5: [ [3,6],[3,7],[3,8],
            [4,6],[4,7],[4,8],
            [5,6],[5,7],[5,8]
          ],
  group6: [ [6,0],[6,1],[6,2],
            [7,0],[7,1],[7,2],
            [8,0],[8,1],[8,2]
          ],
  group7: [ [6,3],[6,4],[6,5],
            [7,3],[7,4],[7,5],
            [8,3],[8,4],[8,5]
          ],
  group8: [ [6,6],[6,7],[6,8],
            [7,6],[7,7],[7,8],
            [8,6],[8,7],[8,8]
          ],
  }

function createBoard() {
  let board = new Array(9);
  for (let i = 0; i < board.length; i++) {
    board[i] = new Array(9);
    for (let j = 0; j < board[i].length; j++) {
      board[i][j] = 0;
    }
  }

  //board = starterboard(board);

  return board;
}

function NumberInRow(num, Board, i) {
  for (let r = 0; r < Board[i].length; r++) {
    if (num === Board[i][r]) {
      return true;
    }
  }
  return false;
}

function NumberInCol(num, Board, j) {
  for (let c = 0; c < Board.length; c++) {
    if (num === Board[c][j]) {
      return true;
    }
  }
  return false;
}

function NumberIn3x3(num, Board, i, j) {

  


}

function simpleNaiveBoardGenerator(Board) {
  for (let i = 0; i < Board.length; i++) {
    for (let j = 0; j < Board[i].length; j++) {
      let numWorks = false;
      while (!numWorks) {
        let numberForCell = Math.floor(Math.random() * (10 - 1)) + 1; // gives us 1 to 9 for random numbers
        if (true) {
          numWorks = true;
        }
      }
    }
  }
}

function starterboard(a) {
  let k = 1;
  let n = 1;

  for (let i = 0; i < 9; i++) {
    k = n;

    for (let j = 0; j < 9; j++) {
      //this loop draws each line

      if (k <= 9) {
        a[i][j] = k;
        k++;
      } else {
        k = 1;
        a[i][j] = k;
        k++;
      }
    }
    console.log("n is " + n + " and k is " + k);
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
  return a;
}

//this is the main. made it to help my C# brain work in javascript better
function main() {
  let board = createBoard();
  
  //board[0] = [5, 5, 5, 5, 5, 5, 5, 5, 5];
  for(let i =0; i< board.length; i++){
    board[i][0] = 5;
    }
  console.log(groups);

}

main(); // this is our program start

