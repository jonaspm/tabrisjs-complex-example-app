var language = require('./lang_select.js');

var page = new tabris.Page({
	id: 'settings_page',
	background: 'white',
	topLevel: true
});

new tabris.Picker(
	{id: 'lang_picker',
	 layoutData: {left: 10, top: 10, right: 10},
	 itemText: function(lang) {
		 return lang.name;
	 }
	})
	.on('change:selection', function (widget, selection, options) {
		if (options.index > 0) {
/*			window.plugins.toast.showShortCenter(
				language.texts["#settings_toast"].text
			);
*/
			language.setLang(selection.id);
			this.set("selectionIndex", 0);
			tabris.app.reload();
		}
	}).appendTo(page);

module.exports = page;
