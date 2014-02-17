//graph_one_scripts.js

boatseries = [
    {
        name: 'INVESTEC CIAO BELLA',
        data: [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6],
        color: '#a8ce56',
        lineWidth: 7,
        marker: {
            enabled: false
        },
        dashStyle: 'shortdash'
    },
    {
        name: 'PRIVATEER',
        data: [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
        color: '#0064b8',
        marker: {
            enabled: false
        }
    },
    {
        name: 'SCARLET RUNNER',
        data: [2, 2, 2, 2, 2, 3, 3, 3, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, {
            y: 1,
            marker: {
                symbol: 'url(./images/finishflag.png)',
                enabled: true
            }
        }],
        marker: {
            enabled: false
        },
        color: '#81bc00'
    },
    {
        name: 'ISKAREEN',
        data: [3, 3, 3, 3, 3, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
        color: '#a8ce56',
        lineWidth: 7,
        marker: {
            enabled: false
        },
        dashStyle: 'shortdash'
    },
    {
        name: 'MASERATI',
        data: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
        color: '#f2390e',
        marker: {
            enabled: false
        }
    },
    {
        name: 'MUSSULO III',
        data: [6,6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
        color: '#f26f51',
        lineWidth: 7,
        marker: {
            enabled: false
        },
        dashStyle: 'shortdash'
    },
    {
        name: 'EXPLORA',
        data: [7,7, 8, 8, 8, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 8, 8, 8, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7],
        color: '#3c89ca',
        lineWidth: 7,
        marker: {
            enabled: false
        },
        dashStyle: 'shortdash'
    }
];

var position_string = function _position_string(i) {
    return '' + i + ((i % 10 < 4) ? ['st','nd','rd'][i%10-1] : 'th');
}

$('#container').css('height', boatseries.length * 24 + 100);

$(function () {
    $('#container').highcharts({
        title: {
            text: 'Daily race position'
        },
        xAxis: {
            categories: [0, '', '', 1, '', '', 2, '', '', 3, '', '', 4, '', '', 5, '', '', 6, '', '', 7, '', '', 8, '', '', 9, '', '', 10, '', '', 11, '', '', 12, '', '', 13, '', '', 14, '', '', 15, '', '', 16, '', '', 17, '', '', 18, '', '', 19, '', '', 20, '', '', 21, '', '', 22, '', '', 23, '', '', 24, '', '', 25, '', '', 26, '', '', 27],
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
            max: boatseries.length + 0.5,
            labels: {
                formatter: function(){
                    c = this.chart;
                    v = this.value;
                    for (var i = boatseries.length - 1; i >= 0; i--) {
                        if (boatseries[i].data[0] == v || boatseries[i].data[0].y == v) {
                            return '' + boatseries[i].name + ' - <strong>' + position_string(v) + '</strong>';
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
                    for (var i = 0; i < boatseries.length; i++) {
                        if (boatseries[i].data[boatseries[i].data.length-1] == v || boatseries[i].data[boatseries[i].data.length-1].y == v) {
                            return '<strong>' + position_string(v) + '</strong> - '  + boatseries[i].name;
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
        series: boatseries
    });
    $('.highcharts-container svg text:last').remove();
});