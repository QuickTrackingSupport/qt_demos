// index.js
// const app = getApp()
Page({
  data: {
    puid: 'testUserId',
    up: {
      a: 1,
      b: 2
    },
    gp: {
      'a': 1,
      'b': 2,
      'c': '3',
      'd': 'undefined',
      'e': null,
      'f': ''
    }
  },
  registerGP() {
    console.log('yz----', JSON.stringify(this.data.gp))
    getApp().aplus.aplus_queue.push({
      action: 'aplus.setMetaInfo',
      arguments: ['globalproperty', {
        ...this.data.gp
      }]
    })
  },
  setUserProfile() {
    console.log('当前用户属性：', JSON.stringify(this.data.up));
    getApp().aplus.aplus_queue.push({
      action: 'aplus.record',
      arguments: ['$$_user_profile', 'OTHER', {
        ...this.data.up
      }]
    })
  },
  setUserId() {
    const {
      aplus
    } = getApp();
    getApp().aplus.aplus_queue.push({
      action: 'aplus.setMetaInfo',
      arguments: ['_user_id', this.data.puid]
    })
  },
  onGlobalPropertiesChanged(event) {
    try {
      console.log('yz--------json', event.detail);
      let gp = this.toJSONString(event.detail.value);
      console.log('yz------json', JSON.parse(gp));
      this.setData({
        gp: JSON.parse(gp)
      });
    } catch (e) {}
  },
  onUserPropertiesChanged(event) {
    // console.log('yz--------event', JSON.parse(event.detail.value));
    try {
      console.log('yz--------json', event.detail);
      let up = this.toJSONString(event.detail.value);
      console.log('yz------up', JSON.parse(up));
      this.setData({
        up: JSON.parse(up)
      });
    } catch (e) {}
  },
  onUserIdChanged(event) {
    try {
      this.setData({puid: event.detail.value});
    } catch(e){}
  },
  toJSONString(input) {
    const keyMatcher = '([^",{}\\s]+?)';
    const valMatcher = '(.,*)';
    const matcher = new RegExp(`${keyMatcher}\\s*:\\s*${valMatcher}`, 'g');
    const parser = (match, key, value) => `"${key}":${value}`
    return input.replace(matcher, parser);
  }
});