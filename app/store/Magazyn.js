Ext.define('Sencha.store.Magazyn', {
    extend: 'Ext.data.Store',
    requires: [
        'Sencha.model.Elementy'
    ],
	
	
	config: {
			
		autoLoad: true,
        model: 'Sencha.model.Elementy',
	    storeID: 'Magazyn',
		 sorters: 'miasto',
		proxy: {
            type: 'ajax', //'jsonp' to dla strony wwww,
            url: 'listabat.json', //'http://nodetest-loutilities.rhcloud.com/dogtag',
            reader: {
                type: 'json',
                //idProperty: '_id',
                //rootProperty: 'records',
                useSimpleAccessors: true
            }
        }
	
	}
   
});
