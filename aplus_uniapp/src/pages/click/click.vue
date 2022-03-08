<template>
    <div class="event-click" @tap.native.stop="onAplusClk">
        <div class="click-detail">
            <img src="https://gd1.alicdn.com/imgextra/i4/2207297515629/O1CN01W5rDzt1rS89qNHD1f_!!2207297515629.jpg_400x400.jpg" alt=""/>
            <view>
                <p>{{'商品名称'}}: {{detail.product}}</p>
				<p>{{'商品颜色'}}: {{detail.productColor}}</p>
				<p>{{'商品ID'}}: {{detail.productId}}</p>
            </view>
        </div>
        <div class="click-purchase">
            <button class="test_auto_clk" type="default" :data-product="detail.product" :data-productColor="detail.productColor" :data-productId="detail.productId">点击购买(自动)</button>
            <button type="default" @tap="clickEvent">点击购买(手动)</button>
        </div>
    </div>
</template>

<script>
import UmengSDK from '../../../utils/umengAdaptor'
export default {
    data() {
        return {
            detail: {
                product: '水杯',
				productColor: '黄色',
				productId: '003'
            }
        }
    },
    methods: {
        clickEvent: function() {			
			// #ifdef MP | H5
			UmengSDK.sendEvent('test_man_clk', this.detail, 'CLK');
			// #endif
		},
        // #ifdef MP
		onAplusClk: function(e) {
			const { aplus_queue } = this.$aplus;
			aplus_queue.push({
				action: 'aplus.aplus_pubsub.publish',
				arguments: ['onAplusClk', {
				  status: 'ready',
				  event: e,
				  context: this
				}]
			})
		}
		// #endif
    }
}
</script>

<style lang="scss" scoped>
.event-click {
    padding: 30px 5%;
}
.click-detail {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin: 30px 0 50px;
    img {
        width: 50%;
        height: 180px;
    }
    view {
        font-size: 18px;
        line-height: 30px;
    }
}
.click-purchase {
    display: flex;
    justify-content: space-between;
    button {
        width: 48%;
        margin: 0;
        font-size: 16px;
    }
}
</style>