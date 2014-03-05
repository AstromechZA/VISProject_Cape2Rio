var Yacht = function _Yacht(dataset) {
    this._dataset = dataset
    this.yacht_name = dataset.yacht_name
    this.racing_class = dataset.race_class
    this.handicap = dataset.handicap
    this.colour = YachtColour.class_colour(0.7, dataset.race_class)  // dataset.colour_string
    this._track = null
}


Yacht.prototype.add_track_to_map = function(map_obj) {
    this._track = new YachtTrack(this, map_obj)
}

Yacht.prototype.update = function(t) {
    this._track.setProgress(t*3600)
}