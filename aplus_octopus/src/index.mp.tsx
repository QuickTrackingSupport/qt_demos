import React from 'react';
import { Route, Router, TabRouter } from '@terminus/octopus-router';
import './styles/index.less';

import IndexHome from './pages/index/index';
import Click from './pages/click/click';
import Custom from './pages/custom/custom';
import ExposureLL from './pages/exposure/longList';
import Exposure from './pages/exposure/swiper';
import Integrate from './pages/integrate/integrate';
import Pv from './pages/pv/pv';
import Setting from './pages/setting/setting';

const aplusConfig = {
  metaInfo: {
    '_anony_id': 'test_id_111',
    'appId': 'wx9e13f4e9923236ab', //和project.config.json里的appid保持一致，必填
    // 'aplus-waiting':'MAN', //关闭自动PV,
    'DEBUG': true,  // 埋点调试使用
    'aplus-rhost-v': 'log-api.aplus.emas-poc.com', //pv日志发送去向，填域名，必填

    // 全局属性
    'globalproperty': {
      a: 1,
      b: 2
    },

    //自动曝光
    'aplus-auto-exp': [{
      'cssSelector': 'LongListItem', //sdk会自动处理为： .ListItem
      'logkey': '/ShowLongListItem',
      'props': ['data-keyword'],
    }],
    // 自动曝光回调
    // 'aplus-auto-exp-userfn':  function(element, selector) {
    //   // Taro不支持传值到小程序的dataset 详见https://docs.taro.zone/docs/react-overall#dataset
    //   // 通过回调的方式，获取当前触发曝光的元素element & selector, 然后使用document的方法获取到dataset
    //   console.log('==> document', document)
    //   const eles = document.getElementsByClassName(selector);
    //   let kWord: string = '';
    //   for (let i = 0; i < eles.length; i++) {
    //     const ele = eles[i] as HTMLElement;
    //     const { keyword }: any = ele.dataset;
    //     if(element.id === ele.id) {
    //       kWord = keyword;
    //       break;
    //     }
    //   }
    //   return { keyword: kWord };
    // },

    // 自动点击
    'aplus-auto-clk': [{
      'cssSelector': '.auto-click',
      'logkey': '/AutoClick',
      'props': ['data-keyword'],
    }],
    // 自动点击回调
    // 'aplus-auto-clk-userfn':  function(element, selector) {
    //   // 同自动曝光回调
    //   const eles = document.getElementsByClassName(selector);
    //   let kWord: string = '';
    //   for (let i = 0; i < eles.length; i++) {
    //     const ele = eles[i] as HTMLElement;
    //     const { keyword }: any = ele.dataset;
    //     if(element.id === ele.id) {
    //       kWord = keyword;
    //       break;
    //     }
    //   }
    //   console.log('===> kWord', kWord)
    //   return { keyword: kWord };
    // },

    // 设置每个页面的page_name
    'pageConfig': {
      'pages/index/index': {
        'pageName': 'page_name_test_index'
      },
      'pages/detail/detail': {
        'pageName': 'page_name_test_detail'
      },
    }

  }
}

const aplus = require('./utils/aplus_mini_cloud_um.js')(aplusConfig);

class Index extends React.Component {
  
  constructor(props: any) {
    super(props);
  }

  onLaunch(options: any) {
  }

  // onShareAppMessage(...args) {
  //   console.log('==> args', args)
  // }
  
  render() {

    const { children }: any = this.props;

    return (
      <>
        <Router>
          <Route name="Home" component={IndexHome} />
          <Route name="Click" component={Click} />
          <Route name="Custom" component={Custom} />
          <Route name="ExposureLL" component={ExposureLL} />
          <Route name="Exposure" component={Exposure} />
          <Route name="Integrate" component={Integrate} />
          <Route name="Pv" component={Pv} />
          <Route name="Setting" component={Setting} />
        </Router>
        {children}
        </>
    )
  }
}

export default Index;
