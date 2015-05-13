import Ember from 'ember';
import ApplicationRouteMixin from 'simple-auth/mixins/application-route-mixin';

export default Ember.Route.extend({
	model: function() {
		return this.store.find('user', { page: 1 });
	},
	beforeModel: function(transition) {

    
    },
  	
	resetController: function(controller) {
		var users = controller.get('model');
		users.forEach(function(user){
			if (user.get('isDirty')){
				user.rollback();
			}
		});
	},
	actions: {
		delete: function(user) {
			user.destroyRecord();
			return false;
		}

	}

});