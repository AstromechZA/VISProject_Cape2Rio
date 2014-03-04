var YachtTrack = function _YachtTrack(yacht, map) {
    this.map = map
    this.yacht = yacht
    this.points = []

    // -----
    var points = yacht._dataset.points

    var pl = points.length

    for (var i = 1; i < pl; i++) {
        var temp = points[i]
        var last = points[i-1]
        var time = temp[0]
        var distance = temp[3]
        var marker = new google.maps.Polyline({
            path: [
                new google.maps.LatLng(temp[1][0], temp[1][1]),
                new google.maps.LatLng(last[1][0], last[1][1])
            ],
            position: new google.maps.LatLng(temp[1][0], temp[1][1]),
            geodesic: true,
              strokeOpacity: 0.7,
              strokeColor: yacht._dataset.colour_string,
              strokeWeight: 2,//distance/4,
            map: map,
            visible: true
        })
        var bearing = temp[2]
        this.points.push([time, marker, bearing, distance])
    }

    // -----
    this.points[0][1].setVisible(true)

    this.arrow = new YachtArrow(this.points[this.points.length-1][1].position, this.points[this.points.length-1][2], 0.7, yacht.colour)
    this.arrow.setMap(map)
    this.arrow.show()
}

YachtTrack.prototype.setProgress = function(time) {

    var last = this.points[0]
    var pl = this.points.length
    var b, p;
    for (var i = 0; i < pl; i++) {
        p = this.points[i]
        b = (p[0] <= time);
        p[1].setVisible(b)
        if(b) last = p
    };

    this.arrow.setCenter(last[1].position)
    this.arrow.setBearing(last[2])


}
