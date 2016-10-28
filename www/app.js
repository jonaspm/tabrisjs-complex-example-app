var language = require('./modules/lang_select.js');
[
	'./modules/index_page.js',
	'./modules/settings_page.js'

].forEach(function(page) {
	require(page).apply(language.texts);
});

new tabris.Drawer().append(new tabris.PageSelector());

tabris.ui.children('#index_page')[0].open();
