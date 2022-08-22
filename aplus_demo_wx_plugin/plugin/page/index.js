const aplus = requireMiniProgram().getAplusCTX()
Page({
  data: {
    message: '插件内页面',
  },
  onLoad() {

  },
  onShow() {
    aplus.aplus_queue.push({
      action: 'aplus.sendPV',
      arguments: [{is_auto:false}, {
        // 插件内的页面编码必填，因为插件内获取不到页面的地址
        page_name: 'plugin_page'
      }]
    });
  }
})