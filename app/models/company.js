import DS from 'ember-data';

export default DS.Model.extend ( {
	title: DS.attr('string'),
	products: DS.hasMany('product', {async: true}),
	users: DS.hasMany('user', {async: true}),
	address: DS.attr('string'),
	ogrn: DS.attr('string'),
	kpp: DS.attr('string'),
	inn: DS.attr('string'),
	paymentAccount: DS.attr('string'),
	correctionalAccount: DS.attr('string'),
	bankName: DS.attr('string'),
	bankBik: DS.attr('string')
});
