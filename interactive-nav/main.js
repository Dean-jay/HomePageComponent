// setInterval(() => {
//   const screenWidth = window.innerWidth > 0 ? window.innerWidth : screen.width;
//   console.log(screenWidth);
// }, 1000);

const nav = document.querySelector('.nav__hide');
const menu = document.querySelector('.menu');
const btnContainer = document.querySelector('.button__link__container');
let onMenu = true;

window.addEventListener('resize', function () {
  const screenWidth = window.innerWidth > 0 ? window.innerWidth : screen.width;
  console.log(screenWidth);
  if (screenWidth > 625) {
    nav.style.display = 'flex';
    nav.style.flexDirection = 'column';
    btnContainer.style.width = '100%';
    btnContainer.style.justifyContent = 'center';
    onMenu = true;
  } else {
    btnContainer.style.width = '0';
    btnContainer.style.justifyContent = 'none';
  }
});

menu.addEventListener('click', function () {
  console.log('hello');
  if (onMenu) {
    nav.style.display = 'none'; //error
    onMenu = false;
  } else if (!onMenu) {
    nav.style.display = 'flex'; //error
    onMenu = true;
  }
});
