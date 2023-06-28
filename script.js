function paint() {  // Add color to square 
    this.style.backgroundColor = 'black';
}

function sizePrompt() {  // Clear the grid, ask for new number, calculate size of square, create the grid again
    removeGrid();

    do {  // Make sure that input is in appropriate range
        countOneSide = prompt('Enter the number of squares on one side of the grid (MAX: 100): ');
    } while (countOneSide > 100);
    
    squareSize = container.offsetWidth / countOneSide;  // Set size of square which depends on number of squares and container width

    createGrid();
}

function createGrid() {
    for(let i = 0; i < countOneSide; i ++) {   // Outer FOR, create rows
        let row = document.createElement('row');
        row.style.display = 'flex';
        container.appendChild(row);
    
        for(let j = 0; j < countOneSide; j ++) {  // Inner FOR, create certain number of squares for every iteration (row)
            let square = document.createElement('div');
            square.style.height = `${squareSize}px`;
            square.style.width = `${squareSize}px`;
            square.style.backgroundColor = '#fff';
            square.addEventListener('mouseover', paint);  // Add paint function listener on mouse hover
            row.appendChild(square);
        }
    }
}

function removeGrid() {  // Clear the grid
    container.innerHTML = "";
}

document.querySelector('.size-btn').addEventListener('click', sizePrompt);
const container = document.querySelector('.container');

let countOneSide = 16;  // Initial size of grid and its creation
let squareSize = container.offsetWidth / countOneSide;
createGrid();  










