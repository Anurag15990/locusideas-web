import DS from 'ember-data';

/**
 * @model: Model for User.
 */

export default DS.Model.extend({

  name: DS.attr(),

  bio: DS.attr(),

  dob: DS.attr(),

  picture: DS.attr(),

  cover: DS.attr(),

  emailPrimary: DS.attr(),

  phonePrimary: DS.attr(),

  isDesigner: DS.attr('boolean'),

  status: DS.attr('string'),

  isVerified: DS.attr('boolean'),

  createdAt: DS.attr('date'),

  updatedAt: DS.attr('date')

});
