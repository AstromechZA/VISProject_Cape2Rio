var Boat = function _Boat(name, cls, handicap, colour) {
    this.boat_name = name;
    this.racing_class = cls;
    this.handicap = handicap;
    this.colour = colour;
    this._arrow = null;
    this._track = null;
}

Boat.prototype.load = function(dataset) {
    // data set is some array of data points
    this._track = new BoatTrack(dataset, this)

};




