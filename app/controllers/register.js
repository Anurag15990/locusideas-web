import Ember from 'ember';

export default Ember.Controller.extend({

  session: Ember.inject.service(),

  actions: {
    authenticate: function () {
      var credentials = this.getProperties
        ('emailAddress', 'password'),
        authenticator = 'authenticator:register';

      this.get('session').authenticate(authenticator,
        credentials).catch((reason)=>{
        this.set('errorMessage', reason.error || reason);
      });
    }
  }
});
