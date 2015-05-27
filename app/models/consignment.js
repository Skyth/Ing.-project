import DS from 'ember-data';

export default DS.Model.extend({
	code_archive: DS.attr('string'),
	xlsx_name: DS.attr('string'),
});	