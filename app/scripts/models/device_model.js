/*global Ember*/
App.Device = DS.Model.extend({
    name: DS.attr('string'),

    make: DS.attr('string'),

    model: DS.attr('string'),

    imei: DS.attr('string'),

    userId: DS.attr('string'),

    Id: DS.attr('string')
});

// probably should be mixed-in...
App.Device.reopen({
  attributes: function(){
    var model = this;
    return Ember.keys(this.get('data')).map(function(key){
      return Em.Object.create({ model: model, key: key, valueBinding: 'model.' + key });
    });
  }.property()
});

// delete below here if you do not want fixtures
App.Device.FIXTURES = [
  
  {
    id: 0,
    
    name: 'foo',
    
    make: 'foo',
    
    model: 'foo',
    
    imei: 'foo',
    
    user_id: 'foo',
    
    _id: 'foo'
    
  },
  
  {
    id: 1,
    
    name: 'foo',
    
    make: 'foo',
    
    model: 'foo',
    
    imei: 'foo',
    
    user_id: 'foo',
    
    _id: 'foo'
    
  }
  
];
