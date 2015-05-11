import Ember from 'ember';

import ApplicationRouteMixin from 'simple-auth/mixins/application-route-mixin';

export default Ember.Route.extend(ApplicationRouteMixin,{
	actions: {
		sessionAuthenticationSucceeded: function () {
			this.transitionTo('companies');
		},
		invalidateSession: function() {
			this.get('session').invalidate();
		}
	}
});