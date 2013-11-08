Ext.define('Sencha.view.MapaForTest', {
    extend: 'Ext.Map',
    xtype: 'mapkaTest',
   requires: ['Ext.util.Geolocation'],
//layout: 'fit',
   // isMap: true,

    config: {
        iconCls: 'search',
        title: 'mapa test',
		useCurrentLocation: true,
      //baseCls: Ext.baseCSSPrefix + 'map',
      //useCurrentLocation: true,
	  
        
    listeners: {
          //  maprender : function(comp, map){
          //      new google.maps.Marker({
          //          position: new google.maps.LatLng(this._geo.getLatitude(), this._geo.getLongitude()),
          //          map: map
          //      });
          //  }
          
          maprender: function (comp, map) {

                var markersll = [
        ['Biskupice 1, Wieliczka', 49.9645708, 20.1195848],
		[	'Rynek 8, Maków Podhalański',49.730096,	19.677831	],
		[	'Zawadka 90, Wadowice'	,49.8827856,19.4939579],
		[	'Krużlowa 205, Krużlowa'	,49.6455984	,20.8700565	],
		[	'RABA NIŻNA 162, MSZANA DOLNA'	,49.6389965,20.0277758	],
		[	'Rynek 21, Mszana Dolona'	,49.6776488,20.0831932	],
		[	'Zagościniec 1, Kraków'	,	50.0975127,20.1240668	],
		[	'Mirtowa 2, Kraków'	,	49.9842663,19.9457707	],
		[	'Monte Cassino 31, Kraków'	,50.0463414, 19.9222579	],
		[	'Chabówka 274a, Chabówka'	,49.6238197	,	19.9518156	],
		[	'ul. Szopkarzy 8, Kraków'	,	50.0936362	,	19.931349	]
	
                ];

                var infowindow = new google.maps.InfoWindow();
                var marker, i, pos;
                var bounds = new google.maps.LatLngBounds();
                for (i = 0; i < markersll.length; i++) {

                    pos = new google.maps.LatLng(markersll[i][1], markersll[i][2]);
                    bounds.extend(pos);
                    marker = new google.maps.Marker({

                        position: pos,
                      animation: google.maps.Animation.BOUNCE,
                        icon: 'batery3.png',//'http://tinyurl.com/on3w9ds',
                        map: map,
                        title: ' ' +markersll[i][0],
						
                    });    

                    google.maps.event.addListener(marker, 'click', (function (marker, i) {
                        return function () {
                            infowindow.setContent(markersll[i][0]);
                            infowindow.open(map, marker);
                        }
                    })(marker, i));
                    map.fitBounds(bounds);
                }
            }
          
          
          
        }
    
      
     
    }// koniec config
    
    
    
    
    
    
    
    
    
    
    
});
