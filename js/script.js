const header = document.querySelector('[data-header]');
const overlayDiv = document.querySelector('[data-overlay]');
const menuButton = document.querySelector('[data-menu-button]');
const menuMobile = document.querySelector('[data-menu-mobile]');

function enableButtonMenuMobile() {
    menuButton.addEventListener('click', activateMobileMenu);
}

function activateMobileMenu() {
    menuMobile.classList.add('active');
    overlayDiv.classList.add('active');

    document.body.style.overflow = 'hidden';
    
    handleMenuButton();
    removeListenerActiveMenu();

    overlayDiv.addEventListener('click', clickOutside);
}

function closeMenuMobile() {
    overlayDiv.classList.remove('active');
    menuButton.classList.remove('menu-open');

    document.body.style.overflow = 'auto';

    menuButton.removeEventListener('click', closeMenuMobile);
    overlayDiv.removeEventListener('click', clickOutside);

    enableButtonMenuMobile();
};

function removeListenerActiveMenu() {
    menuButton.removeEventListener('click', activateMobileMenu);
}

function handleMenuButton() {
    menuButton.classList.add('menu-open');
    menuButton.addEventListener('click', closeMenuMobile);
}

function clickOutside(event) {
    const clickedElement = event.target;
    if(!menuMobile.contains(clickedElement)) {
        closeMenuMobile();
    }
}

enableButtonMenuMobile();