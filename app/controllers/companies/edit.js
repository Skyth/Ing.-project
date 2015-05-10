import Ember from 'ember';

export default Ember.Controller.extend({
	isValid: Ember.computed(
		'model.title',
		'model.address',
		'model.ogrn',
		'model.inn',
		'model.kpp',
		'model.correctionalAccount',
		'model.bankName',
		'model.bankBik',
		function(){
			return !Ember.isEmpty(this.get('model.title')) &&
			!Ember.isEmpty(this.get('model.address')) &&
			!Ember.isEmpty(this.get('model.ogrn')) &&
			!Ember.isEmpty(this.get('model.inn')) &&
			!Ember.isEmpty(this.get('model.kpp')) &&
			!Ember.isEmpty(this.get('model.correctionalAccount')) &&
			!Ember.isEmpty(this.get('model.bankBik')) &&
			!Ember.isEmpty(this.get('model.bankName')); 
		}
		),
	actions:{
		edit_save: function(){
			if (this.get('isValid')) {
				var _this = this;
				this.get('model').save().then(function(company){
					_this.transitionToRoute('companies.show',company);
				});
			} else {
				this.get('errorMessage', 'You have to fill all the fields');
			}
		return false;	
		},
		edit_cancel: function(){
			this.transitionToRoute('companies.show', this.get('model'));
			return false;
		}
	}

});	
