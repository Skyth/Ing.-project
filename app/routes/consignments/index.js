import Ember from 'ember';

export default Ember.Route.extend({
	model: function() {
		return this.store.find('consignment', {product_id: this.modelFor('profile/show').get('id')});
	}
});