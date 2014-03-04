var global_rhumbline_path;

// rhumbline object
// activate via .setMap
global_rhumbline_path = new google.maps.Polyline({
    path: [
        new google.maps.LatLng(-23.051582, -43.081390),
        new google.maps.LatLng(-33.912276, 18.399475)
    ],
    geodesic: true,
    strokeColor: '#000000',
    strokeOpacity: 0.5,
    strokeWeight: 1
});


// main method
var init = function _init() {

    // create map
    global_map = new google.maps.Map($('#map-canvas')[0], {
        zoom: 4,
        center: new google.maps.LatLng(-28.767659, -13.909358),
        disableDefaultUI: true,
        minZoom: 2,
        maxZoom: 10
    });

    // add rhumbline
    global_rhumbline_path.setMap(global_map);

    var mapsize    = { width: 800, height: 600 };
    var mapElement = document.getElementById("map-canvas");

    mapElement.style.height = mapsize.height + "px";
    mapElement.style.width  = mapsize.width + "px";


    var CanvasOverlay = function(map) {
        this.canvas           = document.createElement("CANVAS");
        this.canvas.className = "GMAPS_OVERLAY";
        this.canvas.height    = mapsize.height;
        this.canvas.width     = mapsize.width;
        this.ctx              = null;
        this.map              = global_map;

        this.setMap(global_map);
    };
    CanvasOverlay.prototype = new google.maps.OverlayView();

    CanvasOverlay.prototype.onAdd = function() {
        this.getPanes().overlayLayer.appendChild(this.canvas);
        this.ctx = this.canvas.getContext("2d");
        this.canvasDraw();
    };

    CanvasOverlay.prototype.drawLine = function(p1, p2) {
        this.ctx.beginPath();
        this.ctx.moveTo( p1.x, p1.y );
        this.ctx.lineTo( p2.x, p2.y );
        this.ctx.closePath();
        this.ctx.stroke();
    };

    CanvasOverlay.prototype.canvasDraw = function() {
        var projection = this.getProjection();

        // Position Canvas
        var centerPoint = projection.fromLatLngToDivPixel(this.map.getCenter());
        this.canvas.style.left = (centerPoint.x - mapsize.width  / 2) + "px";
        this.canvas.style.top  = (centerPoint.y - mapsize.height / 2) + "px";

        // Clear Canvas
        this.ctx.clearRect(0, 0, mapsize.width, mapsize.height);

        // Draw Grid
        this.ctx.strokeStyle = "#000000";

        for (var lng = -180; lng < 180; lng += 0.5)
        {
          this.drawLine(
            projection.fromLatLngToContainerPixel(new google.maps.LatLng(-90, lng)),
            projection.fromLatLngToContainerPixel(new google.maps.LatLng( 90, lng))
          );
        }
    };

    var customMapCanvas = new CanvasOverlay(global_map);

    google.maps.event.addListener(global_map, "dragend", function() {
        customMapCanvas.canvasDraw();
    });

    /*
    google.maps.event.addListener(map, "zoom_changed", function() {
    customMapCanvas.canvasDraw();
    });
    */

    CanvasOverlay.prototype.draw = customMapCanvas.canvasDraw;


}

$(init)