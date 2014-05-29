App.DeviceCreateRoute = Ember.Route.extend({
  model: function(params) {
    console.log(params);
    alert('ere')
    return this.get('store').find('device');
//    return this.get('store').find('device', this.modelFor('device').id);
  }
});

