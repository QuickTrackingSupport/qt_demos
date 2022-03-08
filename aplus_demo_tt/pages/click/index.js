// index.js
// const app = getApp()
Page({
  data: {
    detail: {
      product: '水杯',
      productColor: '黄色',
      productId: '003'
    }
  },

  clickEvent() {
    console.log('yz-----', this.data.detail);
    const {
      aplus
    } = getApp();
    aplus.record('test_clk', 'CLK', this.data.detail);
  }

});