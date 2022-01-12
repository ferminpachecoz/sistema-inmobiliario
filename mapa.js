// function initMap() {

//   const uluru = { lat: -25.344, lng: 131.036 };

//   const map = new google.maps.Map(document.getElementById("map"), {
//     zoom: 4,
//     center: uluru,
//   });

//   const marker = new google.maps.Marker({
//     position: uluru,
//     map: map,
//   });
// }


function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 3,
    center: { lat: -38.416097, lng: -63.616672 },
  });
  const descripcion = document.getElementById('descripcion')
  const infoWindow = new google.maps.InfoWindow({
    content: contenidoModalMapa,
    disableAutoPan: true,
  });
  // Create an array of alphabetical characters used to label the markers.
  const labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  // Add some markers to the map.
  const markers = locations.map((position, i) => {
    const label = labels[i % labels.length];
    const marker = new google.maps.Marker({
      position,
      label,
    });

    // markers can only be keyboard focusable when they have click listeners
    // open info window when marker is clicked
    marker.addListener("click", () => {
      infoWindow.open(map, marker);
    });
    return marker;
  });

  // Add a marker clusterer to manage the markers.
  const markerCluster = new markerClusterer.MarkerClusterer({ map, markers });
}

// const locations = [
//   { lat: -34.61315, lng: -58.37723 },
//   { lat: -31.4135, lng: -64.18105 },
//   { lat: -32.94682, lng: -60.63932 },
//   { lat: -32.89084, lng: -68.82717 },
//   { lat: -26.82414, lng: -65.2226 },
//   { lat: -34.92145, lng: -57.95453 },
//   { lat: -38.00042, lng: -57.5562 },
//   { lat: -24.7859, lng: -65.41166 },
//   { lat: -31.64881, lng: -60.70868 },
//   { lat: -31.5375, lng: -68.53639 },
//   { lat: -27.46056, lng: -58.98389 },
//   { lat: -27.79511, lng: -64.26149 },
//   { lat: -27.36708, lng: -55.89608 },
//   { lat: -24.19457, lng:  -65.29712 },
//   { lat: -38.71959, lng: -62.27243 },
//   { lat: -31.73271, lng: -60.52897 },
//   { lat: -34.66627, lng: -58.72927 },
//   { lat: -34.51541, lng: -58.76813 },
//   { lat: -34.72904, lng: -58.26374 },
//   { lat: -34.45866, lng: -58.9142 },
//   { lat: -31.42797, lng: -62.08266 },
//   { lat: -22.51637, lng: -63.80131 },
//   { lat: -34.6509, lng: -58.61956 },
// ];