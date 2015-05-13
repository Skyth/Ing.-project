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
		function () {
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
		edit_save: function () {
			if (this.get('isValid')) {
				var _this = this;
				this.get('model').save().then(function(company){
					_this.transitionToRoute('companies.show',company);
				});
			}
		return false;	
		},
		edit_cancel: function () {
			this.transitionToRoute('companies.show', this.get('model'));
			return false;
		},
		add_to_list: function() {
			var new_one = this.model.get('plus');
			var list = this.model.get('users');
			list.push(new_one);
			var _this = this;
				this.get('model').save().then(function(company){
					_this.transitionToRoute('companies.show',company);
				});
		},
		delete_from_list: function() {
			var minus_one = this.model.get('minus');
			var list = this.model.get('users');
			var del = parseInt(minus_one,10);
			var temp = Ember.$.inArray(del,list);
			if (temp === -1)
				{this.transitionToRoute('companies');}
			else {
				list.splice(temp,1);
			}
			var _this = this;
			this.get('model').save().then(function(company){
					_this.transitionToRoute('companies.show',company);
			});
		}
	}

});	
