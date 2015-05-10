// import DS from 'ember-data';
import DRFAdapter from 'ember-django-adapter/adapters/drf';

export default DRFAdapter.extend({
	host: 'http://admin.ingida.ru:80',
	namespace: 'api'
});
