module.exports = (strapi) => {
  const middleware = {
    initialize() {
      strapi.app.use(async (ctx, next) => {
        const start = Date.now();

        await next();

        const delta = Math.ceil(Date.now() - start);

        ctx.set("X-Response-Time", delta + "ms");
        console.log("middleware test X-Response-Time", delta + "ms");
      });
    },
    fn() {
      console.log("run middleware fn");
    },
  };

  return middleware;
};
