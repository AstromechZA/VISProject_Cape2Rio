// globbels
var map;

// rhumbline object
// activate via .setMap
var rhumbline_path = new google.maps.Polyline({
    path: [
        new google.maps.LatLng(-23.051582, -43.081390),
        new google.maps.LatLng(-33.912276, 18.399475)
    ],
    geodesic: true,
    strokeColor: '#000000',
    strokeOpacity: 0.5,
    strokeWeight: 1
});

var boat_points = dataset[0].points

var boat_circles = []

var arrow;

// main method
var init = function _init() {

    // build mapOptions object
    var mapOptions = {
        zoom: 4,
        center: new google.maps.LatLng(-22, -22),
        disableDefaultUI: true,
        minZoom: 4,
        maxZoom: 10
    };

    // create map
    map = new google.maps.Map($('#map-canvas')[0], mapOptions);

    // add rhumbline
    rhumbline_path.setMap(map);

    build_circles()

    $("#slider").slider({
        min: 0,
        max: boat_points.length,
        slide: slider_slide
    });

    arrow = new BoatArrow(mapOptions.center, Math.PI/4, 1, '#FF0000')
    arrow.setMap(map)
    arrow.show()

}

var build_circles = function _build_circles() {
    for (var i = boat_points.length - 1; i >= 0; i--) {
        boat_circles.push(new google.maps.Circle({
            center: new google.maps.LatLng(boat_points[i][1][0], boat_points[i][1][1]),
            radius: 5000,
            strokeWeight: 0,
            fillColor: '#000000',
            fillOpacity: 0.8,
            map: map
        }));
    };
}

var slider_slide = function _slider_slide(event, ui) {
    arrow.setBearing(ui.value*2);
    for (var i = 0; i < boat_circles.length; i++) {
        b = (i < ui.value)
        if (boat_circles[i].visible != b) boat_circles[i].setVisible(b)
    };


}




$(init)