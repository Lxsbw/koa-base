/*
 * @Author: zhixiong.fu
 * @Date: 2020-12-21 21:05:52
 * @Last Modified by: zhixiong.fu
 * @Last Modified time: 2025-05-05 10:40:47
 */

const mongodbConfig = {
  user: 'test_user',
  pass: '123456',
  host: '10.211.55.4',
  port: '16390',
  db: 'testdb'
};

const env = {
  DEBUG: true,
  ENV: ''
};

export { mongodbConfig, env };
