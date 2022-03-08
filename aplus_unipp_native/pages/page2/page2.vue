<template>
	<view>
		<button type="primary" @tap="navigateToPrePage">上一页</button>
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
		UmengAnalytics.onPageStart('Page2')
		// #endif
		UmengSDK.sendPV({a: 1, b: 2, c: 3, page_name: 'manpv_page_custom', d: undefined, e: null, f: ''})
	},
	onHide() {
		// #ifdef APP-PLUS
			UmengAnalytics.onPageEnd('Page2')
		// #endif
	},
	onUnload() {
		// #ifdef APP-PLUS
			UmengAnalytics.onPageEnd('Page2')
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
	}
}
</script>

<style>

</style>
