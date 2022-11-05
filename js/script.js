const navBtn = document.querySelector('.header__burger');
const mobileNav = document.querySelector('.header__menu');

navBtn.addEventListener('click', function () {
	mobileNav.classList.toggle('header__menu-active')
});

navBtn.addEventListener('click', function () {
	navBtn.classList.toggle('header__burger-active')
});