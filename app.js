Ext.application({
    name: 'Sencha',

    controllers: ['Zdarzenie'],
    views:  ['Main','ShowMapa'],
    stores: ['MoreCards','Magazyn'],
	model: ['Elementy'],

    launch: function() {
		
		Ext.Viewport.add({
            xclass: 'Sencha.view.Main'
        });
		
    }
});
