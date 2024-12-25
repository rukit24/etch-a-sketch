const boxCtn = document.getElementById("box-ctn");
const gridSizeButton=document.getElementById("grid-size-btn");
let gridSize = 0;

function createGrid() {
    boxCtn.innerHTML="";
    for (let row = 1; row <= gridSize; row++) {
        // Create a row
        const newRow = document.createElement("div");
        newRow.classList.add("grid-row");
        newRow.id = `grid-row-${row}`;
        boxCtn.appendChild(newRow);

        // Create columns inside the row
        for (let col = 1; col <= gridSize; col++) {
            const newColumn = document.createElement("div");
            newColumn.classList.add("grid-column");
            newColumn.id = `grid-row-${row}-column-${col}`;
            newRow.appendChild(newColumn);
        }
    }
}

gridSizeButton.addEventListener("click", () => {
    let sizeInput = parseInt(prompt("Please choose your grid size from 4 - 100"), 10);

    while (isNaN(sizeInput) || sizeInput < 4 || sizeInput > 100) {
        alert("Please input a valid grid size between 4 and 100.");
        sizeInput = parseInt(prompt("Please choose your grid size from 4 - 100"), 10);
    }
    gridSize = sizeInput;
    createGrid();
}
)




