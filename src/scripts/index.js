
/**
 * Burger Interactive
 */
document.querySelector('.js-burger-icon')
  .addEventListener('click', () => {
    const rightNavContainer = document.querySelector('.js-right-nav-container');

    if (rightNavContainer.classList.contains('hidden')) {
      document.querySelector('.js-burger-icon').src = '../src/images/cross.png';
    } else {
      document.querySelector('.js-burger-icon').src = '../src/images/menu.png';
    }

    rightNavContainer.classList.toggle('hidden');
  });