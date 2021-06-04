// Javascript Document

jQuery(document).ready(function($){

	var $handle = $('.slider-handle');

	function slidePosition() {
	  var totalItems = $('li.orbit-slide').length - 1;
	  var currentItem = $('li.orbit-slide.is-active').index();
	  var fraction = (currentItem / totalItems) * 90;
	  $handle.attr('aria-valuenow', fraction);
	  $handle.css({top: fraction + "%"});
	}

	$('[data-orbit]').on('slidechange.zf.orbit', slidePosition);

});