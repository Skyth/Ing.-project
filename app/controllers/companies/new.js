import Ember from 'ember';

export default Ember.Controller.extend({
actions: {
    add_new: function() {
        var _this = this;
        var ids = [1];
        var company = _this.model;
        company.set('users', ids);
        company.save().then(function(){
        _this.set('title','');
        _this.set('address','');
        _this.set('ogrn','');
        _this.set('inn','');
        _this.set('kpp','');
        _this.set('paymentAccount','');
        _this.set('correctionalAccount','');
        _this.set('bankName','');
        _this.set('bankBik','');
        _this.set('username','');
        _this.set('email','');
        _this.transitionToRoute('companies');
        });
      } 
    }
});
