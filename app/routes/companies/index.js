import Ember from 'ember';

export default Ember.Route.extend({
	model: function() {
		return this.store.find('company', { page: 1 });
	},
	afterModel: function() {
		if (!this.controllerFor('application').get('admin')) {
			this.transitionTo('error');
		}
	}
});