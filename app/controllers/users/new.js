import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
			add_user: function() {
		       	var user1 = this.store.createRecord('user',{
		        username: this.get('username'),
		      	email: this.get('email'),
		        password: this.get('password')
	      		});
	      		user1.save();
	        	this.set('username','');
	        	this.set('email','');
	        	this.set('password','');
	        	this.transitionToRoute('users');
				},
			cancel: function() {
				this.set('username','');
	        	this.set('email','');
	        	this.set('password','');
	        	this.transitionToRoute('users');
			}
		}		
});	