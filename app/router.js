import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('users', function() {
    this.route('me');
  });
  this.route('user', {path: '/users/:user_id'});
  this.route('login');
  this.route('projects');
  this.route('project', {path: '/projects/:project_id'});
  this.route('register');
  this.route('designers');
});

export default Router;
