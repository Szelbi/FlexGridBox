let root = document.documentElement;
let hueSlider = document.getElementById('hue-slider');
let griColumnsSlider = document.getElementById('grid-columns-slider');

// console.log(slider.value);


hueSlider.addEventListener('input', () => {
    root.style.setProperty('--h', hueSlider.value);
})

griColumnsSlider.addEventListener('input', () => {
    root.style.setProperty('--grid-columns', griColumnsSlider.value);
})