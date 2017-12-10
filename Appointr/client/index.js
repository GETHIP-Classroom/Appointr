window.onload = function() {
	var modal = document.getElementsByClassName('modal')[0];
	var modalClose = document.getElementsByClassName('modalClose')[0];

	document.getElementById('navBar').childNodes[5].addEventListener('click', function() {
		modal.classList.add('fadeIn');
		modal.classList.remove('fadeOut');
		console.log("a");
	});
	document.getElementsByClassName('modalClose')[0].addEventListener('click', function() {
		modal.classList.add('fadeOut');
		modal.classList.remove('fadeIn');
		console.log("b");
	});

};