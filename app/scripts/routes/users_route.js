App.UsersRoute = Ember.Route.extend({
  model: function(params) {
    console.log('users route ' + params);
    console.log(this.get('store').find('user'));
    window.ourStore = this.get('store').find('user');
    return this.get('store').find('user');
  }
});

