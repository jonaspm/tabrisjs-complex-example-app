// Create a new page
var page = new tabris.Page({
	id: 'index_page',
	topLevel: true
});

// Create a text view and add it to the page
var textView = new tabris.TextView({
	id: 'description_txt',
	layoutData: {centerX: 0, top: 50},
	font: '20px',
	alignment: 'center',
	markupEnabled: true
}).appendTo(page);

var textInput = new tabris.TextInput({
	id: 'input_txt',
	centerX:0,
	top: [textView, 50]
}).appendTo(page);

// Create a push button and add it too
var button = new tabris.Button({
	id: 'main_btn',
	top: [textInput, 10],
	centerX:0
}).appendTo(page);

// Change the text view's text when the button is pressed
button.on('select', function() {
	var value = textInput.get('text');
	textView.set('text', value);
});

new tabris.ImageView({
  right: 16, bottom: 16, width: 56, height: 56,
  elevation: 6,
  cornerRadius: 28,
  highlightOnTouch: true,
  background: '#009688',
  image: {
	  src: 'icons/fa-plus.png',
	  width: 24,
	  height: 24
  }
}).on('touchstart', function (imageView) {
  imageView.animate({transform: {translationZ: 6}}, {duration: 100, easing: "ease-out"});
}).on('touchend', function (imageView) {
  imageView.animate({transform: {translationZ: 0}}, {duration: 100, easing: "ease-out"});
}).on('tap',function () {
	var reportPage = require('./another_page.js');
	reportPage().open();
}).appendTo(page);

module.exports = page;
