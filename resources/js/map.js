// Initialize and add the map
function initMap() {
// The location of Uluru
 var uluru = {lat: 56.901306, lng: 24.039637};
 // The map, centered at Uluru
 var map = new google.maps.Map(
 document.getElementById('maps'), {zoom: 14, center: uluru});
 // The marker, positioned at Uluru
 var marker = new google.maps.Marker({position: uluru, map: map});
 }
