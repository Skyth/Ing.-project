import Ember from 'ember';
import ApplicationRouteMixin from 'simple-auth/mixins/application-route-mixin';

export default Ember.Route.extend(ApplicationRouteMixin,{
	actions: {
		sessionAuthenticationSucceeded: function () {
			var tmp = this;
			Ember.$.ajax({
				url: 'http://admin.ingida.ru:80/api/me',
				type: 'GET',
			})
			.done(function(reply) {
				tmp.controllerFor('session').setUserName(reply.results[0].username);
				tmp.controllerFor('session').setUserMail(reply.results[0].email);
				tmp.controllerFor('session').setUserAdmin(reply.results[0].is_superuser);
				tmp.transitionTo('profile');
			});
		}
	}
});