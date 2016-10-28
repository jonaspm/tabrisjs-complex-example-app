module.exports = function () {

	var page = new tabris.Page({
		id: 'map_page',
		topLevel: false
	});

	var map = new esmaps.Map({
		left: 0, right: 0, top: 0, bottom: 0,
	}).on('ready', function() {
		this.set('showMyLocationButton', 'true');
		this.set('showMyLocation', 'true');
		this.moveToPosition([28.703709, -106.138853], 2000);
		this.on('longpress', function(widget, position) {
			this.addMarker(new esmaps.Marker({position: widget.get('position')}));
		})
	}).appendTo(page);

 new tabris.ImageView({
	layoutData: {centerX:0, centerY:0},
	image: {
		src: 'icons/fa-map-marker.png',
		width: 24,
		height: 24
	}
	}).appendTo(page);

	page.apply(require('./lang_select.js').texts);

	return page;
}
