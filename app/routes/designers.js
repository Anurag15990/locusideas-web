import Ember from 'ember';
import config from '../config/environment';

const { RSVP: { Promise }, $: { ajax }, run } = Ember;

export default Ember.Route.extend({
  session: Ember.inject.service(),

  model() {
    const designersEndpoint = `${config.host}/api/users/designers`;
    const headers = {};

    this.get('session').authorize(('authorizer:jwt'), (headerName, headerValue) => {
      headers[headerName] = headerValue;
    });

    const requestOptions = {
      url: designersEndpoint,
      type: "GET",
      headers: headers,
      contentType: 'application/json',
      dataType: 'json'
    };

    return new Promise((resolve, reject) => {
      ajax(requestOptions).then((response) => {
        run(() => {
          resolve({
           response
          });
        });
      }, (error) => {
        run(() => {
          reject(error);
        });
      });
    });

  }
});
