
const sendPV = function (args: object) {
  const aplus_queue = window.aplus_queue;
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
  const aplus_queue = window.aplus_queue;
  aplus_queue.push({
    action: 'aplus.record',
    arguments: [trackEventCode, eventType, eventParams],
  });
}

const setMetaInfo = function(metaKey: string, metaValue: any): void {
  const aplus_queue = window.aplus_queue;
  aplus_queue.push({
    action: 'aplus.setMetaInfo',
      arguments: [metaKey, metaValue]
    });
}

const appendMetaInfo = function(metaKey: string, metaValue: any): void {
  const aplus_queue = window.aplus_queue;
  aplus_queue.push({
    action: 'aplus.appendMetaInfo',
      arguments: [metaKey, metaValue]
    });
}

export {
  sendPV,
  record,
  setMetaInfo,
  appendMetaInfo,
}