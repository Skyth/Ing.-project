import Ember from 'ember';

export default Ember.Route.extend ({
	resetController: function(controller) {
		var company = controller.get('model');
		if (company.get('isDirty')){
			company.rollback();
		}
	}
});