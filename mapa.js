
var map;
var markers = [];
var infoWindow;
let panorama;

function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 3,
    center: { lat: -38.416097, lng: -63.616672 },
  });

  const infowindow = new google.maps.InfoWindow();

  $.each(locations,function(key,value){
      var latLng = new google.maps.LatLng(value.lat, value.lng);

      var contentString = value.title;

        marker = new google.maps.Marker({           
              position: latLng,
              map: map,
              contentString: contentString
        });

        marker.data = value; // adds object to marker object
        marker.addListener('click', function() {
          var url_img = (value.streetview != undefined && value.streetview != '') ? value.streetview : 'https://maps.googleapis.com/maps/api/streetview?size=400x400&location=47.5763831,-122.4211769&fov=80&heading=70&pitch=0&key=AIzaSyA3kg7YWugGl1lTXmAmaBGPNhDW9pEh5bo&signature=hg7yTczCuAp4fwIWFySlSr_vq7o=';
            // read custom data in this.data
            var contenidoModalMapa = '<div id="descripcion" class="container-fluid">';
            contenidoModalMapa += '<div class="row">';
           
            contenidoModalMapa +=    '<div class="col-xs-5 col-sm-5 col-md-5 col-lg-5">';
            contenidoModalMapa +=        '<figure style="background-image:url('+url_img+');"></figure>';
            contenidoModalMapa +=    '</div>';
            contenidoModalMapa +=    '<div class="col-xs-7 col-sm-7 col-md-7 col-lg-7 text-center">';
                    if(value.title != undefined && value.title != ''){
                        contenidoModalMapa +=        '<h6>'+value.title+'</h6>';
                    }
                        contenidoModalMapa +=        '<hr>';
                    if(value.nowOnline != undefined && value.nowOnline != ''){
                        contenidoModalMapa +=        '<p style="font-size: 14px;">Ahora en Linea: <strong>'+value.nowOnline+'</strong></p>';
                    }
                    if(value.last24hs != undefined && value.last24hs != ''){
                        contenidoModalMapa +=        '<p style="font-size: 14px;">Ultimas 24 horas: <strong>'+value.last24hs+'</strong></p>';
                    }
                    if(value.pointAccess != undefined && value.pointAccess != ''){
                        contenidoModalMapa +=        '<p style="font-size: 14px;">Punto de '+value.pointAccess+' acceso disponible</p>';
                    }
                    if (value.model != undefined && value.model != '') {
                        contenidoModalMapa +=        '<p style="font-size: 14px;">Modelo : '+value.model+'</p>';
                    }
                    if (value.mac != undefined && value.mac != '') {
                        contenidoModalMapa +=        '<p style="font-size: 14px;">Mac: '+value.mac+'</p>';
                    }
            contenidoModalMapa +=    '</div>';
            contenidoModalMapa +='</div>';
            contenidoModalMapa +='</div>';

            infowindow.setContent(contenidoModalMapa);

            infowindow.open(map, this);
            map.setCenter(this.getPosition());
        });
        
        markers[key] = marker;
  });

  // Add a marker clusterer to manage the markers.
  const markerCluster = new markerClusterer.MarkerClusterer({ map, markers });

  /*var contenidoModalMapa = '';

  $.each(locations,function(key,value){
      console.log(value.title);

      contenidoModalMapa += '<div id="descripcion" class="container">';
      contenidoModalMapa += '<div class="row">';

      contenidoModalMapa +=    '<div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">';
      contenidoModalMapa +=        '<figure class="img-responsive" style="background-image:url(https://maps.googleapis.com/maps/api/streetview?size=400x400&location=47.5763831,-122.4211769&fov=80&heading=70&pitch=0&key=AIzaSyA3kg7YWugGl1lTXmAmaBGPNhDW9pEh5bo&signature=hg7yTczCuAp4fwIWFySlSr_vq7o=)"></figure>';
      contenidoModalMapa +=    '</div>';
      contenidoModalMapa +=    '<div class="col-xs-2 col-sm-2 col-md-2 col-lg-2 text-center">';
              if(value.title != undefined || value.title != ''){
                  contenidoModalMapa +=        '<h6>'+value.title+'</h6>';
              }
      contenidoModalMapa +=        '<hr>';
      contenidoModalMapa +=        '<p style="font-size: 14px;">Ahora en Linea: <strong>7</strong></p>';
      contenidoModalMapa +=        '<p style="font-size: 14px;">Ultimas 24 horas: <strong>10</strong></p>';
      contenidoModalMapa +=        '<p style="font-size: 14px;">Punto de 1 acceso disponible</p>';
      contenidoModalMapa +=        '<p style="font-size: 14px;">Modelo : AP</p>';
      contenidoModalMapa +=        '<p style="font-size: 14px;">Mac: E0-CB-BC-4A-3A-1A</p>';
      contenidoModalMapa +=    '</div>';
      contenidoModalMapa +='</div>';
      contenidoModalMapa +='</div>';
  });

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
  */

}
