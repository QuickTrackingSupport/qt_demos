// plugin/components/hello-compoenent.js
const aplus = requireMiniProgram().getAplusCTX()
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    testTap: function(){
      aplus.aplus_queue.push({
        action: 'aplus.record',
        arguments: ['test_clk', 'CLK', {
          page_name: 'plugin_page',
          param1: 'test_param1',
          param2: 'test_param2'
        }]
      })
    }
  }
})
