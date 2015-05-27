import Ember from 'ember';

export default Ember.Controller.extend({
	needs: ['session'],
	admin: Ember.computed.alias('controllers.session.is_admin'),
	actions: {
		invalidateSession: function() {
			this.store.unloadAll('company');
			this.get('session').invalidate();
			this.transitionTo('login');
		}
	}
});