import Ember from 'ember';

export default Ember.Controller.extend({
	needs: ['session'],
  	userName: Ember.computed.alias('controllers.session.user')
});
