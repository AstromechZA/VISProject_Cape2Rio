
// constructor
var YachtArrow = function _YachtArrow(cll, b, s, cs, t) {
    this.center = cll;
    this.bearing = b;
    this.size = s;
    this.color_str = cs;
    this._o = null;
    this._map = null;
    this._track = t
    this.reconstruct();
}

// rebuild geometry
YachtArrow.prototype.reconstruct = function() {

    var wingangle = Math.PI * 0.75;
    var s_maj = this.size;
    var s_min = this.size * 0.8;

    var Ps = new google.maps.LatLng(
        this.center.lat() + s_maj*Math.cos(this.bearing),
        this.center.lng() + s_maj*Math.sin(this.bearing)
    );

    var Pt1 = new google.maps.LatLng(
        this.center.lat() + s_min*Math.cos(this.bearing + wingangle),
        this.center.lng() + s_min*Math.sin(this.bearing + wingangle)
    );

    var Pt2 = new google.maps.LatLng(
        this.center.lat() + s_min*Math.cos(this.bearing - wingangle),
        this.center.lng() + s_min*Math.sin(this.bearing - wingangle)
    );

    this.hide();

    this._o = new google.maps.Polygon({
        path: [Ps, Pt1, this.center, Pt2, Ps],
        fillColor: this.color_str,
        fillOpacity: 0.8,
        strokeWeight: 1,
        strokeColor: '#000000',
        zIndex: 10,
        visible: true
    });

    this._o.__arrow = this

    google.maps.event.addListener(this._o, "mouseover", function(event) {
        global_map._yacht_tooltip.set('labelContent', this.__arrow._track.yacht.yacht_name)
        global_map._yacht_tooltip.setPosition(this.__arrow.center);
        global_map._yacht_tooltip.setVisible(true);
    });
    google.maps.event.addListener(this._o, "mouseout", function(event) {
        global_map._yacht_tooltip.setVisible(false);
    });

    this.show();
}

YachtArrow.prototype.setMap = function(m) {
    this._map = m;
}

YachtArrow.prototype.setCenter = function(c) {
    this.center = c;
    this.reconstruct();
}

YachtArrow.prototype.setBearing = function(b) {
    this.bearing = b * (Math.PI/180.0);
    this.reconstruct();
}

YachtArrow.prototype.hide = function() {
    if(this._o != null) this._o.setMap(null);
}

YachtArrow.prototype.show = function() {
    if(this._map != null) this._o.setMap(this._map);
}