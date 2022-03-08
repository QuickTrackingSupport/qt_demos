const _Page = require("../../__antmove/component/componentClass.js")("Page");
const _my = require("../../__antmove/api/index.js")(my);
my.setStorageSync({
    key: "activeComponent",
    data: {
        is: "/pages/index/index"
    }
}); // index.js
// const app = getApp()
// const { envList } = require('../../miniprogram/envList.js');

_Page({
    data: {
        aplusRhostV: "",
        aplusApiHost: "",
        aplusVtCfgUrl: "",
        appKe: "",
        appInfoId: ""
    },
    onLoad: function() {},

    handlerDomainChange(e) {
        this.setData({
            aplusRhostV: e.detail.value.trim()
        });
    },

    handlerSysDomainChange(e) {
        this.setData({
            aplusApiHost: e.detail.value.trim()
        });
    },

    handlerVtURLChange(e) {
        this.setData({
            aplusVtCfgUrl: e.detail.value.trim()
        });
    },

    handlerAppKeyChange(e) {
        this.setData({
            appKey: e.detail.value.trim()
        });
    },

    handlerAppInfoIdChange(e) {
        this.setData({
            appInfoId: e.detail.value.trim()
        });
    },

    navigateToSubmit() {
        const {
            aplusRhostV = "",
            aplusApiHost = "",
            aplusVtCfgUrl = "",
            appKey = "",
            appInfoId = ""
        } = this.data; // if (!aplusRhostV || !appKey) {
        //   wx.showModal({
        //     title: '错误提示',
        //     content: '收数域名和appKey不能为空',
        //   });
        //   return;
        // }
        // if (aplusVtCfgUrl && (!aplusApiHost || !appInfoId)) {
        //   wx.showModal({
        //     title: '错误提示',
        //     content: '启用可视化埋点时需要同时配置QT系统域名和appInfoId',
        //   });
        //   return;
        // }

        _my.setStorageSync("__trackerInfo", {
            aplusRhostV,
            aplusApiHost,
            aplusVtCfgUrl,
            appKey,
            appInfoId
        }); // const { aplus }= getApp();
        // aplus.setMetaInfo('appKey', appKey);
        // wx.showModal({
        //   title: '成功',
        //   content: '更新配置成功，请重新进入小程序以生效配置',
        //   success: function () {
        //     wx.startPullDownRefresh();
        //   }
        // });

        return;
    },

    onPullDownRefresh() {
        console.log("refresh");
        setTimeout(function() {
            _my.stopPullDownRefresh();
        }, 1000);
    },

    navigateToPv() {
        _my.navigateTo({
            url: "/pages/pv/index"
        });
    },

    navigateToClick(e) {
        _my.navigateTo({
            url: "/pages/click/index"
        });
    },

    navigateToCustom(e) {
        _my.navigateTo({
            url: "/pages/custom/index"
        });
    },

    navigateToCode(e) {
        _my.navigateTo({
            url: "/pages/integrate/index"
        });
    },

    navigateToExposure() {
        _my.navigateTo({
            url: "/pages/exposure/index"
        });
    },

    navigateToSetting() {
        _my.navigateTo({
            url: "/pages/setting/index"
        });
    },

    navigateToVT() {
        _my.navigateTo({
            url: "/pages/vt/vtdemo1"
        });
    }
});
