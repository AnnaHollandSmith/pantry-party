$(function ()
{
	list.init();
});

var list = {
	init: function ()
	{
		list.config = {
			main: $('body'),
			worksurface: $('#worksurface > .list'),
		};
		list.config.main.on('click', '.available a:not(.added)', list.addItem);
		list.config.main.on('click', '.available a.added', list.removeItem);
		list.config.worksurface.on('click', 'a', list.removeItem);
		list.addedItems = {};
		list.originalItems = {};
	},
	addItem: function ()
	{
		var newItem = $(this).clone();
		list.config.worksurface.append(newItem);
		$(this).addClass('added');
		list.originalItems[$(this).html()] = $(this);
		list.addedItems[$(this).html()] = newItem;
	},
	removeItem: function ()
	{
		list.originalItems[$(this).html()].removeClass('added');
		list.addedItems[$(this).html()].remove();
	}
};

WebFontConfig = {
    google: { families: [ 'Indie+Flower::latin' ] }
  };
  (function() {
    var wf = document.createElement('script');
    wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
      '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
    wf.type = 'text/javascript';
    wf.async = 'true';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(wf, s);
  })(); 