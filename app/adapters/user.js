import DRFAdapter from 'ember-django-adapter/adapters/drf';

export default DRFAdapter.extend({
	host: 'http://admin.ingida.ru:80', 
	namespace: 'api',
	updateRecord: function(store, type, snapshot) {
		var data = {};
		var serializer = store.serializerFor(type.typeKey);
		serializer.serializeIntoHash(data, type, snapshot);
		var id = snapshot.id;
		var url = this.buildURL(type.typeKey, id, snapshot, 'updateRecord');
		delete data["password"];
		return this.ajax(url, "PATCH", { data: data });
	}

});
