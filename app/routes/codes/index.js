import Ember from 'ember';

export default Ember.Route.extend({
	beforeModel: function() {
		this.store.find('code');
	},
	model: function() {
		var temp = this.modelFor('consignments/show');
		var Store = this.store;
		return Store.find('code', { page: 1 }).then(function (){
			return Store.filter('code', function (code){ 
				return code.get('consignment') === temp.get('id'); 
			});
		});
	}
});