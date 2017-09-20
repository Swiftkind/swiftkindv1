 // When the window has finished loading create our google map below
 google.maps.event.addDomListener(window, 'load', init);

 function init() {
     // Basic options for a simple Google Map
     // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
     var mapOptions = {
         // How zoomed in you want the map to start at (always required)
         zoom: 15,

         // The latitude and longitude to center the map (always required)
         center: new google.maps.LatLng(7.059179899999999, 125.59172039999999), // swiftkind

         // How you would like to style the map. 
         // This is where you would paste any style found on Snazzy Maps.
         styles: [{
                 "featureType": "administrative.locality",
                 "elementType": "all",
                 "stylers": [{
                         "hue": "#00ff6a"
                     },
                     {
                         "saturation": "64"
                     },
                     {
                         "lightness": 19
                     },
                     {
                         "visibility": "on"
                     },
                     {
                         "gamma": "1.30"
                     }
                 ]
             },
             {
                 "featureType": "landscape",
                 "elementType": "all",
                 "stylers": [{
                         "hue": "#00ff96"
                     },
                     {
                         "saturation": -100
                     },
                     {
                         "lightness": 100
                     },
                     {
                         "visibility": "simplified"
                     }
                 ]
             },
             {
                 "featureType": "poi",
                 "elementType": "all",
                 "stylers": [{
                         "hue": "#00ff96"
                     },
                     {
                         "saturation": -100
                     },
                     {
                         "lightness": 100
                     },
                     {
                         "visibility": "off"
                     }
                 ]
             },
             {
                 "featureType": "road",
                 "elementType": "geometry",
                 "stylers": [{
                         "hue": "#00ff96"
                     },
                     {
                         "saturation": -93
                     },
                     {
                         "lightness": 31
                     },
                     {
                         "visibility": "simplified"
                     }
                 ]
             },
             {
                 "featureType": "road",
                 "elementType": "geometry.fill",
                 "stylers": [{
                     "visibility": "on"
                 }]
             },
             {
                 "featureType": "road",
                 "elementType": "labels",
                 "stylers": [{
                         "hue": "#00ff96"
                     },
                     {
                         "saturation": -93
                     },
                     {
                         "lightness": 31
                     },
                     {
                         "visibility": "on"
                     }
                 ]
             },
             {
                 "featureType": "road.arterial",
                 "elementType": "labels",
                 "stylers": [{
                         "hue": "#00ff96"
                     },
                     {
                         "saturation": -93
                     },
                     {
                         "lightness": -2
                     },
                     {
                         "visibility": "simplified"
                     }
                 ]
             },
             {
                 "featureType": "road.local",
                 "elementType": "geometry",
                 "stylers": [{
                         "hue": "#00ff96"
                     },
                     {
                         "saturation": -90
                     },
                     {
                         "lightness": -8
                     },
                     {
                         "visibility": "simplified"
                     }
                 ]
             },
             {
                 "featureType": "transit",
                 "elementType": "all",
                 "stylers": [{
                         "hue": "#00ff96"
                     },
                     {
                         "saturation": 10
                     },
                     {
                         "lightness": 69
                     },
                     {
                         "visibility": "on"
                     }
                 ]
             },
             {
                 "featureType": "water",
                 "elementType": "all",
                 "stylers": [{
                         "hue": "#00ff96"
                     },
                     {
                         "saturation": -78
                     },
                     {
                         "lightness": 67
                     },
                     {
                         "visibility": "simplified"
                     }
                 ]
             }
         ]
     };

     // Get the HTML DOM element that will contain your map 
     // We are using a div with id="map" seen below in the <body>
     var mapElement = document.getElementById('map');

     // Create the Google Map using our element and options defined above
     var map = new google.maps.Map(mapElement, mapOptions);

     // Let's also add a marker while we're at it
     var marker = new google.maps.Marker({
         position: new google.maps.LatLng(7.059179899999999, 125.59172039999999),
         map: map,
     });
 }