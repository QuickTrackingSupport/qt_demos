
const aplusConfig = {
  metaInfo: {
    'appKey': 'testAppKey',
    'aplus-rhost-v': 'log-api.aplus.emas-poc.com',
    '_anony_id': 'test_open_id_test_yuzhao_openid1',
    '_user_id': 'user_id',
    'DEBUG': true,
    'pageConfig': {
      'pages/index/index': {
        'pageName': 'EQ_home_page',
        // 'skipMe': true
        // 'pageTitle': '首页'
      },
      'pages/autotrack/autotrack': {
        'pageName': 'finance_calculator_page',
      },
    },
  }
};

// 方式1：手动集成方式：
const aplus = require('./aplus_mini.js')(aplusConfig);

module.exports = aplus;