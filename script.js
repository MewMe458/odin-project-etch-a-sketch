const container = document.getElementById('grid-container');
const gridSize = 16 * 16;

for (let i = 0; i < gridSize; i++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');

    cell.addEventListener('mouseenter', () => {
        cell.classList.add('active');
    });

    container.appendChild(cell);
}