import Ember from 'ember';

export default Ember.Controller.extend({
  temp: false,
  actions: {
    goToLink: function (company) {
      this.transitionToRoute('products', company); 
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