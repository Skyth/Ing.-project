import Ember from 'ember';

import ApplicationRouteMixin from 'simple-auth/mixins/application-route-mixin';

export default Ember.Route.extend(ApplicationRouteMixin,{
	actions: {
		sessionAuthenticationSucceeded: function () {
			Ember.$.cookie('username', this.controller.getProperties('identification')["identification"], { expires: 7 });
			this.controllerFor('session').setUserName();
			this.transitionTo('companies');
		},
		invalidateSession: function() {
			this.get('session').invalidate();
			Ember.$.removeCookie('username');
		}
	}
});