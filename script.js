const INIT_GRID_SIZE = 10;
const GRID_BORDER = "4px solid black";

const DIV_SIZE = 16;
const DIV_BORDER_SIZE = 1;
const DIV_BORDER = DIV_BORDER_SIZE + "px solid grey";

const body = document.querySelector("body");

function createGrid() {
    // initialize a 16x16 grid of square divs
    // divs will be 16px x 16px

    // create div that contains the grid
    const divGrid = document.createElement("div");
    body.appendChild(divGrid);
    divGrid.setAttribute("id", "divGrid");
    divGrid.style.height = ((DIV_SIZE + 2 * DIV_BORDER_SIZE) * INIT_GRID_SIZE) + "px";
    divGrid.style.width = ((DIV_SIZE + 2 * DIV_BORDER_SIZE) * INIT_GRID_SIZE) + "px";
    divGrid.style.border = GRID_BORDER;
    divGrid.style.display = "flex";
    divGrid.style.flexWrap = "wrap";


    
    for(let i = 0; i < INIT_GRID_SIZE; i++) {
        for(let j = 0; j < INIT_GRID_SIZE; j++) {
            const smallDiv = document.createElement("div");
            smallDiv.setAttribute("class", "smallDiv");
            smallDiv.style.height = DIV_SIZE + "px";
            smallDiv.style.width = DIV_SIZE + "px";
            smallDiv.style.border = "1px solid grey";
            divGrid.appendChild(smallDiv);
        }
    }
}

createGrid();