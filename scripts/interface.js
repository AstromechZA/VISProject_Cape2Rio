// modify graph container to fit height
$('#container').css('height', yachtseries.length * 23 + 100);

var chart = null

var graph_one_class_1_hidden = false
var graph_one_class_2_hidden = false
var graph_one_class_3_hidden = false

var realredraw = null

var disableRedraw = function() {
    realredraw = chart.redraw
    chart.redraw = function(){};
}

var enableRedraw = function() {
    chart.redraw = realredraw;
    chart.redraw();
}

var class_1_winner = null
var class_2_winner = null
var class_3_winner = null

var global_map;
var global_yachts;
var global_rhumbline_path;

var global_selected_day = 29

var slider_slide = function _slider_slide(event, ui) {
    global_selected_day = Math.floor(ui.value / 24)

    update_position_graph()

    var hold = global_map.redraw;
    global_map.redraw = function(){}

    for (var i = global_yachts.length - 1; i >= 0; i--) global_yachts[i].update(ui.value)

    global_map.redraw = hold
    google.maps.event.trigger(global_map, "resize")
}

var update_position_graph = function() {
    disableRedraw();
    var num_series = chart.series.length;
    for(var i=0; i < num_series; i++) chart.series[i].setData(yachtseries[i].data.slice(0, global_selected_day*3), false);
    enableRedraw();
}

var set_yacht_class_visible = function(vis, cls) {
    if (vis) {
        for (var i = chart.series.length - 1; i >= 0; i--) {
            if (chart.series[i].color == YachtColour.class_colour(0.4, cls)) {
                chart.series[i].show()
            }
        };
        for (var i = global_yachts.length - 1; i >= 0; i--) {
            if(global_yachts[i].racing_class == cls) {
                global_yachts[i]._track.show()
                global_yachts[i].update(global_selected_day*24)
            }
        };
    } else {
        for (var i = chart.series.length - 1; i >= 0; i--) {
            if (chart.series[i].color == YachtColour.class_colour(0.4, cls))
            {
                chart.series[i].hide()
            }
        };
        for (var i = global_yachts.length - 1; i >= 0; i--) {
            if(global_yachts[i].racing_class == cls) global_yachts[i]._track.hide()
        };
    }
}

