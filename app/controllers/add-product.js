import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
		new_product: function(){
			var product = this.store.createRecord('product',{
				title: this.get('title'),
				manufacturer: this.get('manufacturer'),
				form_factor: this.get('form'),
				material: this.get('material'),
				volume: this.get('volume')
			});
		this.set('title','');
		this.set('manufacturer','');
		this.set('form','');
		this.set('material','');
		this.set('volume','');
		product.save();
		this.transitionToRoute('company');
		}
	}
});
