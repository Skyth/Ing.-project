import DS from 'ember-data';

export default DS.Model.extend({
	//company: DS.belongsTo('company'),
	username: DS.attr('string'),
	email: DS.attr('string'),
	groups: DS.attr('string'),
	password: DS.attr('string')
});
