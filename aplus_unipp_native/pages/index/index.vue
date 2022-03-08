<template>
  <div class="uniapp">
    <view class="uniapp-view">
	<!-- #ifdef APP-PLUS -->
	<section class="uni-left">SDK集成</section>
	<section class="uni-right">
	  <p class="uni-tip">非常重要,<br/>直接影响数据是否发送</p>
	  <button type="default" class="uni-viewcode" @tap="navigateToCode">模拟授权弹窗情况</button>
	</section>
	<!-- #endif -->
    <!-- #ifdef MP -->
    <section class="uni-left">SDK引入&_anony_id引入</section>
	<section class="uni-right">
	<p class="uni-tip">非常重要,<br/>直接影响数据是否发送</p>
	<p class="uni-tip">集成代码详情请见utils目录下aplus.js文件!!</p>
	</section>
    <!-- #endif -->
	<!-- #ifdef H5 -->
	<section class="uni-left">SDK引入</section>
	<section class="uni-right">
	<p class="uni-tip">非常重要,<br/>直接影响数据是否发送</p>
	<p class="uni-tip">集成代码详情请见index.html文件</br>head标签内aplus集成script</p>
	</section>
	<!-- #endif -->
      
    </view>
    <view class="uniapp-view">
      <section class="uni-left">根据埋点方案进行事件埋点</section>
      <section class="uni-right">
        <button type="primary" @tap="navigateToPv">页面浏览事件</button>
		<!-- #ifdef APP -->
		<button type="primary" @tap="navigateToClick">自定义事件</button>
		<!-- #endif -->
		<!-- #ifdef MP | H5 -->
		<button type="primary" @tap="navigateToClick">点击事件</button>
		<button type="primary" @tap="navigateToExposure">曝光事件</button>
		<button type="primary" @tap="navigateToCustom">自定义事件</button>
		<!-- #endif -->
      </section>
    </view>
    <view class="uniapp-view">
      <section class="uni-left">按需设置全局/用户属性</section>
      <section class="uni-right">
        <button type="primary" class="uni-setting" @tap="navigateToSetting">设置全局/用户属性</button>
      </section>
    </view>
  </div>
</template>

<script>
// #ifdef APP
const UmengAnalytics = uni.requireNativePlugin('UmengAnalytics')
// #endif

export default {
  methods: {
    navigateToCode() {
      uni.showModal({
		title: '授权隐私弹窗',
		content: '仅native环境下需要',
      	confirmText:'同意',
		cancelText:'取消',
		success(res) {
			if(res && res.confirm) {
				uni.setStorageSync('user_authed', true);
				// #ifdef APP-PLUS
				UmengAnalytics.init('testappkey', 'testChannel', 1, '');
				// #endif
			} else {
				uni.setStorageSync('user_authed', false);
			}
		},
		fail(err) {
			console.log('yz----err', err);
		}
      })
    },
    navigateToPv() {
      uni.navigateTo({
        url: '/pages/page1/page1'
      })
    },
    navigateToClick() {
      uni.navigateTo({
        url: '/pages/click/click'
      })
    },
	// #ifdef MP | H5
	navigateToCustom() {
	  uni.navigateTo({
	    url: '/pages/custom/custom'
	  })
	},
	navigateToExposure() {
	  uni.navigateTo({
	    url: '/pages/exposure/exposure'
	  })
	},
	// #endif
    navigateToSetting() {
      uni.navigateTo({
        url: '/pages/setting/index'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
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
  }
}

</style>