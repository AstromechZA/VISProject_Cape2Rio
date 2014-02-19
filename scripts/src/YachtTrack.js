var YachtTrack = function _YachtTrack(yacht, map) {
    this.yacht = yacht
    this.points = []

    // -----
    var points = yacht._dataset.points

    var pl = points.length

    for (var i = 0; i < pl; i++) {
        var temp = points[i]
        var time = temp[0]
        var distance = temp[3]
        var marker = new google.maps.Circle({
            center: new google.maps.LatLng(temp[1][0], temp[1][1]),
            radius: 4000 + distance * 700,
            strokeWeight: 0,
            fillColor: yacht.colour,
            fillOpacity: 0.8,
            map: map,
            visible: false
        })
        var bearing = temp[2]
        this.points.push([time, marker, bearing, distance])
    }

    // -----
    this.points[0][1].setVisible(true)

    this.arrow = new YachtArrow(this.points[0][1].center, this.points[0][2], 0.7, yacht.colour)
    this.arrow.setMap(map)
    this.arrow.show()
}

YachtTrack.prototype.setProgress = function(time) {
    var last = this.points[0]
    var pl = this.points.length
    for (var i = 0; i < pl; i++) {
        var p = this.points[i]
        b = (p[0] <= time);
        p[1].setVisible(b)
        if(b) last = p
    };

    this.arrow.hide()
    this.arrow.setCenter(last[1].center)
    this.arrow.setBearing(last[2])
    this.arrow.show()

}
