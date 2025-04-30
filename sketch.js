// Declarations

function fillBoard(size) {
    const container = document.querySelector(".container");

    for(let i = 0; i < size; i++) {
        let line = document.createElement("div");
        line.className = "line";
        container.appendChild(line);

        for (let j = 0; j < size; j++) {
            let cell = document.createElement("div");
            cell.className = "cell";
            line.appendChild(cell);
        }        
    }
}



// Initialize board

fillBoard(16);