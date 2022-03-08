/* eslint-disable */
// var aplus_mini = require('./aplus_mini_cloud_um');
import aplus_mini from './aplus_mini_cloud_um.js';
import mpx, { createPage } from '@mpxjs/core';

let trackerInfo = {};
try {
  trackerInfo = mpx.getStorageSync('__trackerInfo');
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
   'aplus-api-host': trackerInfo.aplusApiHost, // 采集管理系统域名，用于可视化埋点验证

   'DEBUG': true,
   // 'aplus-waiting': 'MAN', //关闭自动pv
   '_anony_id': 'testOpenId_' + random, // 'testOpenId', //必填
   'globalproperty': {
      from: 'mpx'
   },
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
   '_user_id': 'testUserId_' + random,
   '_user_nick': 'testUserNick',
   // 设置每个页面的page_name
   'pageConfig': {
  		'pages/index/index': {
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
      }
    }
  }
};

const aplus = aplus_mini(aplusConfig);
// module.exports = aplus;
export default aplus;
