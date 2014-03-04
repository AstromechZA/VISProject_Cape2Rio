var CanvasOverlay = function(map, width, height) {
    this.width = width;
    this.height = height;
    this.canvas           = document.createElement("CANVAS");
    this.canvas.className = "GMAPS_OVERLAY";
    this.canvas.height    = this.height;
    this.canvas.width     = this.width;
    this.ctx              = null;
    this.map              = map;

    this.setMap(map);
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
    this.canvas.style.left = (centerPoint.x - this.width  / 2) + "px";
    this.canvas.style.top  = (centerPoint.y - this.height / 2) + "px";

    // Clear Canvas
    this.ctx.clearRect(0, 0, this.width, this.height);

    // Draw Grid
    this.ctx.strokeStyle = "#000000";

    for (var lng = -180; lng < 180; lng += 1)
    {
        for (var lat = -90; lat < 90; lat += 1) {

            var p = projection.fromLatLngToContainerPixel(new google.maps.LatLng(lat, lng));
            if (p.x>-3 && p.y > -3 && p.x < this.width && p.y < this.height) {
                this.ctx.beginPath();
                this.ctx.arc(p.x,p.y,3,0,2*Math.PI);
                this.ctx.fill();
            }
        };
    }
};

CanvasOverlay.prototype.draw = function() {
    this.canvasDraw();
}