import { randomTextgenerator } from "./textGenerator.js";


let root = document.documentElement;
let hueSlider = document.getElementById('hue-slider');
let griColumnsSlider = document.getElementById('grid-columns-slider');
let container = document.querySelector(".container");
let newCellBtn = document.querySelector(".new-cell-btn");


// console.log(slider.value);


hueSlider.addEventListener('input', () => {
    root.style.setProperty('--h', hueSlider.value);
})

griColumnsSlider.addEventListener('input', () => {
    root.style.setProperty('--grid-columns', griColumnsSlider.value);
})

newCellBtn.addEventListener('click', addNewCell)


function addNewCell() {

    let randomText = randomTextgenerator(getRandomInt(50, 150));

    // new .cell
    let cell = document.createElement('div');
    cell.classList.add("cell");
    container.appendChild(cell);

    // header
    let header = document.createElement('div');
    header.classList.add("cell-header");
    cell.appendChild(header);

    let headerTitle = document.createElement('h5');
    headerTitle.innerText = 'Cell title..';
    header.appendChild(headerTitle);

    let removeBtn = document.createElement('button');
    removeBtn.classList.add("remove-btn");
    removeBtn.innerHTML = '<i class="remove-btn-icon fas fa-minus-circle"></i>';
    // removeBtn.addEventListener('click', removeAllChildNodes(cell));
    removeBtn.addEventListener('click', () => {
        removeAllChildNodes(cell);
        cell.remove();
    });
    header.appendChild(removeBtn);

    // image
    let image = document.createElement('div');
    image.classList.add("cell-img");
    image.innerHTML = `<img src="https://picsum.photos/150/250?random=${getRandomInt()}">`
    cell.appendChild(image);

    // content
    let content = document.createElement('div');
    content.classList.add("cell-content");
    content.innerHTML = `<p>${randomText}</p>
        <i class="fas fa-flag"></i>`
    cell.appendChild(content);


    // footer
    let footer = document.createElement('div');
    footer.classList.add("cell-footer");
    footer.innerHTML = `<p>Maybe some action here later</p>`
    cell.appendChild(footer);
}


function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function getRandomInt(min = 0, max = 100) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}






