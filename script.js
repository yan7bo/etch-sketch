const INIT_GRID_SIZE = 16;
const GRID_BORDER = "4px solid black";

const DIV_SIZE = 16;
const DIV_BORDER_SIZE = 1;
const DIV_BORDER = DIV_BORDER_SIZE + "px solid grey";
const DIV_COLOR = "grey";

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


    // creates a grid of smallDiv
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

const divGrid = document.querySelector("#divGrid");

function paintDiv(event) {
    divGrid.addEventListener("mouseover", hover);
}

function hover(event) {
    let target = event.target;
    if(target.className == "smallDiv") {
        target.style.backgroundColor = DIV_COLOR;
    }
}

function main() {
    createGrid();

    // checks for mouse down for sketching
    divGrid.addEventListener("mousedown", paintDiv);

    // checks for mouse up to stop sketching
    addEventListener("mouseup", () => {
        console.log("mouse up");
        divGrid.removeEventListener("mouseover", hover);
    })
}

main();