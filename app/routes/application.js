import Ember from 'ember';
import ApplicationRouteMixin from 'simple-auth/mixins/application-route-mixin';

export default Ember.Route.extend(ApplicationRouteMixin, {
	beforeModel: function() {
		if (this.session.isAuthenticated){
			this.controllerFor('session').setUserName();
			this.transitionTo("companies");
		}
		else {
			this.transitionTo("login");
		}
	}
});