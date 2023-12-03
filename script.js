const INIT_GRID_SIZE = 16;
const GRID_BORDER = "4px solid black";
const GRID_SCALE_FACTOR = 1.5;

const DIV_SIZE = 16;
const DIV_BORDER_SIZE = 0;
const DIV_BORDER = DIV_BORDER_SIZE + "px solid grey";
const DIV_COLOR = "grey";
let divColorMode = "std";

const body = document.querySelector("body");

function createGrid(gridSize = INIT_GRID_SIZE, divSize = DIV_SIZE) {
    // initialize a 16x16 grid of square divs
    // divs will be 16px x 16px

    // create div that contains the grid
    const divGrid = document.createElement("div");
    body.appendChild(divGrid);
    divGrid.setAttribute("id", "divGrid");
    divGrid.style.height = ((divSize + 2 * DIV_BORDER_SIZE) * gridSize) * GRID_SCALE_FACTOR + "px";
    divGrid.style.width = ((divSize + 2 * DIV_BORDER_SIZE) * gridSize) * GRID_SCALE_FACTOR + "px";
    divGrid.style.border = GRID_BORDER;
    divGrid.style.display = "flex";
    divGrid.style.flexWrap = "wrap";


    // creates a grid of smallDiv
    for(let i = 0; i < gridSize; i++) {
        for(let j = 0; j < gridSize; j++) {
            const smallDiv = document.createElement("div");
            smallDiv.setAttribute("class", "smallDiv");
            smallDiv.style.height = divSize * GRID_SCALE_FACTOR + "px";
            smallDiv.style.width = divSize * GRID_SCALE_FACTOR + "px";
            smallDiv.style.border = DIV_BORDER_SIZE + "px solid grey";
            divGrid.appendChild(smallDiv);
        }
    }

    return divGrid;
}

const divGrid = document.querySelector("#divGrid");

function hover(event) {
    let target = event.target;
    if(target.className == "smallDiv") {
        target.style.backgroundColor = getDivColor(divColorMode);
    }
}

function getDivColor(mode) {
    if(mode == "std") {
        return DIV_COLOR;
    } else if (mode == "rainbow") {
        return getRainbowColor()
    }
}

function getRainbowColor() {
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);
    console.log(`rgb(${red} ${green} ${blue})`);
    return `rgb(${red} ${green} ${blue})`;
}

function resizeGrid(event) {
    // check which button clicked
    let userGridSize = +event.target.textContent.split("x")[0];


    // delete current divGrid
    const divGrid = document.querySelector("#divGrid");
    divGrid.remove();

    // create new divGrid
    let userDivSize = (INIT_GRID_SIZE / userGridSize) * DIV_SIZE;
    const newDivGrid = createGrid(userGridSize, userDivSize);

    // add sketching functionality to new divGrid
    addSketch(newDivGrid);
}

function addSketch(element) {
    // checks for mouse down for sketching
    element.addEventListener("mousedown", () => {
        element.addEventListener("mouseover", hover);
    });

    // checks for mouse up to stop sketching
    addEventListener("mouseup", () => {
        element.removeEventListener("mouseover", hover);
    })
}

function doReset() {
    const listSmallDiv = document.querySelectorAll(".smallDiv");
    listSmallDiv.forEach((currentValue) => {
        currentValue.style.backgroundColor = "white";
    })
    
    divColorMode = "std";
    const divGrid = document.querySelector("#divGrid");
    addSketch(divGrid);
}

function doRainbow() {
    divColorMode = "rainbow";
    const divGrid = document.querySelector("#divGrid");
    addSketch(divGrid);
}

function getOption(event) {
    let option = event.target.textContent;
    if(option == "Reset") {
        doReset();
    } else if(option == "Rainbow") {
        doReset();
        doRainbow();
    } else if(option == "10% Opacity") {
        // do opacity
    }
}

function main() {
    const divGrid = createGrid();

    addSketch(divGrid);

    // event to resize grid
    const listBtns = document.querySelector("#listBtns");
    listBtns.addEventListener("click", resizeGrid);

    // option buttons
    const optionBtns = document.querySelector("#optionBtns");
    optionBtns.addEventListener("click", getOption);
}

main();