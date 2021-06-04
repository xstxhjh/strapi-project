'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#lifecycle-hooks)
 * to customize this model
 */

module.exports = {
  // Before saving a value.
  // Fired before an `insert` or `update` query.
  beforeSave: (model, attrs, options) => {},
  // After saving a value.
  // Fired after an `insert` or `update` query.
  afterSave: (model, attrs, options) => {},
};
