let menuButton = document.querySelector('.menuButton');
let listMenu = document.querySelector('.listMenu');
let listMenuChild = document.querySelector('.activeMenu');

menuButton.addEventListener('click', () => {
  if (listMenu.classList.contains('showMenu')) {
    listMenu.classList.remove('showMenu');
  } else {
    listMenu.classList.add('showMenu');
  }
});

let menuButtonChild = document.querySelector('.buttonMenuChild');

menuButtonChild.addEventListener('click', () => {
  if (listMenuChild.classList.contains('showChildMenu')) {
    listMenuChild.classList.remove('showChildMenu');
  } else {
    listMenuChild.classList.add('showChildMenu');
  }
});

let mainContent = document.querySelector('.mainContent');

mainContent.addEventListener('click', () => {
  if (listMenu.classList.contains('showMenu')) {
    listMenu.classList.remove('showMenu');
    listMenuChild.classList.remove('showChildMenu');
  }
});
