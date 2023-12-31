var toggleButton = document.querySelector('.toggle-menu');
var navBar = document.querySelector('.menu_links');
toggleButton.addEventListener('click', function () {
	navBar.classList.toggle('toggle');
});