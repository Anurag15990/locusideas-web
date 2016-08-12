import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('users', function() {
    this.route('me');
    this.route('designers');
  });

  this.route('user', {path: '/users/:user_id'});
  this.route('login');
});

export default Router;
