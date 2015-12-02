$(function ()
{
	list.init();
});

var list = {
	init: function ()
	{
		list.config = {
			main: $('#main'),
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
