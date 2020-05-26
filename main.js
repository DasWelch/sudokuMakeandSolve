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

function starterboard(a) {
  let k = 1;
  let n = 1;

  for (let i = 0; i < 9; i++) {

    k = n;

    for (let j = 0; j < 9; j++) {//this loop draws each line 

      if ((k <= 9)) {
        a[i][j] = k;
        k++;
      }

       else {
        k = 1;
        a[i][j] = k;
        k++;
      }
    }
      console.log("n is "+n + " and k is " + k);
      //more code here
      n = k+3;

      if(k===10){//this shifts each line down over by 3
          n=4;
      }
      if(n>9){//this shifts us over by 1 
          n=(n%9)+1
      }

    
  }
  return a;
}

//this is the main

function main() {
  console.log(createBoard());
}

main();
