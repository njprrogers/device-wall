App.DeviceEditController = Ember.ObjectController.extend({
  needs: 'device',
  actions: {
    save: function(){
      var self = this;
      console.log(this.get('model'));
//      this.get('buffer').forEach(function(attr){
//        self.get('controllers.device.model').set(attr.key, attr.value);
//      });
      var deviceModel = this.get('model');
      this.get('model').save();
      this.transitionToRoute('device',this.get('model'));
    }
  }
});

