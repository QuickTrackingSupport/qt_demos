// app.js
let trackerInfo = {};
try {
  trackerInfo = wx.getStorageSync('__trackerInfo');
  console.log('trackerInfo === ', trackerInfo);
} catch (e) {
  console.log('error === ', e);
}
function getRandom(min, max) {
  return min + Math.floor(Math.random() * (max - min + 1));
};
const random = getRandom(1, 1000);

const aplusConfig = {
  metaInfo: {
   'appKey': trackerInfo.appKey || 'test_appKey', //必填
   'appInfoId': trackerInfo.appInfoId || 'anAppInfoId', 
   'aplus-rhost-v': trackerInfo.aplusRhostV || 'log-api.aplus.emas-poc.com',  //必填 收数域名
   'DEBUG': true, //调试模式 打印sdk日志
  //  '_anony_id': 'testOpenId', //必填
  //  "autoGetOpenid": true,
   '_user_id': 'testUserId',
    // 全局属性
    'globalproperty': {
      a: 1,
      b: 2,
      from: 'wx'
    },
    //自动曝光
    'aplus-auto-exp': [{
      'cssSelector': '.banner-item', //sdk会自动处理为： .banner-item
      'logkey': 'test_auto_exp_banner',
      'props': ['data-keyword'], 
    }, {
      'cssSelector': '.ListItem', //sdk会自动处理为： .ListItem
      'logkey': 'test_auto_exp_grid',
      'props': ['data-keyword'], 
    }],

    // 自动点击
    'aplus-auto-clk': [{
      'cssSelector': '.auto-click',
      'logkey': 'test_auto_clk',
      'props': ['data-keyword'],
    }],
    'pageConfig': {
      'pages/index/index': {
        'pageName': 'home_page',
        'pageTitle': '首页'
      },
      'pages/vt/vtdemo1': {
        'pageName': 'vtdemo_page',
        
      },
      'pages/click/index': {
        'pageName': 'clickevent_page',
      },
      'pages/pv/pv': {
        'pageName': 'manpv_page'
      },
      'pages/setting/index': {
        'pageName': 'setting_page'
      },
      'pages/exposure/index': {
        'pageName': 'exp_page'
      },
      'pages/custom/index': {
        'pageName': 'customevent_page'
      },
      'pages/integrate/index': {
        'pageName': 'integrate_page'
      },
      'pages/car/shop': {
        'pageName': 'carshop_page'
      }
    }
  }
}
const aplus = require('./utils/aplus_mini')(aplusConfig)

App({
  aplus,
  onLaunch: function () {
    this.globalData = {};
  }
});
