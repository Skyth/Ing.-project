import Ember from 'ember';
import LoginControllerMixin from 'simple-auth/mixins/login-controller-mixin';

export default Ember.Controller.extend(LoginControllerMixin,{
	actions: {
		authenticate: function(){
			var credentials = this.getProperties('identification', 'password');
            this.get('session').authenticate('authenticator:custom', credentials);
            //this.transitionToRoute('companies');
		}
	}
});
