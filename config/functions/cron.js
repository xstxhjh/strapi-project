"use strict";

/**
 * Cron config that gives you an opportunity
 * to run scheduled jobs.
 *
 * The cron format consists of:
 * [SECOND (optional)] [MINUTE] [HOUR] [DAY OF MONTH] [MONTH OF YEAR] [DAY OF WEEK]
 *
 * See more details here: https://strapi.io/documentation/developer-docs/latest/setup-deployment-guides/configurations.html#cron-tasks
 */

let count = 0;

module.exports = {
  /**
   * Simple example.
   * Every monday at 1am.
   */
  "*/5 * * * * *": () => {
    count++;
    console.log(`定时器${count}`);
  },
};
