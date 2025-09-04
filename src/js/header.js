import refs from './refs.js';
let scrollY = 0;

refs.burgerMenuOpenBtn.addEventListener('click', (e) => {
  openBurgerMenu();
});

refs.burgerMenuCloseBtn.addEventListener('click', (e) => {
  closeBurgerMenu();
});

function burgerNavPressed(e) {  
  if (e.target.classList.contains('nav-link-modal')) {
    closeBurgerMenu();
    const sectionId = e.target.getAttribute('href');    
    const section = document.querySelector(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }
}

function openBurgerMenu() {
  scrollY = window.scrollY;

  document.body.style.top = `-${scrollY}px`;
  document.body.classList.add('scroll-lock');
  refs.burgerMenu.classList.add('open');
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeBurgerMenu();
    }
  });
  refs.burgerMenuList.addEventListener('click', (e) => {
    burgerNavPressed(e);
  });
  refs.burgerMenuCloseBtn.addEventListener('click', (e) => {
    closeBurgerMenu();
  });
}

function closeBurgerMenu() {
  refs.burgerMenu.classList.remove('open');
  document.removeEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeBurgerMenu();
    }
  });
  refs.burgerMenuList.removeEventListener('click', (e) => {
    burgerNavPressed(e);
  });
  refs.burgerMenuCloseBtn.removeEventListener('click', (e) => {
    closeBurgerMenu();
  });
  document.body.classList.remove('scroll-lock');
  window.scrollTo(0, scrollY);
}
