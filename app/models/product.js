import DS from 'ember-data';

export default DS.Model.extend({
	company: DS.belongsTo('company'),
	title: DS.attr('string'),
  	manufacturer: DS.attr('string'),
  	form_factor: DS.attr('string'),
  	material: DS.attr('string'),
  	volume: DS.attr('integer')
});
