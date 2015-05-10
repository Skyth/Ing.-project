import DRFAdapter from 'ember-django-adapter/adapters/drf';

export default DRFAdapter.extend({
  buildURL: function (type, id, record) {
    return '/companies/' + record.get('company.id') + '/products/' + id;
  }
});