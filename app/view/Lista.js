Ext.define('Sencha.view.Lista', {
    extend: 'Ext.Panel',
    xtype: 'listapoints',
	
  config:{
  
        iconCls: 'search',
        title: 'lista',
        layout:{
           type:'fit'
       },
        items:[
            {
                xtype:'toolbar',
                docked:'top',
               // title:'Lista'
			            items: [
                        { xtype: 'spacer' },
                        {
                            xtype: 'searchfield',
                            placeHolder: 'Szukaj ulica, miasto...',
							width: '230px'
						       
                            
                        },
                        { xtype: 'spacer' }
                    ],
			   
			   
			   
            },
			{
			  // xtype:'button',
			  // text: 'sds',
// color zielony #14AC11 a niebieski font color="#0AAFFC" 
			    xtype: 'list',
				ui: 'round',
				store: 'Magazyn',
				id: 'listalokalizacji',
				itemId: 'listaID',
				itemTpl:[
                    '<div><ul><li><font face="Georgia">{ulica}, {miasto}</font></li> <font color="#909499" size="2"> Współrzędne geograficzne ( {y} , {x} )</font></div></div>'
                ]
			}
    ],
	listeners:
	       [
				{
                fn:'onListaTap',
                event:'itemtap',
                delegate:'#listaID'
            }
		   ]
	
	
	},
	onListaTap: function (dataview, index, target, record, e, options) {
        console.log('sdfsd pochodzi z onListaTap - Lista.js');
		console.log(record.get('miasto'));
		console.log(record.data);
		//this.up('#listalokalizacji').fireEvent('petSelectCommand', this, record);
			this.fireEvent('startSelektList', this,record);
		
    },/*
	initialize: function() {
        this.on({
            scope: this,
            delegate: 'list',
            itemtap: 'onKlika',
			
        });
    },
	onKlika: function(dataview, index, target, record, e, options)
	{
	//console.log('Działa klikaj lista a record '+(record.get('miasto')));
	this.fireEvent('startSelektList', this, record);
	}*/
	// poniżej funkcja wyszukuje nazwy z listy lokalizacji
	initialize: function() {
        this.on({
            scope: this,
            delegate: 'searchfield',
            keyup: 'onSearchKeyUp',
			clearicontap: 'onSearchClearIconTap'
        });
    },
	 onSearchKeyUp: function(field) {
        console.log("Test wyszukaj");
		 var value = field.getValue(),
            store = Ext.data.StoreManager.lookup('Magazyn');

        store.clearFilter();

       
        if (value) {
            
            var searches = value.split(' '),
                regexps = [],
                i;

            //loop them all
            for (i = 0; i < searches.length; i++) {
                //if it is nothing, continue
                if (!searches[i]) continue;

                //if found, create a new regular expression which is case insenstive
                regexps.push(new RegExp(searches[i], 'i'));
            }

            //now filter the store by passing a method
            //the passed method will be called for each record in the store
            store.filter(function(record) {
                var matched = [];

                //loop through each of the regular expressions
                for (i = 0; i < regexps.length; i++) {
                    var search = regexps[i],
                        didMatch = record.get('miasto').match(search) || record.get('ulica').match(search);

                    //if it matched the first or last name, push it into the matches array
                    matched.push(didMatch);
                }

                //if nothing was found, return false (dont so in the store)
                if (regexps.length > 1 && matched.indexOf(false) != -1) {
                    return false;
                } else {
                    //else true true (show in the store)
                    return matched[0];
                }
            });
        }
		
       
    }, //koniec funkcji onSearchKeyUP
	onSearchClearIconTap: function()
	{
	 //store = Ext.data.StoreManager.lookup('Magazyn');
	//this.getStore().clearFilter();
	}
	
    
    
});
