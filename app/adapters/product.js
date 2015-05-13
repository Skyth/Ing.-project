import DRFAdapter from 'ember-django-adapter/adapters/drf';

export default DRFAdapter.extend({
host: 'http://admin.ingida.ru:80',
namespace: 'api',
  buildURL: function (type, id, record) {
    return 'http://admin.ingida.ru:80/api/companies/' + record.get('company.id') + '/products/' + id;
  }
});
