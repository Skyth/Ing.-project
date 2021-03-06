import Ember from 'ember';
// import ApplicationRouteMixin from 'simple-auth/mixins/application-route-mixin';

export default Ember.Route.extend({
	model: function() {
		return this.store.find('user', { page: 1 });
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
		},
		error: function(error) {
			if (error) {
				return this.transitionTo('error');
			}
			return true;
		}
	}
});