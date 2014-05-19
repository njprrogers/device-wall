App.DevicesIndexRoute = Ember.Route.extend({
  model: function() {
//    return {"name":"Apple"};
    return this.get('store').find('device');
  }
});

