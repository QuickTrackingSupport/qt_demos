let trackerInfo = {};
try {
  trackerInfo = wx.getStorageSync("__trackerInfo");
  console.log("trackerInfo === ", trackerInfo);
} catch (e) {
  console.log("error === ", e);
}

function getRandom(min, max) {
  return min + Math.floor(Math.random() * (max - min + 1));
};
const random = getRandom(1, 1000);

const aplusConfig = {
  metaInfo: {
    "appKey": trackerInfo.appKey || "skuu0fdm4ksl236ladytzi1o",
    "appInfoId": trackerInfo.appInfoId || "92522112133683",
    "aplus-rhost-v": trackerInfo.aplusRhostV || "log-api.aplus.emas-poc.com", //日志发送去向，填域名，必填
    "aplus-vt-cfg-url":
      trackerInfo.aplusVtCfgUrl ||
      "https://alidt.alicdn.com/alilog/vt/miniapp/skuu0fdm4ksl236ladytzi1o.json", // 已发布的配置地址
    "aplus-api-host": trackerInfo.aplusApiHost || 'pre.aplus.emas-poc.com', // 采集管理系统域名，用于可视化埋点验证
    "_anony_id": "testOpenId" + random,
    '_user_id': 'testUserId_' + random,
    // "appId": "wx9e13f4e9923236ab", //和project.config.json里的appid保持一致，必填
    // 'aplus-waiting':'MAN', //关闭自动PV,
    "DEBUG": true, // 埋点调试使用
    // 全局属性
    'globalproperty': {
      from: 'kbone'
    },
    //自动曝光
    "aplus-auto-exp": [
      {
        cssSelector: ".banner_item",
        logkey: "test_auto_exp_banner",
        props: ['data-index']
      },
      {
        cssSelector: ".exposure-grid-item",
        logkey: "ShowListItem",
        props: ["data-keyword"]
      }
    ],

    // 自动点击
    "aplus-auto-clk": [
      {
        cssSelector: ".auto-click",
        logkey: "test_auto_clk",
        props: ['data-product', 'data-productColor', 'data-productId'],
      },
    ],

    // 设置每个页面的page_name
    pageConfig: {
      'pages/index/index': {
  		  'pageName': 'home_page'
  		},
      'pages/vt/vtdemo1': {
        'pageName': 'vtdemo1'
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
      'pages/exposure/swiper': {
        'pageName': 'exp_page'
      },
      'pages/exposure/virtualList': {
        'pageName': 'exp_virtual_list_page'
      },
      'pages/exposure/longList': {
        'pageName': 'exp_long_list_page'
      },
      'pages/custom/custom': {
        'pageName': 'customevent_page'
      },
      'pages/integrate/integrate': {
        'pageName': 'integrate_page'
      },
      // 'pages/car/shop': {
      //   'pageName': 'carshop_page'
      // }
    },
  },
};

const aplus = require('./utils/aplus_mini_cloud_um')(aplusConfig);

App({
    aplus,
    onLaunch(options) {
        console.log('App.onLaunch --> ', options)
    },
    onShow(options) {
        console.log('App.onShow --> ', options)
        const pages = getCurrentPages() || []
        const currentPage = pages[pages.length - 1]
        if (currentPage) console.log('currentPage --> ', currentPage.pageId)
    },
    onHide() {
        console.log('App.onHide --> ')
        const pages = getCurrentPages() || []
        const currentPage = pages[pages.length - 1]
        if (currentPage) console.log('currentPage --> ', currentPage.pageId)
    },
    onError(err) {
        console.log('App.onError --> ', err)
    },
    onPageNotFound(options) {
        console.log('App.onPageNotFound --> ', options)
    },
    onUnhandledRejection(options) {
        console.log('App.onUnhandledRejection --> ', options)
    },
    onThemeChange(options) {
        console.log('App.onThemeChange --> ', options)
    },
})