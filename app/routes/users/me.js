import Ember from 'ember';

/**
 * @route : Route for users/me call.
 */
export default Ember.Route.extend({
  model() {
    return this.store.findRecord('user', 'me');
  }
});
