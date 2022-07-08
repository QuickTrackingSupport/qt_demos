const _Page = require("../../__antmove/component/componentClass.js")("Page");
my.setStorageSync({
    key: "activeComponent",
    data: {
        is: "/pages/click/index"
    }
}); // index.js
// const app = getApp()

_Page({
    data: {
        detail: {
            product: "水杯",
            productColor: "黄色",
            productId: "003"
        }
    },

    clickEvent() {
        console.log("yz-----", this.data.detail);
        const { aplus } = getApp();
        console.log('yz-----aplus', aplus)
        // aplus.aplus_queue.push({
        //   action: 'aplus.record',
        //   arguments: ["test_clk", "CLK", {
        //     ...this.data.detail
        //   }]
        // })
        aplus.aplus.record("test_clk", "CLK", {
            ...this.data.detail
        })
    }
});
