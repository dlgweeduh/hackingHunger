jQuery(document).ready(function($) {
	//store service items
	var fillingBlocks = $('.cd-service').not('.cd-service-divider');

	//store service items top position into an array
	var topValueFillingBlocks = [];
	fillingBlocks.each(function(index){
		var topValue = $(this).offset().top;
		topValueFillingBlocks[topValueFillingBlocks.length] = topValue;
	});

	//add the .focus class to the first service item
	fillingBlocks.eq(0).addClass('focus');

	$(window).on('scroll', function(){
		//check which service item is in the viewport and add the .focus class to it
		updateOnFocusItem(fillingBlocks.slice(1));
		//evaluate the $(window).scrollTop value and change the body::after and body::before background accordingly (using the new-color-n classes)
		bodyBackground(topValueFillingBlocks);
	});
});

function updateOnFocusItem(items) {
	items.each(function(){
		( $(this).offset().top - $(window).scrollTop() <= $(window).height()/2 ) ? $(this).addClass('focus') : $(this).removeClass('focus');
	});
}

function bodyBackground(itemsTopValues) {
	var topPosition = $(window).scrollTop() + $(window).height()/2	,
		servicesNumber = itemsTopValues.length;
	$.each(itemsTopValues, function(key, value){
		if ( (itemsTopValues[key] <= topPosition && itemsTopValues[key+1] > topPosition) || (itemsTopValues[key] <= topPosition && key+1 == servicesNumber ) ) {	
			$('.foodSection').removeClass('new-color-'+(key-1)+' new-color-'+(key+1)).addClass('new-color-'+key);
		}
	});
	$(function() {
	    //caches a jQuery object containing the header element
	    var header = $(".foodSection");
	    $(window).scroll(function() {
	        var scroll = $(window).scrollTop();
	        if (scroll > 5000) {
	            header.removeClass('foodSection').addClass("hidden");
	        } else {
	            header.removeClass("hidden").addClass('foodSection');
	        }
	    });
	});
}
// http://stackoverflow.com/questions/7778580/how-to-find-the-vertical-distance-from-top-in-px-of-an-element-using-jquery
// var viewableOffset = $("#li.test").offset().top - $(window).scrollTop();