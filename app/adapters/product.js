export default ApplicationAdapter.extend({

buildURL: function(type, id, record) {
return '/companies/' + record.get('company.id') + '/products/' + id;
}
})