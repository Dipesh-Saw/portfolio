const openMenu = document.getElementById('menu');
const closeMenu = document.getElementById('close');
const mobileMenu = document.getElementById('mobile');

openMenu.addEventListener('click', () => {
    mobileMenu.style.display = 'block';
    setTimeout(() => {
        mobileMenu.style.right = '0';
        mobileMenu.style.transition = '0.3s';
    });
});

closeMenu.addEventListener('click', () => {
    mobileMenu.style.right = '-250px';
    mobileMenu.style.transition = '0.3s';
    setTimeout(() => {
        mobileMenu.style.display = 'none';
    }, 300);
});