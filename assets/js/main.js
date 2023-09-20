// ====================================SHOW MENU BAR //
const navMenu = document.getElementById("nav-menu"),
	navToggle = document.getElementById("nav-toggle"),
	navClose = document.getElementById("nav-close");

// ====================================MENU SHOW //
/* Validation if const exists*/
if (navToggle) {
	navToggle.addEventListener("click", () => {
		navMenu.classList.add("show-menu");
	});
}

// ====================================MENU HIDDEN //
/* Validation if const exists*/
if (navClose) {
	navClose.addEventListener("click", () => {
		navMenu.classList.remove("show-menu");
	});
}

// ==================================== REMOVE MENU MOBILE //
const navLink = document.querySelectorAll(".nav__link");
const linkAction = () => {
	//Cuando se hace click en cada link del menu, se borra la clase show-menu
	const navMenu = document.getElementById("nav-menu");
	navMenu.classList.remove("show-menu");
};
navLink.forEach((element) => {
	element.addEventListener("click", linkAction);
});
