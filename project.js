let slider = document.querySelector(".slider");
let gridContainer = document.querySelector(".grid-container");
// Current color of pen
const pen = document.querySelector('.color-box');
// current background color
const back = document.querySelectorAll('.color-box')[1];
// Button set
const set = document.querySelector('#set');


slider.addEventListener('input', (e)=>{
    const square = document.querySelector('.grid-size');
    const length = e.target.value + " x " + e.target.value;
    square.textContent = length

    // clear grid
    gridContainer.innerHTML = "";
    createGrid(e.target.value)
})

set.addEventListener('click', (e)=>{
    // when click button trigger, change grid background color to current background color
    let boxes = document.querySelectorAll('.create');
    boxes.forEach((box)=>{
        box.style['background-color'] = back.value;
    })
})

function createGrid(sliderSize){
    // calculate box side length
    const sideLength = gridContainer.offsetWidth / sliderSize;

    // create div and fill in grid; sliderSize = 4
    for(let i=1; i<=sliderSize*sliderSize; i++){
        const box = document.createElement('div');
        box.classList.add('create');
        box.style['background-color'] = back.value;
        box.style.width = `${sideLength}px`;
        box.style.height = `${sideLength}px`;
        gridContainer.appendChild(box);
    }

    let boxes = document.querySelectorAll(".create");
    boxes.forEach((box)=>{
        box.addEventListener("mouseover",()=>{
            box.style['background-color'] = pen.value;
        })
    })
}

createGrid(slider.value);


// hover 