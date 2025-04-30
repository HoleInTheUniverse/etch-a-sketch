// Declarations
const container = document.querySelector(".container");

function fillBoard(size) {

    for(let i = 0; i < size; i++) {
        let line = document.createElement("div");
        line.classList.add("line");
        container.appendChild(line);

        for (let j = 0; j < size; j++) {
            let cell = document.createElement("div");
            cell.classList.add("cell");
            line.appendChild(cell);

            cell.addEventListener("mouseenter", () => cell.classList.add("hovered"));
        }        
    }
}



// Initialize board

fillBoard(16);