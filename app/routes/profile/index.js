import Ember from 'ember';

export default Ember.Route.extend({

	model: function() {
		return this.store.find('company').then( function (items) {
			return items.get('firstObject');
		});
	},
	// afterModel(model) {
	// 	return model.get('products');
	// }
});