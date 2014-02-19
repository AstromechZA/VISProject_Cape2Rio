// globbels
var global_map;
var global_yachts;
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

    global_yachts = []

    for (var i = dataset.length - 1; i >= 0; i--) {
        var b = new Yacht(dataset[i])
        b.add_track_to_map(global_map)
        global_yachts.push(b)
    }

}

var last_slide_time = 0
var slider_slide = function _slider_slide(event, ui) {
    var now = Date.now()
    if((now-last_slide_time)>30) {
        for (var i = global_yachts.length - 1; i >= 0; i--) global_yachts[i].update(ui.value)
        last_slide_time = now
    }
}

$(init)