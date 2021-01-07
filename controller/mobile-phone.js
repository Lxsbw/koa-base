/*
 * @Author: zhixiong.fu
 * @Date: 2021-01-07 17:23:51
 * @Last Modified by: zhixiong.fu
 * @Last Modified time: 2021-01-07 17:32:26
 */
const BaseController = require('../handle/base-controller');
const MobilePhoneService = require('../service/mobile-phone');

class MobilePhoneController extends BaseController {
  /**
   * id查找
   * @route GET /api/mobile-phone/findone
   * @group MobilePhone - Operations about mobile phone
   * @param {string} _id.query.required - id
   * @returns {object} 200 - mobile phone info
   * @returns {Error} default - Unexpected error
   */
  async findOne(ctx, next) {
    console.log('controller : ' + JSON.stringify(ctx.query._id));

    // console.log('clone : ' + JSON.stringify(_.cloneDeep(ctx.body)));

    ctx.body = await MobilePhoneService.findOne({ _id: ctx.query._id });
  }

  /**
   * id查找
   * @route GET /api/mobile-phone/find
   * @group MobilePhone - Operations about mobile phone
   * @param {string} _id.query - id
   * @param {string} model_name.query - model_name
   * @returns {object} 200 - mobile phone info
   * @returns {Error} default - Unexpected error
   */
  async find(ctx, next) {
    // console.log('controller : ' + ctx.query._id + '|' + ctx.query.model_name);

    ctx.body = await MobilePhoneService.find({
      _id: ctx.query._id,
      model_name: ctx.query.model_name
    });
  }

  /**
   * 添加手机
   * @route POST /api/mobile-phone/create
   * @group MobilePhone - Operations about mobile phone
   * @param {MobilePhone.model} MobilePhone.body.required - 手机信息
   * @returns {object} 200 - mobile phone _id
   * @returns {Error} default - Unexpected error
   */
  async create(ctx, next) {
    console.log('controller : ' + JSON.stringify(ctx.body));

    // console.log('clone : ' + JSON.stringify(_.cloneDeep(ctx.body)));

    ctx.body = await MobilePhoneService.create(ctx.body);
  }

  /**
   * 更新
   * @route PUT /api/mobile-phone/update
   * @group MobilePhone - Operations about mobile phone
   * @param {MobilePhoneUpd.model} MobilePhoneUpd.body.required - 手机信息
   * @returns {object} 200 - mobile phone
   * @returns {Error} default - Unexpected error
   */
  async update(ctx, next) {
    console.log('controller : ' + JSON.stringify(ctx.body));

    ctx.body = await MobilePhoneService.update(ctx.body);
  }

  /**
   * 删除
   * @route DELETE /api/mobile-phone/delete
   * @group MobilePhone - Operations about mobile phone
   * @param {MobilePhoneDel.model} MobilePhoneDel.body.required - 手机信息
   * @returns {object} 200 - mobile phone info
   * @returns {Error} default - Unexpected error
   */
  async delete(ctx, next) {
    console.log('controller : ' + JSON.stringify(ctx.body));

    ctx.body = await MobilePhoneService.delete(ctx.body);
  }
}

module.exports = new MobilePhoneController();
