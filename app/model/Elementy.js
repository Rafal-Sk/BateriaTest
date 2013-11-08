Ext.define('Sencha.model.Elementy', {
    extend: 'Ext.data.Model',

  config: {
        fields: [
            {
                name: 'ulica'
            },
            {
                name: 'miasto'
            },
            {
                name: 'x',
                type: 'float'
            },
            {
                name: 'y',
                type: 'float'
            }
        ]
    }
});
