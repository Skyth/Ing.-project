import Ember from 'ember';

export default Ember.Controller.extend({
	needs: ['session'],
  	userName: Ember.computed.alias('controllers.session.user'),
  	isAdmin: Ember.computed('userName', function() {
      return (this.get('userName') === 'victor' || this.get('userName') === 'admin');
    })
});
