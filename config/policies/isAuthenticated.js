module.exports = async (ctx, next) => {
  return await next();
  if (ctx.state.user) {
    // Go to next policy or will reach the controller's action.
    return await next();
  }

  ctx.unauthorized(`未登录!`);

  if (ctx.status === 404) {
    ctx.body = 'We cannot find the resource.';
  }
};