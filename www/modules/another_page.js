module.exports = function () {

	var page = new tabris.Page({
		id: 'another_page',
		topLevel: false
	});

	var scrollView = new tabris.ScrollView({
		left: 0,
		top: 0,
		right: 0,
		bottom: 0
	}).appendTo(page);

	new tabris.TextView({
		id: 'q1',
		left: 0, top: 0,
		font: '18px',
	}).appendTo(scrollView);

	new tabris.CheckBox({
		id: 'r1ck',
		left: 0, top: 'prev()',
		font: '18px',
		selection: true
	}).on('change:selection', function(widget, selection, opts) {
			tvR1lat.set('visible', selection);
			coordsWidget.set('visible', selection);
	}).appendTo(scrollView);

	var coordsWidget = new tabris.Composite({
		left: 0,
		top: 'prev()'
	}).appendTo(scrollView);

	var tvR1lat = new tabris.TextView({
		id: 'text_lat',
		left: 0, top: 'prev()',
		font: '18px'
	}).appendTo(coordsWidget);

	var latLabel = new tabris.TextView({
		left: 0, top: 'prev()',
		font: '18px',
		text: '0'
	}).appendTo(coordsWidget);

	var tvR1lon = new tabris.TextView({
		id: 'text_lon',
		left: 0, top: 'prev()',
		font: '18px'
	}).appendTo(coordsWidget);

	var lonLabel = new tabris.TextView({
		left: 0, top: 'prev()',
		font: '18px',
		text: '0'
	}).appendTo(coordsWidget);

	var button = new tabris.Button({
		id: 'open_map_btn',
		left: 0, top: 'prev()',
	}).on('select', function() {
		var mapPage = require('./map_page.js');
		mapPage().on('disappear', function() {
			var coords = this.children()[0].get('position');
			latLabel.set('text', coords[0]);
			lonLabel.set('text', coords[1]);
		}).open();
	}).appendTo(coordsWidget);

	page.apply(require('./lang_select.js').texts);

	return page;
};
