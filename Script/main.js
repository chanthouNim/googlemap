function initialize() {
	var mapOptions = {
		center : new google.maps.LatLng(12.712312, 104.888338),
		zoom : 8,
		mapTypeId : google.maps.MapTypeId.ROADMAP
	};
	var map = new google.maps.Map(document.getElementById("map-canvas"),
			mapOptions);
}



function loadScript() {
	var script = document.createElement('script');
	script.type = 'text/javascript';
	script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyDy4Ne6caAkbNNvOBjGqKXNCzotMhhkRV8&sensor=false&'
			+ 'callback=initialize';
	document.body.appendChild(script);
}

window.onload = loadScript;
