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
    console.log(lat)
    console.log(long)

    let map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: lat, lng: long},
      zoom: 17
    });
    console.log('Here')
  };
  navigator.geolocation.getCurrentPosition(geoSuccess);
};
