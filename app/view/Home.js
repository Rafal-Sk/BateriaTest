Ext.define('Sencha.view.Home', {
    extend: 'Ext.TabPanel',
    xtype: 'homecard',

    config: {
        iconCls: 'home',
        title: 'home',
        defaults: {
            styleHtmlContent: true
        },
        items: [{
            title: 'TabPanels',
            scrollable: 'vertical',
            html: '<p>Lorem ipsum sit dolor amet.</p><br> \
			<h1>Baterie</h1>\
			<img src="battery.png" alt="bateria" title="bateria" />'
        },{
            title: 'Toolbars',
            scrollable: 'vertical',
            html: '<p>Rafa sdsadas testowa aplikacja Lorem ispum sit dolor amet.</p>'
        }]
    }
});
