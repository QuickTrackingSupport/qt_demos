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

  onReady() {},

  registerGP() {
    console.log('yz----', JSON.stringify(this.data.gp)); // UmengSDK.registerGlobalProperties(this.gp);

    const {
      aplus
    } = getApp();
    aplus.setMetaInfo('globalproperty', { ...this.data.gp
    });
  },

  setUserProfile() {
    console.log('当前用户属性：', JSON.stringify(this.data.up));
    const {
      aplus
    } = getApp();
    console.log(aplus, 'aplus');
    aplus.record('$$_user_profile', 'OTHER', { ...this.data.up
    });
  },

  setUserId() {
    const {
      aplus
    } = getApp();
    console.log('当前userid:', this.data.puid);
    aplus.setMetaInfo('_user_id', this.data.puid);
  },

  onUserPropertiesChanged(event) {
    // console.log('yz--------event', JSON.parse(event.detail.value));
    try {
      console.log('yz--------json', event.detail);
      let up = this.toJSONString(event.detail.value);
      console.log('yz------json', JSON.parse(up));
      this.setData({
        up: JSON.parse(up)
      });
    } catch (e) {}
  },

  onGlobalPropertiesChanged(event) {
    // console.log('yz--------event', JSON.parse(event.detail.value));
    try {
      console.log('yz--------json', event.detail);
      let gp = this.toJSONString(event.detail.value);
      console.log('yz------json', JSON.parse(gp));
      this.setData({
        gp: JSON.parse(gp)
      });
    } catch (e) {}
  },

  onUserIdChanged(event) {
    console.log('yz--------json', event.detail);
    try {
        this.setData({
          up: event.detail.value
        });
      } catch (e) {}
  },

  toJSONString(input) {
    const keyMatcher = '([^",{}\\s]+?)';
    const valMatcher = '(.,*)';
    const matcher = new RegExp(`${keyMatcher}\\s*:\\s*${valMatcher}`, 'g');

    const parser = (match, key, value) => `"${key}":${value}`;

    return input.replace(matcher, parser);
  }

});