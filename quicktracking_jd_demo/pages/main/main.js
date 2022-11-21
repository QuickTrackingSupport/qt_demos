var app = getApp();
Page({
  data: {
    motto: 'Hello WeApp',
    userInfo: {}
  },
  onButtonTap: function () {
    jd.navigateTo({
      url: '../logs/logs'
    });
  },
  onLoad: function () {
    console.log('onLoad');
    var that = this;
    //登录
    jd.login({
      success: function () {
        jd.getUserInfo({
          success: function (res) {
            that.setData({ userInfo: res.userInfo });
            that.update();
          }
        });
      },
      fail: function (res) {
        console.log(res);
      }
    });
  }
});