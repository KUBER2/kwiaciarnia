// Initialize and add the map
//api key AIzaSyD2JqWV1-AqeVR2MrR_PkICm67LIXSS54c
function initMap() {
  // The location of Uluru
  var uluru = {lat: -25.344, lng: 131.036};
  var kwiaciarnia = {lat: 51.406796, lng: 21.157376};
  // The map, centered at Uluru
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 10, center: kwiaciarnia});
  // The marker, positioned at Uluru
  var marker = new google.maps.Marker({position: kwiaciarnia, map: map});
}
