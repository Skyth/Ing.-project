import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
		save_edit: function(user){
				user.save();
		return false;	
		},
		cancel_edit: function(user){
			user.rollback();
			return false;
		}	
	}
});	