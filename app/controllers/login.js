import Ember from 'ember';
import LoginControllerMixin from 'simple-auth/mixins/login-controller-mixin';

export default Ember.Controller.extend(LoginControllerMixin,{
	isValid: Ember.computed(
		'identification',
		'password',
		function () {
			return !Ember.isEmpty(this.get('identification')) &&
			!Ember.isEmpty(this.get('password'));
		}
	),
	actions: {
		authenticate: function (){
			Ember.$.cookie("csrftoken", null, { path: '/' });
			Ember.$.cookie("sessionid", null, { path: '/' });
			if (this.get('isValid')) {
				var credentials = this.getProperties('identification', 'password');
				this.get('session').authenticate('authenticator:custom', credentials);
			}
		}
	}
});