App.DevicesRoute = Ember.Route.extend({
  model: function (params) {
//    return {"name":"Apple"};
    console.log('devices route ' + params);
    console.log(this.get('store').find('device'));
    window.ourStore = this.get('store').find('device');

    return this.get('store').find('device');
  }
});

