<template>
    <div class="event-click">
        <div class="click-detail">
            <img src="https://gd3.alicdn.com/imgextra/i2/2211531630195/O1CN017hXbHI1DJLwcwlJIb_!!2211531630195.jpg_400x400.jpg"/>
            <view><p v-for="(item, index) in detail" :key="index">{{item.name}}: {{item.value}}</p></view>
        </div>
        <button class="click-purchase" type="default" @tap="otherEvent">点击购买</button>
    </div>
</template>

<script>
	import UmengSDK from '../../utils/umengAdaptor.js'
export default {
    data() {
        return {
            detail: [
                {name: '商品名称', value: '杯具'},
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
        height: 211px;
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