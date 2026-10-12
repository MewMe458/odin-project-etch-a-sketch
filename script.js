const container = document.getElementById('grid-container');
const resetBtn = document.getElementById('reset-button');

// Helper function to generate a random RGB color
function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

function createGrid(size) {
    container.innerHTML = '';

    container.style.setProperty('--grid-size', size);

    const totalCells = size * size;

    for (let i = 0; i < totalCells; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');

        cell.addEventListener('mouseenter', () => {
            // Instead of adding a class, set a random RGB background color
            cell.style.backgroundColor = getRandomColor();
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