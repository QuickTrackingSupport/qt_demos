
const aplusConfig = {
  'metaInfo': {
    'appKey': 'test_appkey',
	  'DEBUG': true,
	  'aplus-rhost-v': 'log-api.aplus.emas-poc.com',
	  // 'aplus-api-host': 'daily.aplus.emas-poc.com',
	  '_anony_id': 'mpvue_openid',
    'aplus-auto-clk': [{
      'cssSelector':'.clk-txt',
      'logkey':'auto-clk-id',
      // 注意: 目前支付宝小程序不支持该属性采集
      'props': ['data-name', 'data-pagename'],
    }],
    'aplus-auto-exp': [{
      'cssSelector':'.exp-txt', // 你要曝光的元素的class
      'logkey':'autgao-exp-id', // 自定义事件的id
      // 注意：
      // 1、如果CSSSelector能匹配上多个元素则一定要在页面节点上埋data-tracker,否则aplusJS无法识别元素唯一性，进而导致一个列表多个元素只能触发一次曝光；
      // 2、目前支付宝小程序不支持该属性采集
      'props': ['data-name', 'data-pagename'],
    }]
  }
};

const { AplusMini } = require('qt-miniprogram');
const aplus = AplusMini.create({
  ...aplusConfig
});

export default aplus;
