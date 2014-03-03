//graph_one_scripts.js

// marker creation functions
var marker_flag = function _marker_flag(y) {
    return {y: y, marker: {symbol: 'url(./images/finishflag.png)', enabled: true}}
}

var marker_cross = function _marker_cross(y) {
    return {y: y, marker: {symbol: 'url(./images/redx.png)', enabled: true}}
}

var premul = function _premul(v, a) {
    return Math.round(v*a + 255*(1-a))
}

// Colour creation function
var class_1_colour = function _class_1_colour(o) {
    return 'rgb(' + premul(120,o) + ',' + premul(183,o) + ',' + premul(47,o) + ')'
}

var class_2_colour = function _class_2_colour(o) {
    return 'rgb(' + premul(183,o) + ',' + premul(47,o) + ',' + premul(47,o) + ')'
}

var class_3_colour = function _class_3_colour(o) {
    return 'rgb(' + premul(47,o) + ',' + premul(87,o) + ',' + premul(183,o) + ')'
}

// day label creator
// must create blank labels in order to separate days
var day_labels = function _day_labels(n) {
    o = []
    for (var i = 0; i <= n; i++) {
        o.push('', i, '')
    };
    return o.slice(1, -1)
}

// return number with appropriate suffix
var position_string = function _position_string(i) {
    return '' + i + (((i % 10) < 4 && (i%10)>0) ? (Math.floor(i / 10) % 10 == 1 ? 'th' : ['st','nd','rd'][i%10-1]) : 'th');
}

var expand_daily_positions = function _expand_daily_positions(position_array, end_mark_f, end_day) {
    o = []
    for(var i=0;i<position_array.length;i++) {
        v = position_array[i]
        o.push(v, v, v)
    }
    o[end_day*3+1] = end_mark_f(o[end_day*3+1])
    return o.slice(1, -1)
}

