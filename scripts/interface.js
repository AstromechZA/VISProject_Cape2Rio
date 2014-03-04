//graph_one_scripts.js

// marker creation functions

// day label creator
// must create blank labels in order to separate days
var day_labels = function _day_labels(n) {
    o = []
    for (var i = 0; i <= n; i++) {
        o.push('', i, '')
    };
    return o.slice(1, -1)
}

// modify graph container to fit height
$('#container').css('height', yachtseries.length * 23 + 100);

var chart = new Highcharts.Chart({
        chart: {
            renderTo: 'container'
        },
        title: false,
        xAxis: [{
            categories: day_labels(28),
            min: 0,
            max: (28*3)
        },{
            categories: day_labels(28),
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
                    c = this.chart;
                    v = this.value;
                    for (var i = 0; i < yachtseries.length; i++) {
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
                    c = this.chart;
                    v = this.value;
                    for (var i = 0; i < yachtseries.length; i++) {
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
                    return this.series.name + ' - <b>' + Util.position_string(this.y) + '</b><br><em>' + this.series.options.yachtType +'</em>';
            },
            crosshairs: true,
            snap: 5,
            hideDelay: 100
        },
        legend: true,
        series: yachtseries
    });

var graph_one_class_1_hidden = false
var graph_one_class_2_hidden = false
var graph_one_class_3_hidden = false

var redraw = chart.redraw
var fakeRedraw = function(){};

var disableRedraw = function() {
    chart.redraw = fakeRedraw
}

var enableRedraw = function() {
    chart.redraw = redraw;
    chart.redraw();
}

var class_1_winner = null
var class_2_winner = null
var class_3_winner = null

$(function () {
    $('.highcharts-container svg text:last').remove();

    class_1_winner = [chart.series[chart.series.length-1].group, chart.series[chart.series.length-1].markerGroup]
    class_2_winner = [chart.series[chart.series.length-2].group, chart.series[chart.series.length-2].markerGroup]
    class_3_winner = [chart.series[chart.series.length-3].group, chart.series[chart.series.length-3].markerGroup]

    $('#class_1_btn').click(function(){
        disableRedraw();
        if (graph_one_class_1_hidden) {
            for (var i = chart.series.length - 1; i >= 0; i--) {
                if (chart.series[i].color == YachtColour.class_one(0.4)) chart.series[i].show()
            };
            graph_one_class_1_hidden = false
        } else {
            for (var i = chart.series.length - 1; i >= 0; i--) {
                if (chart.series[i].color == YachtColour.class_one(0.4)) chart.series[i].hide()
            };
            graph_one_class_1_hidden = true
        }
        enableRedraw();
    })

    $('#class_2_btn').click(function(){
        disableRedraw();
        if (graph_one_class_2_hidden) {
            for (var i = chart.series.length - 1; i >= 0; i--) {
                if (chart.series[i].color == YachtColour.class_two(0.4)) chart.series[i].show()
            };
            graph_one_class_2_hidden = false
        } else {
            for (var i = chart.series.length - 1; i >= 0; i--) {
                if (chart.series[i].color == YachtColour.class_two(0.4)) chart.series[i].hide()
            };
            graph_one_class_2_hidden = true
        }
        enableRedraw();
    })

    $('#class_3_btn').click(function(){
        disableRedraw();
        if (graph_one_class_3_hidden) {
            for (var i = chart.series.length - 1; i >= 0; i--) {
                if (chart.series[i].color == YachtColour.class_three(0.4)) chart.series[i].show()
            };
            graph_one_class_3_hidden = false
        } else {
            for (var i = chart.series.length - 1; i >= 0; i--) {
                if (chart.series[i].color == YachtColour.class_three(0.4)) chart.series[i].hide()
            };
            graph_one_class_3_hidden = true
        }
        enableRedraw();
    })

});
