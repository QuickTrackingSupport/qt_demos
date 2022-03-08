
const sendPV = function (args: object) {
  const aplus_queue = getApp().aplus.aplus_queue;
  aplus_queue.push({
    action: 'aplus.sendPV',
    arguments: [{
      is_auto: false
    }, {
      ...args
    }],
  });
}

const record = function (trackEventCode: string, eventType: string, eventParams: object): void {
  const aplus_queue = getApp().aplus.aplus_queue;
  aplus_queue.push({
    action: 'aplus.record',
    arguments: [trackEventCode, eventType, eventParams],
  });
}

const setMetaInfo = function(metaKey: string, metaValue: any): void {
  const aplus_queue = getApp().aplus.aplus_queue;
  aplus_queue.push({
    action: 'aplus.setMetaInfo',
      arguments: [metaKey, metaValue]
    });
}

const appendMetaInfo = function(metaKey: string, metaValue: any): void {
  const aplus_queue = getApp().aplus.aplus_queue;
  aplus_queue.push({
    action: 'aplus.appendMetaInfo',
      arguments: [metaKey, metaValue]
    });
}

const onAplusClk = function (e: any) {
  const aplus_queue = getApp().aplus.aplus_queue;
  const cp = getCurrentPages();
  const cpl = cp.length;
  aplus_queue.push({
    action: 'aplus.aplus_pubsub.publish',
    arguments: ['onAplusClk', {
      status: 'ready',
      event: e,
      context: cp[cpl - 1]
    }],
  });
}

const onAplusTouch = function (e: any) {
  const aplus_queue = getApp().aplus.aplus_queue;
  const cp = getCurrentPages();
  const cpl = cp.length;
  aplus_queue.push({
    action: 'aplus.aplus_pubsub.publish',
    arguments: ['onAplusTouch', {
      status: 'ready',
      event: e,
      context: cp[cpl - 1]
    }],
  });
}

export {
  sendPV,
  record,
  setMetaInfo,
  appendMetaInfo,
  onAplusClk,
  onAplusTouch,
}