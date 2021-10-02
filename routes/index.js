const router = require('koa-router')();
const MobilePhone = require('../controller/mobile-phone');

router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!'
  });
});

router.get('/string', async (ctx, next) => {
  ctx.body = 'koa2 string';
});

router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json'
  };
});

/* 模块 MobilePhone */
router.get('/api/mobile-phone/findone/:_id', MobilePhone.findOne);
router.get('/api/mobile-phone/findall', MobilePhone.findall);
router.post('/api/mobile-phone/create', MobilePhone.create);
router.put('/api/mobile-phone/update', MobilePhone.update);
router.patch('/api/mobile-phone/patch', MobilePhone.updateByPatch);
router.delete('/api/mobile-phone/delete', MobilePhone.delete);

module.exports = router;
