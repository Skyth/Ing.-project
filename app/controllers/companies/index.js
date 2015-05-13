import Ember from 'ember';

export default Ember.Controller.extend({
actions: {
    goToLink: function (company) {
      this.transitionToRoute('products', company); 
    },
    delete: function (company) {
      company.destroyRecord();
      return false; 
    },
  }
});