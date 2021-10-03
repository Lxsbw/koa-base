/*
 * @Author: zhixiong.fu
 * @Date: 2020-12-21 21:05:52
 * @Last Modified by: zhixiong.fu
 * @Last Modified time: 2021-10-03 10:41:45
 */

const mongodbConfig = {
  user: 'test_user',
  pass: '123456',
  host: '121.37.188.31',
  port: '16380',
  db: 'testdb'
};

const env = {
  DEBUG: true,
  ENV: ''
};

export { mongodbConfig, env };
