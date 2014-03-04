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

$.widget("app.slider", $.ui.slider, {

    options: {
        ticks: false
    },

    _create: function(){
        this._super();
        if (!this.options.ticks || this.options.step < 5){
            return;
        }

        var cnt = this.options.min + this.options.step,
            background = this.element.css( "border-color" ),
            left;

        while ( cnt < this.options.max ) {

            // Compute the "left" CSS property for the next tick mark.
            left = ( cnt / this.options.max * 100 ).toFixed( 2 ) + "%";

            // Creates the tick div, and adds it to the element. It adds the
            // "ui-slider-tick" class, which has common properties for each tick.
            // It also applies the computed CSS properties, "left" and "background".
            $( "<div/>" ).addClass( "ui-slider-tick" )
                         .appendTo( this.element )
                         .css( { left: left, background: background } );

            cnt += this.options.step;
        }
    }
});

// main method
var init = function _init() {

    // create map
    global_map = new google.maps.Map($('#map-canvas')[0], {
        zoom: 4,
        center: new google.maps.LatLng(-28.767659, -13.909358),
        disableDefaultUI: true,
        minZoom: 4,
        maxZoom: 10
    });

    // add rhumbline
    global_rhumbline_path.setMap(global_map);

    // activate slider
    $("#slider").slider({
        min: 0,
        max: 29*24,
        slide: slider_slide,
        step: 24,
        ticks: true,
        value: 29*24
    });


    global_yachts = []

    for (var i = 10; i >= 0; i--) {
        var b = new Yacht(dataset[i])
        b.add_track_to_map(global_map)
        global_yachts.push(b)
    }
}

var slider_slide = function _slider_slide(event, ui) {
        var day = Math.floor(ui.value / 24)
        update_position_graph(day)
        for (var i = global_yachts.length - 1; i >= 0; i--) global_yachts[i].update(ui.value)
}

var update_position_graph = function(day) {
    var num_series = chart.series.length;
    for(var i=0; i < num_series; i++) chart.series[i].setData(yachtseries[i].data.slice(0, day*3), false);
    chart.redraw();
}

$(init)