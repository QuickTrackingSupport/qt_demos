<template>
	<view>
		<button type="primary" @tap="navigateToPrePage">上一页</button>
		<button type="primary" @tap="navigateToPage2">下一页</button>
	</view>
</template>

<script>
	// #ifdef APP
	const UmengAnalytics = uni.requireNativePlugin('UmengAnalytics')
	// #endif 
	import UmengSDK from '../../utils/umengAdaptor.js'
	export default {
		onShow() {
			// #ifdef APP-PLUS
				UmengAnalytics.onPageStart('Page1')
			// #endif
			
			// #ifdef MP | H5
			//允许自定义页面编码 page_name
			UmengSDK.sendPV({a: 1, b: 2, c: 3, page_name: 'manpv_page_custom', d: undefined, e: null, f: ''})
			// #endif
		},
		onHide() {
			// #ifdef APP-PLUS
				UmengAnalytics.onPageEnd('Page1')
			// #endif
		},
		onUnload() {
			// #ifdef APP-PLUS
				UmengAnalytics.onPageEnd('Page1')
			// #endif
		},
		data() {
			return {
				
			}
		},
		methods: {
			navigateToPrePage: function() {
				uni.navigateBack({
					
				});
			},
			navigateToPage2: function() {
				uni.navigateTo({
					url: '../page2/page2'
				});
			}
		}
	}
</script>

<style>

</style>
