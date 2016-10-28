module.exports = {
	get texts() {
		try {
			return require('../langs/' + this.getLang + '.json');
		} catch (ex) {
			return require('../langs/en.json')
		}
	},
	get getLang () {
		return localStorage.getItem("language") || tabris.device.get('language').replace(/-.*/, '');
	},
	setLang: function (lang) {
		try {
			return localStorage.setItem('language', lang);
		}
		catch (ex) {
			return TypeError(lang + " is not a valid string.");
		}
	}
};
