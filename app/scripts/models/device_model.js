/*global Ember*/
App.Device = DS.Model.extend({
    name: DS.attr('string'),

    make: DS.attr('string'),

    type : DS.attr('string'),

    imei: DS.attr('string'),

    user_id: DS.attr('string'),

    _id: DS.attr('string'),

    user: DS.belongsTo('user')
});
App.DeviceAdapter = DS.RESTAdapter.extend({
  namespace: 'api',
  host: 'http://localhost:3000',
  updateRecord: function(store, type, record) {
    var data = {};
    var serializer = store.serializerFor(type.typeKey);

    serializer.serializeIntoHash(data, type, record);

    var id = Ember.get(record, 'id');

    return this.ajax(this.buildURL(type.typeKey, id), "POST", { data: data });
  }
});
// probably should be mixed-in...
//App.Device.reopen({
//  attributes: function(){
//    var model = this;
//    return Ember.keys(this.get('data')).map(function(key){
//      return Em.Object.create({ model: model, key: key, valueBinding: 'model.' + key });
//    });
//  }.property()
//});


