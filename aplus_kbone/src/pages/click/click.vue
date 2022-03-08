<template>
    <div class="event-click" v-on:click="onAplusClk">
        <div class="click-detail">
            <img src="https://gd1.alicdn.com/imgextra/i4/2207297515629/O1CN01W5rDzt1rS89qNHD1f_!!2207297515629.jpg_400x400.jpg" alt=""/>
            <view>
                <p>{{'商品名称'}}: {{detail.product}}</p>
				<p>{{'商品颜色'}}: {{detail.productColor}}</p>
				<p>{{'商品ID'}}: {{detail.productId}}</p>
            </view>
        </div>
        <div class="click-purchase">
            <button id="test_111" data-product="ceshi" class="auto-click" type="default" :data-product="detail.product" :data-productColor="detail.productColor" :data-productId="detail.productId">点击购买(自动)</button>
            <button type="default" @tap="clickEvent">点击购买(手动)</button>
        </div>
    </div>
</template>

<script>
import { onAplusClk, record } from "../../utils/aplus_api";
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
            record("ClickToBuy", "CLK", {
                product: "床头灯2",
                productColor: "黄色2",
                productId: "id222",
            });		
        },
        onAplusClk: function(e) {
            onAplusClk(e)
        }
    }
}
</script>

<style lang="less">
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