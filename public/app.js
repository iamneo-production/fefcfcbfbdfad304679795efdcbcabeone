// Initial game state
let gameBoard = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'X';
let result = document.querySelector('.result');
let btns = document.querySelectorAll('.btn');
let winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

const checkForWin = () => {
    for (const combo of winningCombinations) {
        const [a, b, c] = combo;
        if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
            result.textContent = `Player ${currentPlayer} wins!`;
            disableButtons();
            return true;
        }
    }
    return false;
};

const displayCurrentPlayer = () => {
    result.textContent = `Player ${currentPlayer}'s turn`;
};

const isGameOver = () => {
    if (!gameBoard.includes('')) {
        result.textContent = "It's a draw!";
        disableButtons();
        return true;
    }
    return false;
};
const disableButtons = () => {
    const btns = document.querySelectorAll('.btn');
    btns.forEach(btn => {
        btn.setAttribute('disabled', 'disabled');
    });
};



const enableButtons = () => {
    const btns = document.querySelectorAll('.btn');
    btns.forEach(btn => {
        btn.removeAttribute('disabled');
    });
};

const handleInteraction = (element, index) => {
    if (gameBoard[index] === '' && !isGameOver()) {
        gameBoard[index] = currentPlayer;
        element.textContent = currentPlayer;
        element.classList.add(currentPlayer);
        if (checkForWin()) {
            return;
        }
        togglePlayer();
    }
};

const togglePlayer = () => {
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    displayCurrentPlayer();
};

const resetGame = () => {
    gameBoard = ['', '', '', '', '', '', '', '', ''];
    currentPlayer = 'X';
    const btns = document.querySelectorAll('.btn');
    btns.forEach(btn => {
        btn.textContent = '';
        btn.classList.remove('X', 'O');
    });
    displayCurrentPlayer();
    enableButtons();
};

btns.forEach((btn, i) => {
    btn.addEventListener('click', () => ticTacToe(btn, i));
});

document.querySelector('#reset').addEventListener('click', resetGame);


















// Your game logic here

    /*
    **Part 1: Winning Conditions (Add your code here)**

    1. Implement the logic to check for winning conditions using the 'conditions' array.
    2. Display a winning message in the 'result' element when a player wins.
    3. Disable all buttons after a win.
    */

    // Your code to update the game state and check for a win
    // ...

    // Your code to display the current player's turn
    // ...

    // Your code to handle button and btn interactions
    // ...


/*
**Part 2: Reset Function (Add your code here)**

1. Implement a new function that resets the game to its initial state.
2. Ensure the 'btns', 'btns', and 'currentPlayer' variables are reset.
3. Update the 'result' element to indicate the current player's turn.
4. Re-enable all buttons for a new game.
*/