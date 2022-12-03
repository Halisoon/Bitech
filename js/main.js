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

let iconRoadMap = Array.from(document.querySelectorAll(' .icon-roadmap-image'));
iconRoadMap &&
  iconRoadMap.forEach((elm, idx) => {
    elm.addEventListener('click', () => {
      let active = document.querySelector('.custom-click .active-roadmap');
      let wrapLine = document.querySelectorAll('.custom-click .wrap-line');
      let roadmap = document.querySelectorAll('.custom-click .roadmap');
      let roadmapActive = document.querySelector(
        '.custom-click .roadmap.activeRoadmap'
      );
      active.classList.remove('active-roadmap');
      elm.classList.add('active-roadmap');
      for (let index = 0; index < wrapLine.length; index++) {
        wrapLine[index].classList.remove('highlight-line-color');
      }
      for (let index = 0; index < idx; index++) {
        wrapLine[index].classList.add('highlight-line-color');
      }

      roadmapActive.classList.remove('activeRoadmap');
      roadmap[idx].classList.add('activeRoadmap');
    });
  });

$('.custom-slick').slick({
  prevArrow: `<button type="button" class="slick-prev">Previous</button>`,
  nextArrow: `<button type="button" class="slick-next">Next</button>`,
  dots: true,
  customPaging: () => {
    return `<div class="MuiMobileStepper-dot"></div>`;
  },
});
