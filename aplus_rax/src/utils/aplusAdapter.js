import { isWeb } from '@uni/env';
import aplus from './aplus';

const sendPV = (params) => {
  console.log('yz-----sendPV');
  if (isWeb) {
    const {aplus_queue} = window;
    aplus_queue.push({
      action: 'aplus.sendPV',
      arguments: [{is_auto: false}, {...params}]
    })
  } else {
    aplus.aplus_queue.push({
      action: 'aplus.sendPV',
      arguments: [{is_auto: false}, {...params}]
    })
  }
};

const sendEvent = (eventid, params, eventtype = 'CLK') => {
  console.log('yz-----sendEvent');
  if (isWeb) {
    const {aplus_queue} = window;
    aplus_queue.push({
      action: 'aplus.record',
      arguments: [eventid, eventtype, {...params}]
    })
  } else {
    aplus.aplus_queue.push({
      action: 'aplus.record',
      arguments: [eventid, eventtype, {...params}]
    })
  }
};

const onAplusClk = (e) => {
  console.log(e, "eeee");
  const aplus_queue = aplus.aplus_queue;
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
}

const sendUserInfo = (params) => {
  sendEvent('$$_user_profile', params, 'OTHER');
};

const setUserId = (userid) => {
  console.log('yz-----userid', userid);
  if (isWeb) {
    const {aplus_queue} = window;
    aplus_queue.push({
      action: 'aplus.setMetaInfo',
      arguments: ['_user_id', userid]
    })
  } else {
    aplus.aplus_queue.push({
      action: 'aplus.setMetaInfo',
      arguments: ['_user_id', userid]
    })
  }
};

const registerGlobalProperties = (params) => {
  if (isWeb) {
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
    aplus.aplus_queue.push({
      action: 'aplus.setMetaInfo',
      arguments: ['globalproperty', { ...params }]
    });
  }
};

const appendGlobalProperties = (params) => {
  if (isWeb) {
    const { aplus_queue } = window;
    aplus_queue.push({
      action: 'aplus.appendMetaInfo',
      arguments: ['globalproperty', { ...params }]
    })
  } else {
    aplus.aplus_queue.push({
      action: 'aplus.appendMetaInfo',
      arguments: ['globalproperty', { ...params }]
    })
  }
};

const getGlobalProperties = () => {
  if (isWeb) {
    const { aplus } = window;
    return aplus.getMetaInfo('globalproperty');
  } else {
    return aplus.aplus.getMetaInfo('globalproperty');
  }
};

const clearGlobalProperties = () => {
  if (isWeb) {
    const { aplus_queue } = window;
    aplus_queue.push({
      action: 'aplus.setMetaInfo',
      arguments: ['globalproperty', {}]
    })
  } else {
    aplus.aplus_queue.push({
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