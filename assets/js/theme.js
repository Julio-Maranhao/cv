const colorToggle = document.getElementsByClassName('color-toggle');
const themeToggle = document.getElementById('theme-toggle');

let colorList = Array.from(colorToggle).map(element => element.value);

themeToggle.addEventListener('click', () => {
    if (themeToggle.checked) {
        // Trocar todos os white por dark grey
        addClassByClassSelector('w3-white', 'w3-dark-grey');
        // Trocar todos os grey por black
        addClassByClassSelector('w3-light-grey', 'w3-black');
        // Bug no background principal
        removeClassByClassSelector('w3-light-grey', 'w3-light-grey');
        // Trocar todos os text Grey por Light Grey
        addClassByClassSelector('w3-text-grey', 'w3-text-light-grey');
        // Trocar cor do Menu
        addClassByClassSelector('menu', 'w3-black');
    } else {
        // Voltar todos os white por dark grey
        removeClassByClassSelector('w3-white', 'w3-dark-grey');
        // Voltar todos os grey por black
        removeClassByClassSelector('w3-light-grey', 'w3-black');
        // Bug no background principal
        addClassByClassSelector('w3-black', 'w3-light-grey');
        // Voltar todos os text Grey por Light Grey
        removeClassByClassSelector('w3-text-grey', 'w3-text-light-grey');
        // Volytar a cor do menu
        removeClassByClassSelector('menu', 'w3-black');
        removeClassByClassSelector('menu', 'w3-light-grey');
    }
});

let selectedColor = 'w3-indigo';
let selectedTextColor = 'w3-text-indigo';

for (let element of colorToggle) {
    element.addEventListener('click', () =>{
        if (selectedColor !== `w3-${element.value}`) {
        // add color class
        addClassByClassSelector(selectedColor, `w3-${element.value}`);
        addClassByClassSelector(selectedTextColor, `w3-text-${element.value}`);
        // remove old colors
        removeClassByClassSelector(`w3-${element.value}`, selectedColor);
        removeClassByClassSelector(`w3-text-${element.value}`, selectedTextColor);
        // set new default color
        selectedColor = `w3-${element.value}`;
        selectedTextColor = `w3-text-${element.value}`;
    }})
}


function addClassByClassSelector(main_class, add_class) {
    let element = document.getElementsByClassName(main_class);
    for (let item of element) {
        item.classList.add(add_class);
    }
}

function removeClassByClassSelector(main_class, add_class) {
    let element = document.getElementsByClassName(main_class);
    for (let item of element) {
        item.classList.remove(add_class);
    }
}