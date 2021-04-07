let root = document.documentElement;
let slider = document.getElementById('hue-slider');

console.log(slider.value);


slider.addEventListener('input', () => {
    root.style.setProperty('--h', slider.value);
})