const _Page = require("../../__antmove/component/componentClass.js")("Page");
my.setStorageSync({
    key: "activeComponent",
    data: {
        is: "/pages/integrate/index"
    }
}); // index.js
// const app = getApp()

_Page({
    data: {
        tips: [
            {
                text: "注意："
            },
            {
                text: "1. appkey: 要填写您平台对应的appkey"
            },
            {
                text: "2. aplus-rhost-v: 需填写您的收数域名"
            },
            {
                text: "3. _anony_id: 务必填写"
            }
        ]
    }
});
