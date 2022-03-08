<template>
    <div class="event-click">
        <div class="click-detail">
            <img src="https://gd1.alicdn.com/imgextra/i4/2207297515629/O1CN01W5rDzt1rS89qNHD1f_!!2207297515629.jpg_400x400.jpg" alt=""/>
            <view><p v-for="(item, index) in detail" :key="index">{{item.name}}: {{item.value}}</p></view>
        </div>
        <button class="click-purchase" type="default" @tap="otherEvent">点击购买</button>
    </div>
</template>

<script>
import UmengSDK from '../../../utils/umengAdaptor'
export default {
    data() {
        return {
            detail: [
                {name: '商品名称', value: '床头灯'},
                {name: '颜色', value: '黄色'},
                {name: '商品ID', value: '003'}
            ]
        }
    },
    methods: {
		otherEvent: function() {
			UmengSDK.sendEvent('test_other_ekv', {a: 1, b:2, c: 3}, 'OTHER');
		}
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
    width: 80%;
}
</style>