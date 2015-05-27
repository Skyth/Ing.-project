import Ember from 'ember';

export default Ember.Controller.extend({
	name: null,
	mail: null,
	is_admin: null,
	setUserName: function(username) {
			this.set('name', username);
	},
	setUserMail: function(mail) {
			this.set('mail', mail);
	},
	setUserAdmin: function(admin) {
			this.set('is_admin', admin);
	}
});