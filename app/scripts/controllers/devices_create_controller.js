App.DevicesCreateController = Ember.ObjectController.extend({
  needs: 'device',
  actions: {
    save: function(){
      var self = this;
      console.log(this.get('model'));
      this.get('model').save();
      this.transitionToRoute('device',this.get('model'));
    }
  }
});

