// import { isWeb } from '@uni/env';   
const aplusMini = require('./aplus');
console.log(window, 'window')
const sendPV = (params) => {
  if (window) {
    const {aplus_queue} = window;
    aplus_queue.push({
      action: 'aplus.sendPV',
      arguments: [{is_auto: false}, {...params}]
    })
  } else {
    const {aplus_queue} = aplusMini.default;
    aplus_queue.push({
      action: 'aplus.sendPV',
      arguments: [{is_auto: false}, {...params}]
    })
  }
};

const sendEvent = (eventid, params, eventtype = 'CLK') => {
  if (window) {
    const {aplus_queue} = window;
    aplus_queue.push({
      action: 'aplus.record',
      arguments: [eventid, eventtype, {...params}]
    })
  } else {
	console.log(aplusMini.default, 'aplusMini.default')
    const {aplus_queue} = aplusMini.default;
    aplus_queue.push({
      action: 'aplus.record',
      arguments: [eventid, eventtype, {...params}]
    })
  }
};

const onAplusClk = (e) => {
  const aplus_queue = aplusMini.default.aplus_queue;
  const cp = getCurrentPages();
  const cpl = cp.length;
  aplus_queue.push({
    action: 'aplus.aplus_pubsub.publish',
    arguments: ['onAplusClk', {
      status: 'ready',
      event: e,
      context: cp[cpl - 1]
    }]
  })
};

const sendUserInfo = (params) => {
  sendEvent('$$_user_profile', params, 'OTHER');
};

const setUserId = (userid) => {
  if (window) {
    console.log('yz-----userid', userid);

    const {aplus_queue} = window;
    aplus_queue.push({
      action: 'aplus.setMetaInfo',
      arguments: ['_user_id', userid]
    })
  } else {
    const {aplus_queue} = aplusMini.default;
    aplus_queue.push({
      action: 'aplus.setMetaInfo',
      arguments: ['_user_id', userid]
    })
  }
};

const registerGlobalProperties = (params) => {
  if (window) {
    const { aplus_queue } = window;
    /**
     * @example:
     *  aplus_queue.push({action: 'aplus.setMetaInfo', arguments: ['globalproperty', { a: 1, b: '2', c: null, d: undefined, e: '' }]});
     * @params 一级平铺自定义全局属性键值对，不支持嵌套
     */
    aplus_queue.push({
      action: 'aplus.setMetaInfo',
      arguments: ['globalproperty', { ...params }]
    });
  } else {
    const {aplus_queue} = aplusMini.default;
    /**
     * @example:
     *  aplus_queue.push({action: 'aplus.setMetaInfo', arguments: ['globalproperty', { a: 1, b: '2', c: null, d: undefined, e: '' }]});
     * @params 一级平铺自定义全局属性键值对，不支持嵌套
     */
    aplus_queue.push({
      action: 'aplus.setMetaInfo',
      arguments: ['globalproperty', { ...params }]
    });
  }
};

const appendGlobalProperties = (params) => {
  if (window.aplus_queue) {
    const { aplus_queue } = window;
    aplus_queue.push({
      action: 'aplus.appendMetaInfo',
      arguments: ['globalproperty', { ...params }]
    })
  } else {
    const {aplus_queue} = aplusMini;
    aplus_queue.push({
      action: 'aplus.appendMetaInfo',
      arguments: ['globalproperty', { ...params }]
    })
  }
};

const getGlobalProperties = () => {
  if (window.aplus_queue) {
    const { aplus } = window;
    return aplus.getMetaInfo('globalproperty');
  } else {
    const {aplus} = aplusMini;
    return aplus.getMetaInfo('globalproperty');
  }
};

const clearGlobalProperties = () => {
  if (window.aplus_queue) {
    const { aplus_queue } = window;
    aplus_queue.push({
      action: 'aplus.setMetaInfo',
      arguments: ['globalproperty', {}]
    })
  } else {
    const { aplus_queue } = aplusMini;
    aplus_queue.push({
      action: 'aplus.setMetaInfo',
      arguments: ['globalproperty', {}]
    })
  }
};

export default {
  sendPV,
  sendEvent,
  sendUserInfo,
  setUserId,
  registerGlobalProperties,
  appendGlobalProperties,
  getGlobalProperties,
  clearGlobalProperties,
  onAplusClk
};