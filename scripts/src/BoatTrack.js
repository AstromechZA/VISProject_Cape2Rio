var BoatTrack = function _BoatTrack(boat, map) {
    this.boat = boat
    this.points = []

    // -----
    var points = boat._dataset.points

    var pl = points.length

    for (var i = 0; i < pl; i++) {
        var temp = points[i]
        var time = temp[0]
        var marker = new google.maps.Circle({
            center: new google.maps.LatLng(temp[1][0], temp[1][1]),
            radius: 5000,
            strokeWeight: 0,
            fillColor: boat.colour,
            fillOpacity: 0.8,
            map: map,
            visible: false
        })
        var bearing = temp[2]
        this.points.push([time, marker, bearing])
    }

    // -----
    this.points[0][1].setVisible(true)

    this.arrow = new BoatArrow(this.points[0][1].center, this.points[0][2], 0.7, boat.colour)
    this.arrow.setMap(map)
    this.arrow.show()
}

BoatTrack.prototype.setProgress = function(time) {
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
