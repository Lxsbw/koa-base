/*
 * @Author: zhixiong.fu
 * @Date: 2021-01-07 22:44:47
 * @Last Modified by:   zhixiong.fu
 * @Last Modified time: 2021-01-07 22:44:47
 */
'use strict';

/**
 * @swagger
 * definitions:
 *   MobilePhone:
 *     type: "object"
 *     required:
 *     - "model_name"
 *     - "size"
 *     - "spec"
 *     properties:
 *       model_name:
 *         type: "string"
 *         description: "手机型号"
 *         example: "xx"
 *       size:
 *         type: "string"
 *         description: "尺寸"
 *         example: "4.7"
 *       spec:
 *         type: "string"
 *         description: "规格"
 *         example: "black"
 *       ram:
 *         type: "integer"
 *         format: "int32"
 *         description: "内存"
 *         example: 4
 *       rom:
 *         type: "integer"
 *         format: "int32"
 *         description: "空间"
 *         example: 64
 *       seria_number:
 *         type: "string"
 *         description: "序列号"
 *         example: "00010"
 *     xml:
 *       name: "MobilePhone"
 */

/**
 * @swagger
 * definitions:
 *   MobilePhoneUpd:
 *     type: "object"
 *     required:
 *     - "_id"
 *     - "model_name"
 *     properties:
 *       _id:
 *         type: "string"
 *         description: "id"
 *         example: "xx"
 *       model_name:
 *         type: "string"
 *         description: "手机型号"
 *         example: "xx"
 *       size:
 *         type: "string"
 *         description: "尺寸"
 *         example: "4.7"
 *       spec:
 *         type: "string"
 *         description: "规格"
 *         example: "black"
 *       ram:
 *         type: "integer"
 *         format: "int32"
 *         description: "内存"
 *         example: 4
 *       rom:
 *         type: "integer"
 *         format: "int32"
 *         description: "空间"
 *         example: 64
 *       seria_number:
 *         type: "string"
 *         description: "序列号"
 *         example: "00010"
 *     xml:
 *       name: "MobilePhoneUpd"
 */

/**
 * @swagger
 * definitions:
 *   MobilePhoneDel:
 *     type: "object"
 *     required:
 *     - "_id"
 *     properties:
 *       _id:
 *         type: "string"
 *         description: "id"
 *         example: "xx"
 *     xml:
 *       name: "MobilePhoneDel"
 */

/**
 * @typedef MobilePhone
 * @property {string} model_name.required - 手机型号 - eg: xx
 * @property {string} size.required - 尺寸 - eg: 4.7
 * @property {string} spec.required - 规格 - eg: black
 * @property {number} ram - 内存 - eg: 4
 * @property {number} rom - 空间 - eg: 64
 * @property {string} seria_number - 序列号 - eg: 00010
 */

/**
 * @typedef MobilePhoneUpd
 * @property {string} _id.required - id - eg: xx
 * @property {string} model_name.required - 手机型号 - eg: xx
 * @property {string} size - 尺寸 - eg: 4.7
 * @property {string} spec - 规格 - eg: black
 * @property {number} ram - 内存 - eg: 4
 * @property {number} rom - 空间 - eg: 64
 * @property {string} seria_number - 序列号 - eg: 00010
 */

/**
 * @typedef MobilePhoneDel
 * @property {string} _id.required - id - eg: xx
 */
