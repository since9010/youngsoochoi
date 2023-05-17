// Initialize and add the map
function initMap() {
  // The location of schools
  const bundokind = { lat: 36.126, lng: 128.333};
  const geumoele = { lat: 36.124, lng: 128.335 };
  const hyungnammid = { lat: 36.101, lng: 128.336};
  const gimhigh = { lat: 36.123, lng: 128.093};
  const skku = { lat: 37.588, lng: 126.991};
  // The map, centered at schools
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 7.5,
    center: gimhigh,
  });
  // The marker, positioned at schools
  const marker1 = new google.maps.Marker({
    position: bundokind,
    map: map,
  });
  const marker2 = new google.maps.Marker({
    position: geumoele,
    map: map,
  });
  const marker3 = new google.maps.Marker({
    position: hyungnammid,
    map: map,
  });
  const marker4 = new google.maps.Marker({
    position: gimhigh,
    map: map,
  });
  const marker5 = new google.maps.Marker({
    position: skku,
    map: map,
  });
}

window.initMap = initMap;
