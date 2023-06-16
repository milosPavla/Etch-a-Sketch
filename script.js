function paint() {  // Adds color of square on mouse hover
    this.style.backgroundColor = 'black';
}

const container = document.querySelector('.container');

for(let i = 0; i < 16; i ++) {   // Outer FOR, creating rows
    let row = document.createElement('row');
    row.style.display = 'flex';
    container.appendChild(row);

    for(let j = 0; j < 16; j ++) {  // Inner FOR, creating 16 squares for every i iteration (row)
        let square = document.createElement('div');
        square.style.height = '35px';
        square.style.width = '35px';
        square.style.backgroundColor = '#fff';
        square.style.margin = '1px';
        square.addEventListener('mouseover', paint);  // Adds paint function listener on mouseover
        row.appendChild(square);
    }
}
