jQuery(document).ready(function($) 
{
	
	 /* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
	particlesJS.load('particles-js', 'json/particles.json', function() {
	  console.log('callback - particles.js config loaded'); 
	});

	var $overlay = $('.overlay');

	$overlay.fadeOut();

});
