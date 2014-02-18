//graph_one_scripts.js

// marker creation functions
var marker_flag = function _marker_flag(y) {
    return {y: y, marker: {symbol: 'url(./images/finishflag.png)', enabled: true}}
}

var marker_cross = function _marker_cross(y) {
    return {y: y, marker: {symbol: 'url(./images/redx.png)', enabled: true}}
}


// Colour creation function
var class_1_colour = function _class_1_colour(o) {
    return 'rgba(120, 183, 47, ' + o + ')'
}

var class_2_colour = function _class_2_colour(o) {
    return 'rgba(183, 47, 47, ' + o + ')'
}

var class_3_colour = function _class_3_colour(o) {
    return 'rgba(47, 87, 183, ' + o + ')'
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
    return '' + i + (((i % 10) < 4 && (i%10)>0) ? ['st','nd','rd'][i%10-1] : 'th');
}

var expand_daily_positions = function _expand_daily_positions(position_array, end_mark_f) {
    o = []
    for(var i=0;i<position_array.length;i++) {
        v = position_array[i]
        o.push(v, v, v)
    }
    o[o.length-2] = end_mark_f(o[o.length-2])
    return o.slice(1, -1)
}

// yacht series hash
yachtseries = [
    {
        name: 'Investec Ciao Bella',
        data: expand_daily_positions([5,5,5,5,5,5,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6], marker_flag),
        color: class_2_colour(0.5),
        marker: {
            enabled: false
        },
        lineWidth: 7
    },
    {
        name: 'Privateer',
        data: expand_daily_positions([4,4,4,4,4,4,4,4,4,4,4,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5], marker_flag),
        color: class_1_colour(0.5),
        marker: {
            enabled: false
        },
        lineWidth: 7
    },
    {
        name: 'Iskareen',
        data: expand_daily_positions([3,3,2,3,3,3,3,3,3,3,3,3,3,3,3,4,4,4,4,4,4,4,4,3,3,3,3,3], marker_flag),
        color: class_1_colour(0.5),
        marker: {
            enabled: false
        },
        lineWidth: 7
    },
    {
        name: 'Maserati',
        data: expand_daily_positions([1,1,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2], marker_flag),
        color: class_3_colour(1),
        marker: {
            enabled: false
        }
    },
    {
        name: 'Mussulo III',
        data: expand_daily_positions([6,6,6,6,6,6,5,5,5,5,5,4,4,4,4,3,3,3,3,3,3,3,3,4,4,4,4,4], marker_flag),
        color: class_2_colour(1),
        marker: {
            enabled: false
        }
    },
    {
        name: 'Explora',
        data: expand_daily_positions([7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7], marker_cross),
        color: class_3_colour(0.5),
        marker: {
            enabled: false
        },
        lineWidth: 7
    },
    {
        name: 'Scarlet Runner',
        data: expand_daily_positions([2,2,3,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1], marker_flag),
        color: class_1_colour(1),
        marker: {
            enabled: false
        }
    }
];


// modify graph container to fit height
$('#container').css('height', yachtseries.length * 23 + 100);

// build chart
$(function () {
    $('#container').highcharts({
        title: {
            text: 'Daily race position'
        },
        xAxis: {
            categories: day_labels(27),
            opposite: true
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
                    c = this.chart;
                    v = this.value;
                    for (var i = yachtseries.length - 1; i >= 0; i--) {
                        if (yachtseries[i].data[0] == v || yachtseries[i].data[0].y == v) {
                            return '' + yachtseries[i].name + ' - <strong>' + position_string(v) + '</strong>';
                        }
                    };
                    return this.value;
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
                        if (yachtseries[i].data[yachtseries[i].data.length-1] == v || yachtseries[i].data[yachtseries[i].data.length-1].y == v) {
                            return '<strong>' + position_string(v) + '</strong> - '  + yachtseries[i].name;
                        }
                    };
                    return this.value;
                }
            }
        }],
        plotOptions:{
            series: {
                marker: {
                    enabled: true,
                    states: {
                        hover: {
                            enabled: false
                        }
                    }
                },
                enableMouseTracking: true,
                lineWidth: 10 ,
                // events: {
                //     mouseOver: function() {
                //         $('.highcharts-series').each(function(){$(this).attr('opacity',0.7)});
                //         this.group.toFront();
                //         $(this.group.element).attr('opacity',1.0)
                //     }
                // }

            }
        },
        tooltip: {
            formatter: function() {
                    return '<b>'+ this.series.name +'</b>';
            }
        },
        legend: false,
        series: yachtseries
    });
    $('.highcharts-container svg text:last').remove();
});