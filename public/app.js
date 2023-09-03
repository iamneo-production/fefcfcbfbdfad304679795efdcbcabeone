// Initialize game state
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

// Function to check for a win
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

// Function to display the current player's turn
const displayCurrentPlayer = () => {
    result.textContent = `Player ${currentPlayer}'s turn`;
};

// Function to check if the game is over
const isGameOver = () => {
    if (!gameBoard.includes('')) {
        result.textContent = "It's a draw!";
        disableButtons();
        return true;
    }
    return false;
};

// Function to disable all buttons
const disableButtons = () => {
    const cells = document.querySelectorAll('.cell');
    cells.forEach(cell => {
        cell.setAttribute('disabled', 'disabled');
    });
};

// Function to enable all buttons
const enableButtons = () => {
    const cells = document.querySelectorAll('.cell');
    cells.forEach(cell => {
        cell.removeAttribute('disabled');
    });
};

// Function to handle cell click
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

// Function to toggle the current player
const togglePlayer = () => {
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    displayCurrentPlayer();
};

// Function to reset the game
const resetGame = () => {
    gameBoard = ['', '', '', '', '', '', '', '', ''];
    currentPlayer = 'X';
    const cells = document.querySelectorAll('.cell');
    cells.forEach(cell => {
        cell.textContent = '';
        cell.classList.remove('X', 'O');
    });
    displayCurrentPlayer();
    enableButtons();
};

// Add event listeners to buttons
btns.forEach((btn, i) => {
    btn.addEventListener('click', () => handleInteraction(btn, i));
});

// Export functions for Puppeteer testing
module.exports = {
    checkForWin,
    displayCurrentPlayer,
    isGameOver,
    disableButtons,
    enableButtons,
    handleInteraction,
    togglePlayer,
    resetGame
};
