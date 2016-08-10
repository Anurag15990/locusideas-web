import DS from 'ember-data';

/**
 * @method : Rest API Adapter for the Entire Application.
 */
export default DS.JSONAPIAdapter.extend({

  headers : {
    "Accept": "application/json",
    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI1NzRiM2I5NzY4YTA3YjM0NWFlYzU1ZDMiLCJ0eXBlIjoiYXV0aGVudGljYXRpb24iLCJleHBpcmVzSW5TZWNvbmRzIjoiOTk5OTkiLCJpc3N1ZXIiOiIvL2FwaS1zdGFnaW5nLWMzcG8ubG9jdXNpZGVhcy5jb20iLCJhdWRpZW5jZSI6Ii8vYXBpLXN0YWdpbmctYzNwby5sb2N1c2lkZWFzLmNvbSIsImlhdCI6MTQ2ODQxNjExMn0.mGeQJvPq9OPqc5CXl4MhGJ8noDRiLRfZdl6ROMrgGk8"
  },

  host: 'http://api-staging-c3po.locusideas.com',
  namespace: 'api'

});
