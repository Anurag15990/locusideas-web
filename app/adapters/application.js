import DS from 'ember-data';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';
import config from '../config/environment';


/**
 * @method : Rest API Adapter for the Entire Application.
 */
export default DS.JSONAPIAdapter.extend(DataAdapterMixin, {
  
  host: `${config.host}`,
  namespace: 'api',
  authorizer:'authorizer:jwt'

});
