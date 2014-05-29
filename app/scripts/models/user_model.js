/*global Ember*/
App.User = DS.Model.extend({
    name: DS.attr('string'),

    email: DS.attr('string'),

    devices: DS.hasMany('device'),

    _id: DS.attr('string')

});
App.UserAdapter = DS.RESTAdapter.extend({
    namespace: 'api',
    host: 'http://localhost:3000'
});


// probably should be mixed-in...
//App.User.reopen({
//  attributes: function(){
//    var model = this;
//    return Ember.keys(this.get('data')).map(function(key){
//      return Em.Object.create({ model: model, key: key, valueBinding: 'model.' + key });
//    });
//  }.property()
//});
//
////// delete below here if you do not want fixtures
//App.User.FIXTURES = [
//
//  {
//    id: 0,
//
//    name: 'foo',
//
//    email: 'foo',
//
//    devices: 'foo',
//
//    _id: 'foo'
//
//  },
//
//  {
//    id: 1,
//
//    name: 'foo',
//
//    email: 'foo',
//
//    devices: 'foo',
//
//    _id: 'foo'
//
//  }
//
//];
