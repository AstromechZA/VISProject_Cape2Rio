var global_rhumbline_path;

// rhumbline object
// activate via .setMap
global_rhumbline_path = new google.maps.Polyline({
    path: [
        new google.maps.LatLng(-23.051582, -43.081390),
        new google.maps.LatLng(-33.912276, 18.399475)
    ],
    geodesic: true,
    strokeColor: '#000000',
    strokeOpacity: 0.5,
    strokeWeight: 1
});


// main method
var init = function _init() {

    // create map
    global_map = new google.maps.Map($('#map-canvas')[0], {
        zoom: 4,
        center: new google.maps.LatLng(-28.767659, -13.909358),
        disableDefaultUI: true,
        minZoom: 2,
        maxZoom: 10
    });

    // add rhumbline
    global_rhumbline_path.setMap(global_map);

    var mapsize    = { width: 800, height: 600 };
    var mapElement = document.getElementById("map-canvas");

    mapElement.style.height = mapsize.height + "px";
    mapElement.style.width  = mapsize.width + "px";


    var customMapCanvas = new CanvasOverlay(global_map, mapsize.width, mapsize.height);

    google.maps.event.addListener(global_map, "dragend", function() {
        customMapCanvas.canvasDraw();
    });



}

$(init)