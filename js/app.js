$(document).ready(function () {
	
	// Google Map //
	$('#map_canvas').gmap({
		'center': new google.maps.LatLng(43.655639, -79.376100), // Change this to your desired latitude and longitude
		'zoom': 17,
		'mapTypeControl': false,
		'navigationControl': false,
		'streetViewControl': false,
		'styles': [{
			stylers: [{
				gamma: 0.60
			}, {
				hue: "#3e253c"
			}, {
				invert_lightness: false
			}, {
				lightness: 2
			}, {
				saturation: -20
			}, {
				visibility: "on"
			}]
		}]
	});
	var image = {
		url: 'img/marker.svg', // Define the map marker file here
		// This marker is 51 pixels wide by 63 pixels tall.
		size: new google.maps.Size(51, 63),
		// The origin for this image is 0,0.
		origin: new google.maps.Point(0, 0),
		// The anchor for this image is the base of the flagpole at 26,63.
		anchor: new google.maps.Point(26, 63)
	};
	$('#map_canvas').gmap().bind('init', function () {
		$('#map_canvas').gmap('addMarker', {
			'id': 'marker-1',
			'position': '43.655639, -79.376100',
			'bounds': false,
			'icon': image
		}).click(function () {
			$('#map_canvas').gmap('openInfoWindow', {
				'content': '<h4>Hacking Hunger 2015</h4><p><strong>Pivotal Labs</strong><br>10, 1 Toronto St, Toronto, ON M5C 2V6</p>'
			}, this);
		});
	});
})