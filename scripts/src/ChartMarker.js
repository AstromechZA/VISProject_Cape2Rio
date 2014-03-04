ChartMarker = {}

ChartMarker.marker_flag = function _marker_flag(y) {
    return {y: y, marker: {symbol: 'url(./images/finishflag.png)', enabled: true}}
}

ChartMarker.marker_cross = function _marker_cross(y) {
    return {y: y, marker: {symbol: 'url(./images/redx.png)', enabled: true}}
}