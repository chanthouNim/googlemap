function initialize() {
  var mapOptions = {
    center: new google.maps.LatLng(11.104968,104.727116),
    zoom: 8,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };

  var map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);

  var marker = new google.maps.Marker({
    map: map,
    position: map.getCenter()
  });
  var infowindow = new google.maps.InfoWindow();
  infowindow.setContent('<div class="map_pop_up"><b>This place is near my home</b><div class="map-body">I love this place</div></div>');
  google.maps.event.addListener(marker, 'click', function() {
      infowindow.open(map, marker);
  });
  
  google.maps.event.addListener(marker, 'click', function() {
    map.setZoom(12);
    map.setCenter(marker.getPosition());
  });
  
layer = new google.maps.FusionTablesLayer({
        query: {
                select: 'geometry',
                from: '17CkE8aMS47pKycdLKn0q7mc1A4yxU64PzYcCoJ4'
        },
        styles: [{
                polygonOptions: {
                        fillColor: '#CACACA',
                        fillOpacity: 0.6
                }
        }]
});
layer.setMap(map);
}

google.maps.event.addDomListener(window, 'load', initialize);
