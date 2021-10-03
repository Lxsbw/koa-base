/*
 * @Author: zhixiong.fu
 * @Date: 2020-12-22 12:09:21
 * @Last Modified by: zhixiong.fu
 * @Last Modified time: 2021-10-03 14:07:28
 */

import mongoose from 'mongoose';
import { mongoClient } from '../handle/mongo.js';

const mobilePhoneSchema = new mongoose.Schema(
  {
    model_name: { type: String },
    size: { type: String },
    spec: { type: String },
    ram: { type: Number },
    rom: { type: Number },
    seria_number: { type: String },
    deleted: { type: Boolean, default: false }
  },
  {
    versionKey: false,
    timestamps: { createdAt: 'created', updatedAt: 'updated' },
    // 查询时是否执行 setters
    runSettersOnQuery: true
  }
);

console.log('实体类mobilePhone', new Date().getTime());
const mobilePhone = mongoClient.model('mobilePhone', mobilePhoneSchema, 'mobile-phone');

// module.exports = { mobilePhone };
export default mobilePhone;
