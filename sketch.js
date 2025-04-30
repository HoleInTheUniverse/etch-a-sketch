// Declarations
const container = document.querySelector(".container");
const gridSize = document.querySelector("#grid-size");
const button = document.querySelector("#create-button");

function fillBoard(size) {

    for(let i = 0; i < size; i++) {
        let line = document.createElement("div");
        line.classList.add("line");
        container.appendChild(line);

        for (let j = 0; j < size; j++) {
            let cell = document.createElement("div");
            cell.classList.add("cell");
            line.appendChild(cell);

            cell.addEventListener("mouseenter", () => {
                cell.classList.add("hovered");

                // Gradually increase opacity
                if(Number(cell.style.opacity) < 1) cell.style.opacity = Number(cell.style.opacity) + 0.1;
            });
        }        
    }
}

function clearBoard() {
    while(container.firstChild) container.removeChild(container.firstChild);
}

// Initialize board

fillBoard(16);
button.addEventListener("click", () => {
    let size = parseInt(gridSize.value);
    if(!(size >=1 && size <= 100)) {
        alert("Enter a value between 1 and 100");
        return;
    }

    clearBoard();
    fillBoard(size);
});