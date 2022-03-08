/* eslint-disable */
var aplus_mini = require('./aplus_mini_cloud_um');
import { storage } from '@uni/apis';

let trackerInfo = {};
try {
  trackerInfo = storage.getStorageSync({__trackerInfo: '__trackerInfo'});
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
      from: 'rax'
    },

    //自动曝光
   'aplus-auto-exp': [{
		'cssSelector':'.banner_item' ,
		'logkey':'test_auto_exp_banner',
		'props': ['data-index'], 
   }, {
	   'cssSelector':'.exposure-grid-item',
	   'logkey':'test_auto_exp_grid',
	   'props': ['data-index', 'data-name'], 
   }],
   'aplus-auto-clk': [{
		'cssSelector':'.auto_clk',
		'logkey':'test_auto_clk',
		'props': ['data-product', 'data-productColor', 'data-productId'], 
   }],
   '_user_id': 'testUserId',
   // 设置每个页面的page_name
   'pageConfig': {
    'pages/home/index': {
      'pageName': 'home_page'
    },
    'pages/vt/vtdemo1': {
      'pageName': 'vtdemo_page'
    },
    'pages/click/click': {
      'pageName': 'clickevent_page'
    },
    'pages/pv/pv': {
      'pageName': 'manpv_page'
    },
    'pages/setting/index': {
      'pageName': 'setting_page'
    },
    'pages/exposure/exposure': {
      'pageName': 'exp_page'
    },
    'pages/custom/custom': {
      'pageName': 'customevent_page'
    },
    'pages/integrate/integrate': {
      'pageName': 'integrate_page'
    },
    'pages/car/shop': {
      'pageName': 'carshop_page'
    }
  }
  }
};

const aplus = aplus_mini(aplusConfig);

export default aplus;