import Ember from 'ember';

export default Ember.Controller.extend({
actions: {
    add_new: function() {
       var user1 = this.store.createRecord('user',{
        username: this.get('username'),
      	email: this.get('email'),
        password: this.get('password'),
        groups: ''
      });
      // var user = this.store.getById('user', 1);
      // var ids = user.get('id');
      var _this = this;

      user1.save().then(function(user1){     
        var ids = [1, user1.get('id')];
        var company = _this.model;
        company.set('users', ids);
        company.save();
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
