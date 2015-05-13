import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

export default Router.map(function () {
  //this.route('companies', { path: '/companies' });
  this.route('login');
  this.resource('companies', function () {
    this.route('show', { path: ':company_id' }, function (){
        this.resource('products', function (){
          this.route ('show', {path: 'product_id' }, function (){});
        });
    });
    this.route('new');
    this.route('edit', { path: ':company_id/edit' });
  });
  this.resource('users', function (){
    this.route('show', {path: ':user_id'}, function (){});
    this.route('new');
  });
});
