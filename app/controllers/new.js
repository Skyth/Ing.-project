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
      var user = this.store.getById('user', 1);
      var ids = user.get('id');
      var _this =this;

      user1.save().then(function(user1){     
      ids = [ids, user1.get('id')];
      var company = _this.store.createRecord('company',{
        users: ids,
        title: _this.get('title'),
        address: _this.get('address'),
      	ogrn: _this.get('ogrn'),
      	inn: _this.get('inn'),
      	kpp: _this.get('kpp'),
      	payment_account: _this.get('paymentAccount'),
      	correctional_account: _this.get('correctionalAccount'),
      	bank_name: _this.get('bankName'),
      	bank_bik: _this.get('bankBik')
      });


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
      company.save();

      _this.transitionToRoute('companies');
            }); 
    }
  }
});
