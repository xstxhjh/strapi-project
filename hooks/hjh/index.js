module.exports = strapi => {
  const hook = {
    /**
     * Default options
     */

    defaults: {
      // config object
    },

    /**
     * Initialize the hook
     */

    async initialize() {
      console.log('hjh hook init')
      // await someAsyncCode()
      // const settings = {...this.defaults, ...strapi.config.hook.settings.**};
    },
  };

  return hook;
};