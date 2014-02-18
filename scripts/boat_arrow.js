
var BoatArrow = function _BoatArrow(cll, b, s, cs) {
    this.center = cll;
    this.bearing = b;
    this.size = s;
    this.color_str = cs;
    this._o = null;
    this._map = null;
    this.reconstruct();
}

BoatArrow.prototype.reconstruct = function() {

    var wingangle = Math.PI * 0.75;
    var s_maj = this.size;
    var s_min = this.size * 0.8;

    var Ps = new google.maps.LatLng(
        this.center.d + s_maj*Math.cos(this.bearing),
        this.center.e + s_maj*Math.sin(this.bearing)
    );

    var Pt1 = new google.maps.LatLng(
        this.center.d + s_min*Math.cos(this.bearing + wingangle),
        this.center.e + s_min*Math.sin(this.bearing + wingangle)
    );

    var Pt2 = new google.maps.LatLng(
        this.center.d + s_min*Math.cos(this.bearing - wingangle),
        this.center.e + s_min*Math.sin(this.bearing - wingangle)
    );

    this.hide();

    this._o = new google.maps.Polygon({
        path: [Ps, Pt1, this.center, Pt2, Ps],
        fillColor: this.color_str,
        fillOpacity: 0.8,
        strokeWeight: 0
    });

    this.show();
}

BoatArrow.prototype.setMap = function(m) {
    this._map = m;
}

BoatArrow.prototype.setCenter = function(c) {
    this.center = c;
    this.reconstruct();
}

BoatArrow.prototype.setBearing = function(b) {
    this.bearing = b * (Math.PI/180.0);
    this.reconstruct();
}

BoatArrow.prototype.hide = function() {
    if(this._o != null) this._o.setMap(null);
}

BoatArrow.prototype.show = function() {
    if(this._map != null) this._o.setMap(this._map);
}