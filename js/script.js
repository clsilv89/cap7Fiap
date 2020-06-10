function login(user, password) {
	  callGoHome();
}

function callGoHome() {
	window.open('/Users/caiosilva/Projects/FiapCap4/RM84960/home.html');
}

window.onload = function () {
	var objBotao = document.getElementById("login-submit");
	var user = document.getElementById("email");
	var password = document.getElementById("pwd");


	objBotao.onclick = function() {
		login();
  	}

  	$(function() {
		$('#slideshow img:gt(0)').hide();
		setInterval(function() {
			$('#slideshow: first-child')
			.fadeOut(1000)
			.next('img')
			.fadeIn(1000)
			.end()
			.appendTo('#slideshow');
		}, 4000);
	});

	$(function() {
		$('#slideshow img:gt(0)').hide();
		setInterval(function() {
			$('#slideshow :first-child')
			.fadeOut(1000)
			.next('img')
			.fadeIn(1000)
			.end()
			.appendTo('#slideshow');
		}, 4000);
	});
}