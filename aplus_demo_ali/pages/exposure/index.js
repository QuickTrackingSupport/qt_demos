const _Page = require("../../__antmove/component/componentClass.js")("Page");
my.setStorageSync({
    key: "activeComponent",
    data: {
        is: "/pages/exposure/index"
    }
}); // index.js
// const app = getApp()

_Page({
    data: {
        swiperImg: [
            {
                url:
                    "https://img.alicdn.com/imgextra/i4/O1CN0198ZqQc1ipBYrWKD7b_!!6000000004461-0-tps-1316-736.jpg"
            },
            {
                url:
                    "https://img.alicdn.com/imgextra/i1/O1CN01EdIpVV1jxiYfVOw8v_!!6000000004615-0-tps-1316-736.jpg"
            },
            {
                url:
                    "https://img.alicdn.com/imgextra/i4/O1CN01RjAj8X1aJZIQk6G27_!!6000000003309-0-tps-1316-736.jpg"
            }
        ],
        indicatorDots: true,
        autoplay: true,
        interval: 2000,
        duration: 500,
        list: [
            {
                url:
                    "https://gd1.alicdn.com/imgextra/i4/2208928232857/O1CN019LfEfG1WyYGv4pMQ5_!!2208928232857.jpg_400x400.jpg",
                name: "大理石香薰灯",
                price: "￥129.0",
                scale: "88人购买"
            },
            {
                url:
                    "https://gd1.alicdn.com/imgextra/i1/2028723128/O1CN01AHNoOr1YyfbGi6ogZ_!!2028723128.jpg",
                name: "大理石融腊灯",
                price: "￥379.0",
                scale: "73人购买"
            }
        ]
    }
});
