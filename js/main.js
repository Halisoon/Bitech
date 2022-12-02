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

window.addEventListener('scroll', () => {
  if (listMenu.classList.contains('showMenu')) {
    listMenu.classList.remove('showMenu');
    listMenuChild.classList.remove('showChildMenu');
  }
});

let menuItem = document.querySelectorAll('.itemCheck');
for (let index = 0; index < menuItem.length; index++) {
  let currentLocation = window.location.pathname;
  if (currentLocation.includes(menuItem[index].classList[2])) {
    menuItem[index].classList.add('activeMenuHl');
    break;
  } else if (
    currentLocation.includes('blockchain') ||
    currentLocation.includes('exchange') ||
    currentLocation.includes('social') ||
    currentLocation.includes('game')
  ) {
    menuItem[2].classList.add('activeMenuHl');
  }
}

let buttonRef = document.querySelectorAll('.MuiTouchRipple-root');

buttonRef.forEach((el) => {
  if (el.parentNode.querySelector('.MuiButton-label') !== null) {
    el.parentNode.addEventListener('click', () => {
      window.location.replace('https://biworld.io/');
    });
  }
});