// yacht series hash
var yachtseries = [
{
    name: 'Investec Ciao Bella',
    data: expand_daily_positions([16, 16, 20, 9, 5, 5, 3, 5, 4, 3, 6, 6, 6, 6, 6, 6, 6, 6, 6, 7, 7, 7, 7, 5, 5, 5, 5, 5, 5], marker_flag, 23),
    color: class_1_colour(0.4),
    marker: {enabled: false},
    lineWidth: 5,
    dashstyle: 'solid',
    yachtType: ''
},
{
    name: 'HQ2',
    data: expand_daily_positions([33, 33, 33, 34, 35, 35, 33, 34, 29, 28, 26, 25, 25, 23, 23, 22, 22, 22, 22, 21, 18, 13, 13, 12, 12, 13, 13, 17, 21], marker_flag, 26),
    color: class_3_colour(0.4),
    marker: {enabled: false},
    lineWidth: 5,
    dashstyle: 'solid',
    yachtType: ''
},

{
    name: 'Black Cat',
    data: expand_daily_positions([19, 18, 24], marker_cross, 2),
    color: class_1_colour(0.4),
    marker: {enabled: false},
    lineWidth: 5,
    dashstyle: 'solid',
    yachtType: ''
},
{
    name: 'FTI Flyer',
    data: expand_daily_positions([5, 6, 14], marker_cross, 2),
    color: class_2_colour(0.4),
    marker: {enabled: false},
    lineWidth: 5,
    dashstyle: 'solid',
    yachtType: ''
},
{
    name: 'Avanti',
    data: expand_daily_positions([10, 10, 21], marker_cross, 2),
    color: class_2_colour(0.4),
    marker: {enabled: false},
    lineWidth: 5,
    dashstyle: 'solid',
    yachtType: ''
},
{
    name: 'Rocket/Stop Rhino Poaching',
    data: expand_daily_positions([30, 30, 9, 30, 28, 26, 34, 22, 19, 17, 14, 16, 15, 14, 10, 8, 7, 7, 7, 6, 6, 6, 6, 8, 9, 10, 10, 10, 11], marker_flag, 22),
    color: class_1_colour(0.4),
    marker: {enabled: false},
    lineWidth: 5,
    dashstyle: 'solid',
    yachtType: ''
},
{
    name: 'Privateer',
    data: expand_daily_positions([31, 31, 32, 31, 26, 22, 20, 11, 9, 8, 5, 5, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4], marker_flag, 19),
    color: class_1_colour(0.4),
    marker: {enabled: false},
    lineWidth: 5,
    dashstyle: 'solid',
    yachtType: ''
},
{
    name: 'Nomad Yacht Charters',
    data: expand_daily_positions([28, 29, 8, 27, 27, 28, 26, 23, 21, 19, 19, 19, 19, 19, 19, 16, 14, 13, 11, 11, 11, 10, 11, 9, 11, 12, 12, 15, 16], marker_flag, 24),
    color: class_3_colour(0.4),
    marker: {enabled: false},
    lineWidth: 5,
    dashstyle: 'solid',
    yachtType: ''
},
{
    name: 'Tulliana',
    data: expand_daily_positions([26, 26, 29, 21, 20, 20, 17, 16, 14, 15, 20, 12, 12, 11, 12, 12, 11, 10, 10, 10, 10, 11, 10, 11, 10, 11, 11, 13, 14], marker_flag, 24),
    color: class_3_colour(0.4),
    marker: {enabled: false},
    lineWidth: 5,
    dashstyle: 'solid',
    yachtType: ''
},

{
    name: 'Alleycat Too',
    data: expand_daily_positions([14, 14, 3, 14, 14, 12, 15, 17, 18, 21, 21, 22, 22, 22, 22, 23, 23, 23, 23, 23, 23, 24, 24, 24, 24, 24, 24, 24, 24], marker_cross, 28),
    color: class_3_colour(0.4),
    marker: {enabled: false},
    lineWidth: 5,
    dashstyle: 'solid',
    yachtType: ''
},
{
    name: 'DoDo',
    data: expand_daily_positions([2, 2, 13, 6], marker_cross, 3),
    color: class_2_colour(0.4),
    marker: {enabled: false},
    lineWidth: 5,
    dashstyle: 'solid',
    yachtType: ''
},
{
    name: 'Perie Baniu Rolly Tasker',
    data: expand_daily_positions([3, 3, 2, 3, 1, 2, 2, 3, 3, 4, 7, 7, 7, 8, 8, 11, 12, 12, 13, 13, 13, 16, 15, 15, 16, 16, 16, 18, 8], marker_flag, 28),
    color: class_2_colour(0.4),
    marker: {enabled: false},
    lineWidth: 5,
    dashstyle: 'solid',
    yachtType: ''
},
{
    name: 'Windgat',
    data: expand_daily_positions([20, 20, 23, 17, 17, 13, 18, 19, 20, 20, 18, 18, 17, 17, 16, 17, 17, 19, 17, 18, 17, 18, 17, 16, 14, 14, 14, 16, 18], marker_flag, 27),
    color: class_3_colour(0.4),
    marker: {enabled: false},
    lineWidth: 5,
    dashstyle: 'solid',
    yachtType: ''
},
{
    name: 'Scarlet Runner',
    data: expand_daily_positions([32, 32, 10, 28, 22, 18, 9, 4, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2], marker_flag, 15),
    color: class_1_colour(0.4),
    marker: {enabled: false},
    lineWidth: 5,
    dashstyle: 'solid',
    yachtType: ''
},
{
    name: 'Vulcan 44',
    data: expand_daily_positions([15, 15, 18, 11, 9, 8, 7, 10, 15, 16, 13, 15, 18, 16, 18, 19, 20, 16, 18, 17, 19, 20, 18, 18, 18, 18, 17, 14, 15], marker_flag, 27),
    color: class_2_colour(0.4),
    marker: {enabled: false},
    lineWidth: 5,
    dashstyle: 'solid',
    yachtType: ''
},
{
    name: 'Amtec Wits Aladdin',
    data: expand_daily_positions([17, 17, 4, 15, 13, 15, 10, 13, 12, 11, 9, 9, 9, 7, 7, 7, 8, 8, 8, 9, 9, 9, 9, 10, 6, 6, 6, 6, 6], marker_flag, 24),
    color: class_1_colour(0.4),
    marker: {enabled: false},
    lineWidth: 5,
    dashstyle: 'solid',
    yachtType: ''
},
{
    name: 'Cool Runnings',
    data: expand_daily_positions([13, 13, 6, 13, 12, 9, 12, 12, 13, 14, 16, 17, 16, 18, 17, 18, 18, 17, 16, 16, 15, 17, 16, 17, 17, 15, 15, 12, 13], marker_flag, 27),
    color: class_2_colour(0.4),
    marker: {enabled: false},
    lineWidth: 5,
    dashstyle: 'solid',
    yachtType: ''
},
{
    name: 'Bille',
    data: expand_daily_positions([21, 21, 26], marker_cross, 2),
    color: class_1_colour(0.4),
    marker: {enabled: false},
    lineWidth: 5,
    dashstyle: 'solid',
    yachtType: ''
},
{
    name: 'INSV Mhadei',
    data: expand_daily_positions([29, 28, 7, 29, 29, 29, 27, 27, 25, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 22, 23, 23, 23, 22, 21, 19, 20], marker_flag, 28),
    color: class_1_colour(0.4),
    marker: {enabled: false},
    lineWidth: 5,
    dashstyle: 'solid',
    yachtType: ''
},
{
    name: 'Isla',
    data: expand_daily_positions([22, 22, 27], marker_cross, 2),
    color: class_3_colour(0.4),
    marker: {enabled: false},
    lineWidth: 5,
    dashstyle: 'solid',
    yachtType: ''
},
{
    name: 'Genevieve Too',
    data: expand_daily_positions([23, 23, 25, 23, 23, 23, 25, 25, 23, 22, 22, 21, 20, 21, 21, 20, 19, 20, 20, 20, 20, 23, 20, 20, 21, 23, 23, 22, 19], marker_flag, 28),
    color: class_3_colour(0.4),
    marker: {enabled: false},
    lineWidth: 5,
    dashstyle: 'solid',
    yachtType: ''
},
{
    name: 'Avocet',
    data: expand_daily_positions([24, 25, 31], marker_cross, 2),
    color: class_1_colour(0.4),
    marker: {enabled: false},
    lineWidth: 5,
    dashstyle: 'solid',
    yachtType: ''
},
{
    name: 'Iskareen',
    data: expand_daily_positions([27, 27, 30, 20, 18, 14, 11, 9, 6, 7, 4, 4, 5, 5, 5, 5, 5, 5, 5, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3], marker_flag, 19),
    color: class_1_colour(0.4),
    marker: {enabled: false},
    lineWidth: 5,
    dashstyle: 'solid',
    yachtType: ''
},
{
    name: 'JML Rotary Scout',
    data: expand_daily_positions([6, 5, 1, 1, 3, 3, 4, 7, 11, 12, 12, 13, 14, 15, 15, 15, 16, 18, 19, 19, 21, 15, 21, 22, 22, 21, 22, 23, 23], marker_cross, 28),
    color: class_2_colour(0.4),
    marker: {enabled: false},
    lineWidth: 5,
    dashstyle: 'solid',
    yachtType: ''
},
{
    name: 'Tranquilo',
    data: expand_daily_positions([9, 9, 17, 8, 6, 4, 5, 8, 8, 9, 11, 11, 11, 13, 14, 14, 15, 15, 15, 15, 16, 19, 19, 19, 19, 20, 20, 21, 22], marker_cross, 28),
    color: class_3_colour(0.4),
    marker: {enabled: false},
    lineWidth: 5,
    dashstyle: 'solid',
    yachtType: ''
},
{
    name: 'Indaba',
    data: expand_daily_positions([4, 4, 12, 4], marker_cross, 3),
    color: class_2_colour(0.4),
    marker: {enabled: false},
    lineWidth: 5,
    dashstyle: 'solid',
    yachtType: ''
},
{
    name: 'Mussulo III',
    data: expand_daily_positions([25, 24, 28, 22, 19, 17, 13, 18, 16, 13, 15, 14, 13, 12, 11, 10, 9, 9, 9, 8, 8, 8, 8, 6, 7, 8, 8, 8, 9], marker_flag, 23),
    color: class_1_colour(0.4),
    marker: {enabled: false},
    lineWidth: 5,
    dashstyle: 'solid',
    yachtType: ''
},
{
    name: 'Peekay',
    data: expand_daily_positions([11, 11, 22, 19], marker_cross, 3),
    color: class_2_colour(0.4),
    marker: {enabled: false},
    lineWidth: 5,
    dashstyle: 'solid',
    yachtType: ''
},
{
    name: 'Explora',
    data: expand_daily_positions([34, 34, 34, 33, 34, 30, 24, 14, 10, 5, 3, 3, 3, 3, 3, 3, 3, 3, 3, 5, 5, 5, 5, 7, 8, 9, 9, 9, 10], marker_flag, 17),
    color: class_1_colour(0.4),
    marker: {enabled: false},
    lineWidth: 5,
    dashstyle: 'solid',
    yachtType: ''
},
{
    name: 'Jacaranda Of Carrick',
    data: expand_daily_positions([12, 12, 19, 12, 11, 10, 14, 15, 17, 18, 17, 20, 21, 20, 20, 21, 21, 21, 21, 22, 22, 21, 22, 21, 20, 19, 19, 20, 17], marker_flag, 28),
    color: class_2_colour(0.4),
    marker: {enabled: false},
    lineWidth: 5,
    dashstyle: 'solid',
    yachtType: ''
},
{
    name: 'Hot Ice',
    data: expand_daily_positions([18, 19, 5, 16, 16, 19, 19, 20, 22, 23, 23, 23, 23, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25], marker_cross, 28),
    color: class_2_colour(0.4),
    marker: {enabled: false},
    lineWidth: 5,
    dashstyle: 'solid',
    yachtType: ''
},
{
    name: 'Ava',
    data: expand_daily_positions([1, 1, 11, 2], marker_cross, 3),
    color: class_2_colour(0.4),
    marker: {enabled: false},
    lineWidth: 5,
    dashstyle: 'solid',
    yachtType: ''
},
{
    name: 'Myrtle Of Bonnievale',
    data: expand_daily_positions([7, 7, 16, 7, 7, 6, 6, 6, 7, 10, 10, 10, 10, 10, 13, 13, 13, 14, 14, 14, 14, 14, 14, 14, 15, 17, 18, 11, 12], marker_flag, 27),
    color: class_3_colour(1),
    marker: {enabled: false},
    lineWidth: 10,
    dashstyle: 'solid',
    yachtType: ''
},
{
    name: 'YOLO',
    data: expand_daily_positions([8, 8, 15, 5, 2, 1, 1, 2, 5, 6, 8, 8, 8, 9, 9, 9, 10, 11, 12, 12, 12, 12, 12, 13, 13, 7, 7, 7, 7], marker_flag, 25),
    color: class_2_colour(1),
    marker: {enabled: false},
    lineWidth: 10,
    dashstyle: 'solid',
    yachtType: ''
},
{
    name: 'Maserati',
    data: expand_daily_positions([35, 35, 35, 35, 32, 24, 8, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], marker_flag, 11),
    color: class_1_colour(1),
    marker: {enabled: false},
    lineWidth: 10,
    dashstyle: 'solid',
    yachtType: ''
}

];


