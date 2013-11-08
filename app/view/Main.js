Ext.define('Sencha.view.Main', {
    extend: 'Ext.TabPanel',
    requires: [
        'Ext.util.Geolocation',
        'Sencha.view.Home',
        'Sencha.view.MapaForTest',
		'Sencha.view.Lista'
		
    ],

    config: {
        tabBar: {
            docked: 'bottom',
            layout: {
                pack: 'center'
            }
        },
        items: [
            { xtype: 'homecard'},
			{ xtype: 'listapoints'},
            { xtype: 'mapkaTest'}
  
        ]
    }
});
