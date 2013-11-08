Ext.define('Sencha.view.ShowMapa', {
    extend: 'Ext.Panel',
    requires:'Ext.Map',
	//xtype: 'mapapokazu',
	alias: 'widget.showmapa',
	
  config:{
        layout:{
           type:'fit'
       },
        items:[
            {
                xtype:'toolbar',
                docked:'top',
                title:'Lokalizacja',
			      items: [
                    {
                        xtype: 'button',
                        ui: 'back',
                        itemId: 'powrotButton',
                        text: 'Powrót'
                    },
                    {
                        xtype: 'spacer'
                    }
                   
                    ]
			   
			   
			   
            }
		]
	
	},
	 initialize: function() {  //from code of Loutilities
        this.callParent();

        var map = {
            xtype: 'map',
            id: 'petMap',
            itemId: 'petMap',
            styleHtmlContent: true,
            mapOptions: {
                zoom: 10,
                zoomControl: true
                   // center: new google.maps.LatLng(33.143, -117.221)
            },
            plugins: [
                new Ext.plugin.google.Tracker({
                    trackSuspended: false,
                    allowHighAccuracy: true,
                    marker: new google.maps.Marker({
                        title: 'Aktualna lokalizacja', 
                        icon: 'batery3.png'
                    })
                })
               //,new Ext.plugin.google.Traffic()  //Adds traffic
            ],
            listeners: [
                {
					scope: this,
                    maprender: this.onMapRender
                }
            ]
        };
        this.add([map]);
    },
	onMapRender: function (map, gmap, eOpts) {
        this.fireEvent("mapRender", map, gmap, eOpts);
    }
	
    
    
});
