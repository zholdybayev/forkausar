// For scroll down to lessons
$('.section2buttonscroll').on('click', function(){
	$('html, body').animate({
		scrollTop: $('.section3themebasenamediv').offset().top
	}, 500);
});

// For window scroll up button
window.addEventListener("scroll", function() {
	let scrollTopButton = window.scrollY;
	const scrollTopButtonClass = document.querySelector(".windowfixed");
	if(scrollTopButton > 750) {
		scrollTopButtonClass.classList.add('btn');
	} else {
		scrollTopButtonClass.classList.remove('btn');
	}

	const scrollTopClick = document.querySelector(".windowfixed.btn");
	if(scrollTopClick) {
		scrollTopClick.addEventListener("click", function() {
			window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
		});
	}
});

// Op-ty
document.addEventListener("DOMContentLoaded", function() {
	window.addEventListener("scroll", function(event) {
		let headerOp = window.scrollY;
		let headerBef = document.querySelector(".header");
		let headerMain = document.querySelector(".tothemainpage");
		let headerTtl = document.querySelector(".headertitle");
		let brg = document.querySelector(".burger")

		let headerSpn = document.querySelectorAll(".Basenav");
		headerSpn.forEach((el) => {
			if(headerOp === 0) {
				el.classList.remove('op-ty');
			}
			else {
				el.classList.add('op-ty');
			}
		});


		if(headerOp === 0) {
			headerBef.classList.remove('op-ty');
			headerMain.classList.remove('op-ty');
			headerTtl.classList.remove('op-ty');
			brg.classList.remove('op-ty');
		} else {
			headerBef.classList.add('op-ty');
			headerMain.classList.add('op-ty');
			headerTtl.classList.add('op-ty');
			brg.classList.add('op-ty');
		}
		event.preventDefault();
	});
});

// Burger
$(document).ready(function() {
	$(".burger").click(function() {
		$(".burger, .Baseultexts").toggleClass("active");
		$("body").toggleClass("lock");

		$(".tothemainpage, .burger").toggleClass("color");
	});
	$(".burger.active").click(function() {
		$(".tothemainpage, .burger").toggleClass("color2");
	});
});

// Footer nav
function Insta() {window.location = "https://www.instagram.com/progeasy/"}
function Vk() {window.location = "https://vk.com/zhldbvv"}
function WhatsApp() {window.location = "https://wa.me/+77072003583"}