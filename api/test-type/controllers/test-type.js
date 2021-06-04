'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

const { sanitizeEntity } = require('strapi-utils');
// parseMultipartData：这个函数解析了strapi的formData格式。
// sanitizeEntity：此函数从模型及其关系中删除所有私有字段。

module.exports = {
  /**
   * Retrieve records.
   *
   * @return {Array}
   */
  find: async ctx => {
    const data = await strapi.services['test-type'].find()
    return data.map(entity => sanitizeEntity(entity, { model: strapi.models['test-type'] }))
  },
};
