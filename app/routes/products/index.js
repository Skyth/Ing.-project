import Ember from 'ember';

export default Ember.Route.extend({
	model: function() {
		return this.store.find('product', {company_id: this.modelFor('companies/show').get('id')});
	}	
});