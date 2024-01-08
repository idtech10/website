const btnMobile = document.querySelector('.Header-Main__Bnt');
let static = window.pageYoffset

function toggleMenu(event) {
  if (event.type === 'touchstart') event.preventDefault();
  const nav = document.querySelector('.Header-Main__Nav');
  nav.classList.toggle('Header-Main__Nav--Active');
  scrollTo(0, static)
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);

//função para abrir o dropdown
function OpenDropdown(element){
    let Dropdown = element.target;
    let WordText = Dropdown.parentNode;
    WordText = WordText.children[1];

    WordText.classList.toggle("dropDown-Options--active");
    WordText.classList.toggle("dropDown-Options--disable");
}

document.querySelectorAll(".dropDown").forEach(element => {element.addEventListener('click', OpenDropdown, true)});