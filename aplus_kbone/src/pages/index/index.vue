<template>
  <div class="uniapp">
    <view class="uniapp-view">
      <!-- #ifdef APP-PLUS -->
	  <!--  #endif -->
      <section class="uni-left">SDK引入&_anony_id引入</section>
      <section class="uni-right">
        <p class="uni-tip">非常重要,<br/>直接影响数据是否发送</p>
        <button type="primary" class="uni-viewcode" @tap="navigateToCode">点击查看集成代码</button>
      </section>
    </view>
    <view class="uniapp-view">
      <section class="uni-left">根据埋点方案进行事件埋点</section>
      <section class="uni-right">
        <button type="primary" @tap="navigateToPv">页面浏览事件</button>
        <button type="primary" @tap="navigateToClick">点击事件</button>
        <button type="primary" @tap="navigateToExposure">曝光事件</button>
        <button type="primary" @tap="navigateToCustom">自定义事件</button>
        <button type="primary" @tap="navigateToVT">去看可视化demo</button>
      </section>
    </view>
    <view class="uniapp-view">
      <section class="uni-left">按需设置全局/用户属性</section>
      <section class="uni-right">
        <button type="primary" class="uni-setting" @tap="navigateToSetting">设置全局/用户属性</button>
      </section>
    </view>
    
    <view class="uniapp-view">
      <section class="uni-full">
        收数域名：<input type="text" class="uni-tracker-env" id="tracker-domain" :value="aplusRhostV" @change="handlerDomainChange" />
        appKey：<input type="text" class="uni-tracker-env" id="tracker-appkey" :value="appKey" @change="handlerAppKeyChange" />
        可视化配置URL：<input type="text" class="uni-tracker-env" id="tracker-vt-url" :value="aplusVtCfgUrl" @change="handlerVtURLChange" />
        QT系统域名：<input type="text" class="uni-tracker-env" id="tracker-sys-domain" :value="aplusApiHost" @change="handlerSysDomainChange" />
        appInfoId：<input type="text" class="uni-tracker-env" id="tracker-appinfoid" :value="appInfoId" @change="handlerAppInfoIdChange" />
        <button type="primary" class="uni-viewcode" @tap="navigateToSubmit">更新可视化配置</button>
      </section>
    </view>
  </div>
</template>

<script>

export default {
	onLoad(options) {

	},
  data() {
    const defaultObj = {
      aplusRhostV: '',
      aplusApiHost: '',
      aplusVtCfgUrl: '',
      appKey: '',
      appInfoId: '',
    };
    let _trackerInfo = {};
    try {
      let trackerInfo = wx.getStorageSync('__trackerInfo');
      if (trackerInfo) {
        _trackerInfo = trackerInfo
      } else {
        _trackerInfo = defaultObj;
      }
    } catch (e) {
      console.log('error === ', e);
      _trackerInfo = defaultObj;
    }
    return {
      ..._trackerInfo
    };
  },
  methods: {
    navigateToCode() {
      wx.navigateTo({
        url: '../integrate/index'
      })
    },
    handlerDomainChange(e) {
      this.$set(this.$data, 'aplusRhostV', e.target.value.trim());
    },
    handlerSysDomainChange(e) {
      this.$set(this.$data, 'aplusApiHost', e.target.value.trim());
    },
    handlerVtURLChange(e) {
      this.$set(this.$data, 'aplusVtCfgUrl', e.target.value.trim());
    },
    handlerAppKeyChange(e) {
      this.$set(this.$data, 'appKey', e.target.value.trim());
    },
    handlerAppInfoIdChange(e) {
      this.$set(this.$data, 'appInfoId', e.target.value.trim());
    },
    navigateToSubmit() {
      const { aplusRhostV = '', aplusApiHost = '', aplusVtCfgUrl = '', appKey = '', appInfoId = '' } = this.$data;
      if (!aplusRhostV || !appKey) {
        wx.showModal({
          title: '错误提示',
          content: '收数域名和appKey不能为空',
        });
        return;
      }
      if (aplusVtCfgUrl && (!aplusApiHost || !appInfoId)) {
        wx.showModal({
          title: '错误提示',
          content: '启用可视化埋点时需要同时配置QT系统域名和appInfoId',
        });
        return;
      }
      wx.setStorageSync('__trackerInfo', {
        aplusRhostV,
        aplusApiHost,
        aplusVtCfgUrl,
        appKey,
        appInfoId
      });

      const { aplus_queue } = this.$aplus;
      aplus_queue.push({
        action: 'aplus.setMetaInfo',
        arguments: ['appKey', appKey]
      });
      aplus_queue.push({
        action: 'aplus.setMetaInfo',
        arguments: ['appInfoId', appInfoId]
      });
      aplus_queue.push({
        action: 'aplus.setMetaInfo',
        arguments: ['aplus-rhost-v', aplusRhostV]
      });
      aplus_queue.push({
        action: 'aplus.setMetaInfo',
        arguments: ['aplus-vt-cfg-url', aplusVtCfgUrl]
      });
      aplus_queue.push({
        action: 'aplus.setMetaInfo',
        arguments: ['aplus-api-host', aplusApiHost]
      });

      wx.showModal({
        title: '成功',
        content: '更新配置成功，请重新进入小程序以生效配置',
        success: function () {
          wx.startPullDownRefresh();
        }
      });
      return;
    },
    onPullDownRefresh() {
      console.log('refresh');
      setTimeout(function () {
        wx.stopPullDownRefresh();
      }, 1000);
    },
    navigateToPv() {
      wx.navigateTo({
        url: '../pv/index'
      })
    },
    navigateToClick() {
      wx.navigateTo({
        url: '../click/index'
      })
    },
    navigateToCustom() {
      wx.navigateTo({
        url: '../custom/index'
      })
    },
    navigateToVT() {
      wx.navigateTo({
        url: '../vt/index'
      })
    },
    navigateToExposure() {
      wx.navigateTo({
        url: '../exposure/index'
      })
    },
    navigateToSetting() {
      wx.navigateTo({
        url: '../setting/index'
      })
    }
  }
}
</script>

<style lang="less">
.uniapp {
  min-height: 100vh;
  background-color: rgb(235, 237, 243);
  overflow: hidden;
  .uniapp-view {
    display: flex;
    justify-content: space-between;
    margin: 20px 3% 0;
    padding: 2%;
    background-color: #fff;
    -webkit-box-shadow: #ccc 0px 0px 10px; 
    -moz-box-shadow: #ccc 0px 0px 10px;
    font-size: 16px;
    .uni-full {
      width: 100%;
    }
    .uni-left{
      width: 40%;
      text-align: center;
      border: 1px dashed #ccc;
      display: flex;
      align-items: center;
      button {
        line-height: 30px;
        padding: 0;
      }
    }
    .uni-right{
      width: 60%;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      button {
        width: 88%;
        line-height: 37px;
        margin: 5px 0;
        font-size: 14px;
      }
      .uni-tip {
        width: 88%;
      }
    }
    .uni-tracker-env {
      margin: 4px 0;
      border: 1px solid #d0d1d2;
      width: 100%;
      height: 30px;
      box-sizing: border-box;
      padding: 0 4px;
      font-size: 14px;
    }
  }
}

</style>