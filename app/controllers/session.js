import Ember from 'ember';

export default Ember.Controller.extend({
  user: null,
  setUserName: function() {
  	if(this.get('user') === null){
    	this.set('user', Ember.$.cookie("username"));
    }
  }
});
