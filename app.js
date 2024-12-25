const boxCtn = document.getElementById("box-ctn");
const gridSizeButton = document.getElementById("grid-size-btn");
const pencilBtn = document.getElementById("pencil-btn");
const eraserBtn = document.getElementById("eraser-btn");
const clearBtn = document.getElementById("clear-grid-btn");
let gridSize = 16;
let currentTool; // Track the current tool

// Default: Generate a 16x16 grid
createGrid();
attachEventListeners(); // Attach event listeners to the grid

function createGrid() {
  boxCtn.innerHTML = ""; // Clear existing grid
  for (let row = 1; row <= gridSize; row++) {
    // Create a row
    const newRow = document.createElement("div");
    newRow.classList.add("grid-row");
    boxCtn.appendChild(newRow);

    // Create columns inside the row
    for (let col = 1; col <= gridSize; col++) {
      const newColumn = document.createElement("div");
      newColumn.classList.add("grid-column");
      newRow.appendChild(newColumn);
    }
  }

  // Attach event listeners to new grid cells
  attachEventListeners();
}

function attachEventListeners() {
  const gridCells = boxCtn.querySelectorAll(".grid-column");
  gridCells.forEach((cell) => {
    cell.addEventListener("mouseover", () => {
      if (currentTool === "pencil") {
        cell.classList.add("hovered");
      } else if (currentTool === "eraser") {
        cell.classList.remove("hovered");
      }
    });
  });
}

function clearGrid() {
  const gridCells = boxCtn.querySelectorAll(".grid-column");
  gridCells.forEach((cell) => {
    cell.classList.remove("hovered");
  });
}

function removeActiveColor() {
  const toolButtons = document.querySelectorAll(".tool-btn");
  toolButtons.forEach((button) => {
    button.classList.remove("active");
  });
}

// Select grid size button
gridSizeButton.addEventListener("click", () => {
  let sizeInput = prompt("Please choose your grid size from 4 - 100");
  if (sizeInput === null) {
    return; // User cancelled
  }
  sizeInput = parseInt(sizeInput, 10);
  while (isNaN(sizeInput) || sizeInput < 4 || sizeInput > 100) {
    alert("Please input a valid grid size between 4 and 100.");
    sizeInput = prompt("Please choose your grid size from 4 - 100");
    if (sizeInput === null) {
      return; // User cancelled
    }
    sizeInput = parseInt(sizeInput, 10);
  }
  gridSize = sizeInput;
  createGrid();
  removeActiveColor();
  gridSizeButton.classList.add("active");
});

// Pencil tool
pencilBtn.addEventListener("click", () => {
  currentTool = "pencil";
  removeActiveColor();
  pencilBtn.classList.add("active");
});

// Eraser tool
eraserBtn.addEventListener("click", () => {
  currentTool = "eraser";
  removeActiveColor();
  eraserBtn.classList.add("active");
});

// Clear all pixels
clearBtn.addEventListener("click", () => {
  clearGrid();
  removeActiveColor();
  clearBtn.classList.add("active");
});
