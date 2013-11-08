Ext.define('Sencha.controller.Zdarzenie', {
    extend: 'Ext.app.Controller',
	directionsDisplay: null,
    directionsService: null,

    config: {
	 stores: ['Magazyn'],
	 
	refs:	{
				listapoints: 'listapoints', //test ?
				zlistwa: 'listapoints',   // test ?
				showmapa: 'showmapa',
				
			},
	control:{
			/*	'listalocal list':
				         {
                          itemtap: 'select'
                         },*/
               zlistwa: {
                           startSelektList: 'onSelektList'
				        }
				
			}
            
    },
	launch: function() {
        // Initialize Google Map Services
        this.directionsDisplay = new google.maps.DirectionsRenderer();
        this.directionsService = new google.maps.DirectionsService();

        var mapRendererOptions = {
            //draggable: true,  //Allows to drag route
            //hideRouteList: true,
            suppressMarkers: true
        };

        this.directionsDisplay.setOptions(mapRendererOptions);
    },
	 slideLeftTransition: { type: 'slide', direction: 'left' },
	 
	onSelektList: function(list, record)
	{
	console.log('Z zdarzenia i działa');
	    var mapView = this.getShowmapa();   // is here problem, becouse is undefined       
		mapView.setRecord(record);		// is here error becouse "Uncaught TypeError: Cannot call method 'setRecord' of undefined" 
		
		//var testuje = this.getMojamapa();
		//console.log(testuje);
		//console.log(record.data);  
		console.log('mapViewsetRecord = '+mapView);   
       Ext.Viewport.animateActiveItem(mapView, this.slideLeftTransition);
	
	
	
	}
	 
	/* select: function(list, record)
						{ 
						 console.log('test '+(record.data));
						 //console.log('rekord '+(record.fullName()));
						 //Ext.Viewport.animateActiveItem({xtype:'mapapokazu'}, {type:'slide'});
						var mapView = this.getMapapokazu();
						console.log('petmapek = '+mapView);
						//mapView.setRecord(record);
						Ext.Viewport.animateActiveItem('mapapokazu',this.slideLeftTransition);
						}*/
});
