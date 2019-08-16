


// homepage -- map
if (navigator.geolocation) {
  console.log('Geolocation is supported!');
}
else {
  console.log('Geolocation is not supported for this Browser/OS.');
}

window.onload = function() {
  var startPos;
  var geoSuccess = function(position) {
    startPos = position;
    let lat  = startPos.coords.latitude;
    let long =  startPos.coords.longitude;
    let myLocation = {lat: lat, lng: long};


    let map = new google.maps.Map(document.getElementById('map'), {
      center: myLocation,
      zoom: 16
    });
    console.log('Here')

    var marker = new google.maps.Marker({
      position: myLocation,
      map: map,
      title: 'Hello World!'
    });

    // Another Marker
    var loc2 = {lat: 40.724616, lng: -74.0014076}

    var m2 = new google.maps.Marker({
      position: loc2,
      map: map,
      title: '📍'
    });

    marker.setMap(map);
    console.log(myLocation)

  };
  navigator.geolocation.getCurrentPosition(geoSuccess);
};
