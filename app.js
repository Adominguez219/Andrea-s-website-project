const navSlide = () => {
	const burger = document.querySelector('.burger');
	const nav = document.querySelector('.list');
	const navLinks = document.querySelectorAll('.list li');
	//toggle Nav
	burger.addEventListner('click', () => {
		nav.classList.toggle('nav-active');

	});

}


const app = ()=>{
	navSlide();
}