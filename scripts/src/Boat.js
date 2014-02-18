var Boat = function _Boat(dataset) {
    this._dataset = dataset
    this.boat_name = dataset.boat_name
    this.racing_class = dataset.race_class
    this.handicap = dataset.handicap
    this.colour = '#FF0000'
    this._track = null
}


Boat.prototype.add_track_to_map = function(map_obj) {
    this._track = new BoatTrack(this, map_obj)
}

Boat.prototype.update = function(t) {
    this._track.setProgress(t*3600)
}