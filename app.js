const navSlide = () => {
	const burger = document.querySelector('.burger');
	const nav = document.querySelector('.list');
	const navLinks = document.querySelectorAll('.list li');
//toggle Nav
	burger.addEventListner('click',()=>{
		nav.classList.toggle('nav-active');

	});
//Animate Links 
	navLinks.foreach((link, index) => {
		link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 1.5}s`;
	});
}


navSlide();