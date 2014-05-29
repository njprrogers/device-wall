App.DeviceEditRoute = Ember.Route.extend({
  model: function(params) {
    console.log(params);
    return this.get('store').find('device', this.modelFor('device').id);
  }
});

