// globbels
var global_map;
var global_boat;
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
        center: new google.maps.LatLng(-22, -22),
        disableDefaultUI: true,
        minZoom: 4,
        maxZoom: 10
    });

    // add rhumbline
    global_rhumbline_path.setMap(global_map);

    // activate slider
    $("#slider").slider({
        min: 0,
        max: 28*24,
        slide: slider_slide
    });

    global_boat = new Boat(dataset[0])
    global_boat.add_track_to_map(global_map)

    // arrow = new BoatArrow(mapOptions.center, Math.PI/4, 1, '#FF0000')
    // arrow.setMap(map)
    // arrow.show()

}

var slider_slide = function _slider_slide(event, ui) {
    global_boat.update(ui.value)

    // arrow.setBearing(ui.value*2);
    // for (var i = 0; i < boat_circles.length; i++) {
    //     b = (i < ui.value)
    //     if (boat_circles[i].visible != b) boat_circles[i].setVisible(b)
    // };


}

$(init)