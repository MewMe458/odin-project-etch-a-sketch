const container = document.getElementById('grid-container');
const resetBtn = document.getElementById('reset-button');

function createGrid(size) {
    container.innerHTML = '';

    container.style.setProperty('--grid-size', size);

    const totalCells = size * size;

    for (let i = 0; i < totalCells; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');

        cell.addEventListener('mouseenter', () => {
            cell.classList.add('active');
        });

        container.appendChild(cell);
    }
}

resetBtn.addEventListener('click', () => {
    let userInput = prompt("Enter the number of squares per side (Max 100):");
    let size = parseInt(userInput);

    if (isNaN(size) || size <= 0) {
        alert("Please enter a valid positive number.");
    } else if (size > 100) {
        alert("The maximum allowed size is 100.");
    } else {
        createGrid(size);
    }
});

createGrid(16);