$(function () {

    var xaxiscategories = [0, "", "", 1, "", "", 2, "", "", 3, "", "", 4, "", "", 5, "", "", 6, "", "", 7, "", "", 8, "", "", 9, "", "", 10, "", "", 11, "", "", 12, "", "", 13, "", "", 14, "", "", 15, "", "", 16, "", "", 17, "", "", 18, "", "", 19, "", "", 20, "", "", 21, "", "", 22, "", "", 23, "", "", 24, "", "", 25, "", "", 26, "", "", 27, "", "", 28]

    chart = new Highcharts.Chart({
        chart: {
            renderTo: 'container'
        },
        title: false,
        xAxis: [{
            categories: xaxiscategories,
            min: 0,
            max: (28*3)
        },{
            categories: xaxiscategories,
            opposite: true,
            min: 0,
            max: (28*3)
        }],
        yAxis: [{
            title: false,
            allowDecimals: false,
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }],
            reversed: true,
            endOnTick: false,
            startOnTick: false,
            maxPadding: 0.3,
            minPadding: 0.3,
            tickInterval: 1,
            min: 0.5,
            max: yachtseries.length + 0.5,
            labels: {
                formatter: function(){
                    var v = this.value
                    var n = yachtseries.length
                    for (var i = 0; i < n; i++) {
                        if (yachtseries[i].data[0] == v || yachtseries[i].data[0].y == v) {
                            return yachtseries[i].name + ' - <strong>' + Util.position_string(v) + '</strong>';
                        }
                    };
                    return Util.position_string(v);
                }
            }
        },{
            title: false,
            allowDecimals: false,
            linkedTo: 0,
            reversed: true,
            opposite: true,
            labels: {
                formatter: function(){
                    var v = this.value;
                    var n = yachtseries.length
                    for (var i = 0; i < n; i++) {
                        var last = yachtseries[i].data.length-1
                        if (yachtseries[i].data[last] == v || yachtseries[i].data[last].y == v) {
                            if (yachtseries[i].lastState == 'marker_flag') return '<strong>' + Util.position_string(v) + '</strong> - '  + yachtseries[i].name;
                        }
                    };
                    return Util.position_string(v);
                }
            }
        }],
        plotOptions:{
            series: {
                marker: {
                    enabled: true,
                    states: {
                        hover: {
                            enabled: false,
                        }
                    }
                },
                enableMouseTracking: true,
                stickyTracking: false,
                lineWidth: 10,
                states: {
                    hover: {
                        lineWidth: 11
                    }
                },
                events: {
                    mouseOver: function() {
                        this.group.toFront()
                        this.markerGroup.toFront()
                    },
                    mouseOut: function() {
                        if (class_3_winner != null) class_3_winner[0].toFront()
                        if (class_2_winner != null) class_2_winner[0].toFront()
                        if (class_1_winner != null) class_1_winner[0].toFront()

                        if (class_3_winner != null) class_3_winner[1].toFront()
                        if (class_2_winner != null) class_2_winner[1].toFront()
                        if (class_1_winner != null) class_1_winner[1].toFront()
                    }
                }
            }
        },
        tooltip: {
            formatter: function() {
                    return this.series.name + ' - <b>' + Util.position_string(this.y) + '</b><br><em>' +'</em>';
            },
            crosshairs: true,
            snap: 5,
            hideDelay: 100
        },
        legend: true,
        series: yachtseries
    });

    $('.highcharts-container svg text:last').remove();

    class_1_winner = [chart.series[chart.series.length-1].group, chart.series[chart.series.length-1].markerGroup]
    class_2_winner = [chart.series[chart.series.length-2].group, chart.series[chart.series.length-2].markerGroup]
    class_3_winner = [chart.series[chart.series.length-3].group, chart.series[chart.series.length-3].markerGroup]

    $('#class_1_btn').click(function(){
        disableRedraw();
        set_yacht_class_visible(graph_one_class_1_hidden, 1)
        graph_one_class_1_hidden = (!graph_one_class_1_hidden)
        enableRedraw();
    })

    $('#class_2_btn').click(function(){
        disableRedraw();
        set_yacht_class_visible(graph_one_class_2_hidden, 2)
        graph_one_class_2_hidden = (!graph_one_class_2_hidden)
        enableRedraw();
    })

    $('#class_3_btn').click(function(){
        disableRedraw();
        set_yacht_class_visible(graph_one_class_3_hidden, 3)
        graph_one_class_3_hidden = (!graph_one_class_3_hidden)
        enableRedraw();
    })

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

    var mapstyle = [
      {
        "featureType": "water",
        "stylers": [
          { "lightness": 65 }
        ]
      },{
        "featureType": "water",
        "elementType": "labels.text.fill",
        "stylers": [
          { "lightness": -35 }
        ]
      }
    ]
    var styledMap = new google.maps.StyledMapType(mapstyle, {name: "Styled Map"});

    // create map
    global_map = new google.maps.Map($('#map-canvas')[0], {
        zoom: 4,
        center: new google.maps.LatLng(-28.767659, -13.909358),
        disableDefaultUI: true,
        minZoom: 4,
        maxZoom: 10,
        mapTypeControlOptions: {
          mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
        }
    });

    global_map.mapTypes.set('map_style', styledMap);
    global_map.setMapTypeId('map_style');

    global_map._yacht_tooltip = new MarkerWithLabel({
        position: new google.maps.LatLng(0,0),
        draggable: false,
        raiseOnDrag: false,
        map: global_map,
        labelContent: 'hello',
        labelAnchor: new google.maps.Point(0, 40),
        labelClass: "yacht_label", // the CSS class for the label
        labelStyle: {opacity: 1.0},
        icon: "http://placehold.it/1x1",
        visible: false
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

    for (var i = dataset.length-1; i >= 0; i--) {
        var b = new Yacht(dataset[i])
        b.add_track_to_map(global_map)
        global_yachts.push(b)
    }
});