// modify graph container to fit height
$('#container').css('height', yachtseries.length * 23 + 100);

var chart = new Highcharts.Chart({
        chart: {
            renderTo: 'container'
        },
        title: {
            text: 'Daily race position'
        },
        xAxis: {
            categories: day_labels(28),
            opposite: true,
            min: 0,
            max: (28*3)
        },
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
                    v = this.value;
                    return '<strong>' + position_string(v) + '</strong>'
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
                            return '<strong>' + position_string(v) + '</strong> - '  + yachtseries[i].name;
                        }
                    };
                    return position_string(v);
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
                lineWidth: 10,
                states: {
                    hover: {
                        lineWidth: 11
                    }
                },
                events: {
                    mouseOver: function() {

                        disableRedraw()

                        this.group.toFront()

                        if (class_3_winner != null) class_3_winner.toFront()
                        if (class_2_winner != null) class_2_winner.toFront()
                        if (class_1_winner != null) class_1_winner.toFront()

                        this.markerGroup.toFront()


                        enableRedraw()
                    },
                    mouseOut: function() {
                    }
                }
            }
        },
        tooltip: {
            formatter: function() {
                    return this.series.name + ' - <b>' + position_string(this.y) + '</b><br><em>' + this.series.options.yachtType +'</em>';
            },
            crosshairs: true
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

    class_1_winner = chart.series[chart.series.length-1].group
    class_2_winner = chart.series[chart.series.length-2].group
    class_3_winner = chart.series[chart.series.length-3].group

    $('#class_1_btn').click(function(){
        disableRedraw();
        if (graph_one_class_1_hidden) {
            for (var i = chart.series.length - 1; i >= 0; i--) {
                if (chart.series[i].color == class_1_colour(0.4)) chart.series[i].show()
            };
            graph_one_class_1_hidden = false
        } else {
            for (var i = chart.series.length - 1; i >= 0; i--) {
                if (chart.series[i].color == class_1_colour(0.4)) chart.series[i].hide()
            };
            graph_one_class_1_hidden = true
        }
        enableRedraw();
    })

    $('#class_2_btn').click(function(){
        disableRedraw();
        if (graph_one_class_2_hidden) {
            for (var i = chart.series.length - 1; i >= 0; i--) {
                if (chart.series[i].color == class_2_colour(0.4)) chart.series[i].show()
            };
            graph_one_class_2_hidden = false
        } else {
            for (var i = chart.series.length - 1; i >= 0; i--) {
                if (chart.series[i].color == class_2_colour(0.4)) chart.series[i].hide()
            };
            graph_one_class_2_hidden = true
        }
        enableRedraw();
    })

    $('#class_3_btn').click(function(){
        disableRedraw();
        if (graph_one_class_3_hidden) {
            for (var i = chart.series.length - 1; i >= 0; i--) {
                if (chart.series[i].color == class_3_colour(0.4)) chart.series[i].show()
            };
            graph_one_class_3_hidden = false
        } else {
            for (var i = chart.series.length - 1; i >= 0; i--) {
                if (chart.series[i].color == class_3_colour(0.4)) chart.series[i].hide()
            };
            graph_one_class_3_hidden = true
        }
        enableRedraw();
    })

});
