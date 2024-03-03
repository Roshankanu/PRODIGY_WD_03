let currentPlayer='X';
let gameBoard = ['', '', '', '', '', '', '', '', ''];

function handleClick(index) 
{
  if (gameBoard[index] === '' && !checkWinner()) 
  {
    gameBoard[index] = currentPlayer;
    updateBoard();
    if (checkWinner()) 
    {
      alert(`Player ${currentPlayer} wins!`);
    } else if (!gameBoard.includes('')) 
    {
      alert('It\'s a draw!');
    } else {
      currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
  }
}

function updateBoard() {
  const cells = document.querySelectorAll('.cell');
  cells.forEach((cell, index) => {
    cell.textContent = gameBoard[index];
  });
}

function checkWinner() {
  const winPatterns = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
    [0, 4, 8], [2, 4, 6]             // Diagonals
  ];

  return winPatterns.some(pattern => {
    const [a, b, c] = pattern;
    return gameBoard[a] !== '' && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c];
  });
}
