App.Router.map(function () {
//    this.route("devices", { path: "/devices" });
  this.resource('devices', function(){
    this.resource('device', { path: '/:device_id' }, function(){
      this.route('edit');
    });
    this.route('create');
  });

  this.resource('users', function(){
    this.resource('user', { path: '/:user_id' }, function(){
      this.route('edit');
    });
    this.route('create');
  });
});
