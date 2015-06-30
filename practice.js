var main = function() {
	$('.toggle-nav').click(function() {
		$('.nav-bar-right').slideToggle();
	});
};

$(document).ready(main);