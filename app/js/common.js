$(function() {

	$('#my-menu').mmenu({
		extensions: [ 'theme-black', 'effect-menu-slide', 'pagedim-black' ], 
		navbar: {
			title: '<img src="img/logo.png" alt="Портфорио">'
		},
		offCanvas: {
			position: 'right'
		}
	});	

	var api = $('#my-menu').data('mmenu');
	api.bind('open:finish', function() {
		$('.hamburger').addClass('is-active');
	});
	api.bind('close:finish', function() {
		$('.hamburger').removeClass('is-active');
	});

});
