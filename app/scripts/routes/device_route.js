App.DeviceRoute = Ember.Route.extend({
  model: function(params) {
    window.theStore = this.get('store').find('device', params.device_id);
    console.log(this.get('store').find('device', params.device_id));
    return this.get('store').find('device', params.device_id);
  }

});

