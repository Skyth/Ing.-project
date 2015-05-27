import Ember from 'ember';

export default Ember.Controller.extend({
  temp: false,
  actions: {
    goToLink: function (company) {
      this.transitionToRoute('companies.show', company); 
    },
    confirm: function (company) {
      this.set('temp', company);
      this.set('isConfirmVisible',true);
    },
    proceed: function () {
      this.get('temp').destroyRecord();
      return false; 
    },
  }
});