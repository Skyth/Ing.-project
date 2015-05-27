import Ember from 'ember';

export default Ember.Controller.extend({
	needs: ['session'],
	products: Ember.computed.map('model.products', item => item),
	name: Ember.computed.alias('controllers.session.name'),
	mail: Ember.computed.alias('controllers.session.mail'),
	actions: {
		goToLink: function (product) {
			this.transitionToRoute('consignments', product); 
		}
	}
});