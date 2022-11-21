//app.js
App({
  onLaunch: function () {
    //调用API从本地缓存中获取数据
    var logs = jd.getStorageSync('logs') || [];
    logs.unshift(Date.now());
    jd.setStorageSync('logs', logs);
  },
  getUserInfo: function () {
    console.log('getUserInfo excute');
  },
  globalData: {
    userInfo: null
  }
});