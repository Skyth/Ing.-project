import Ember from 'ember';

export default Ember.Component.extend({
	actions: {
		toggleEditing: function() {
			this.toggleProperty('isEditing');
		}
	}
});
