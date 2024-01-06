const toogleBtn = document.querySelector('.toggle_btn')
const toogleBtnIcon = document.querySelector('.toggle_btn svg')
const dropDownMenu = document.querySelector('.dropdown_menu')
const pathElement = document.querySelector('.path_selector');

toogleBtn.onclick = function () {
    dropDownMenu.classList.toggle('open')
    const isOpen = dropDownMenu.classList.contains('open')

    // toogleBtnIcon.classList = isOpen
    pathElement.setAttribute('d', isOpen 
    ? 'M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z'
    : 'M448 160H320V128H448v32zM48 64C21.5 64 0 85.5 0 112v64c0 26.5 21.5 48 48 48H464c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H48zM448 352v32H192V352H448zM48 288c-26.5 0-48 21.5-48 48v64c0 26.5 21.5 48 48 48H464c26.5 0 48-21.5 48-48V336c0-26.5-21.5-48-48-48H48z')
    
}