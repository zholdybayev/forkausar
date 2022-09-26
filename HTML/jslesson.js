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

// Burger
$(document).ready(function() {
	$(".burger").click(function(event) {
		$(".burger, .Baseultexts").toggleClass("active");
		$("body").toggleClass("lock");
	});
});

// Footer nav
function Insta() {window.location = "https://www.instagram.com/progeasy/"}
function Vk() {window.location = "https://vk.com/zhldbvv"}
function WhatsApp() {window.location = "https://wa.me/+77072003583"}