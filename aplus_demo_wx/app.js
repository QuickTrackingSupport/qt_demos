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
    // POC环境
   'appKey': trackerInfo.appKey,
   'appInfoId': trackerInfo.appInfoId,
   'aplus-rhost-v': trackerInfo.aplusRhostV, 
   'aplus-vt-cfg-url': trackerInfo.aplusVtCfgUrl, // 已发布的配置地址
   'DEBUG': true,
   '_anony_id': 'testOpenId_' + random, // 'testOpenId', //必填
   '_user_id': 'testUserId_' + random,
   '_user_nick': 'testUserNick',
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
  		  'pageName': 'home_page'
  		},
      'pages/vt/vtdemo1': {
        'pageName': 'vtdemo_page'
      },
  		'pages/click/index': {
  		  'pageName': 'clickevent_page'
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
const { AplusMini } = require('qt-miniprogram');
// const aplus = require('./utils/aplus_mini_cloud_um')(aplusConfig)
const aplus = AplusMini.create({
  ...aplusConfig
});

App({
  aplus,
  onLaunch: function () {
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力');
    } else {
      // wx.cloud.init({
      //   // env 参数说明：
      //   //   env 参数决定接下来小程序发起的云开发调用（wx.cloud.xxx）会默认请求到哪个云环境的资源
      //   //   此处请填入环境 ID, 环境 ID 可打开云控制台查看
      //   //   如不填则使用默认环境（第一个创建的环境）
      //   // env: 'my-env-id',
      //   traceUser: true,
      // });
    }

    this.globalData = {};
  }
});
