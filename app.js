const navSlide = () => {
	const burger = document.querySelector('.burger');
	const nav = document.querySelector('.nav-links');
	const navLinks = document.querySelectorAll('.nav-links li');
	//toggle Nav
	burger.addEventListner('click', () => {
		
		nav.classList.toggle('nav-active');

		nsvLinks.forEach((link, index) => {
			if (link.style.animation) {
				link.style.animation = ''; 
			} else {
				link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
			}
		});
	});

}


const app = ()=>{
	navSlide();
};