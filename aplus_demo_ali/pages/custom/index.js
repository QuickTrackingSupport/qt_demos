const _Page = require("../../__antmove/component/componentClass.js")("Page");
my.setStorageSync({
    key: "activeComponent",
    data: {
        is: "/pages/custom/index"
    }
}); // index.js
// const app = getApp()

_Page({
    data: {
        detail: [
            {
                name: "商品名称",
                value: "床头灯"
            },
            {
                name: "颜色",
                value: "黄色"
            },
            {
                name: "商品ID",
                value: "003"
            }
        ]
    },

    otherEvent() {
        const { aplus } = getApp();
        aplus.record("test_other_ekv", "OTHER", {
            a: 1,
            b: 2,
            c: 3
        });
    }
});
