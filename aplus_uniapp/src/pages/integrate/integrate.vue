<template>
    <div class="sdk-integrate">
        <div class="sdk-title">SDK集成代码</div>
        <div class="sdk-code"><img src="https://img.alicdn.com/imgextra/i2/O1CN01lrPuDV26Gsg57P7tP_!!6000000007635-2-tps-1494-646.png" alt=""></div>
        <div class="sdk-tips" v-for="(item, key) in tips" :key="key">{{item.text}}</div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            tips: [
                {text: '注意：'},
                {text: '1. appkey: 要填写您平台对应的appkey'},
                {text: '2. aplus-rhost-v: 需填写您的收数域名'},
                {text: '3. _anony_id: 务必填写'}
            ]
        }
    },
    computed: {

    }
}
</script>

<style lang="scss" scoped>
.sdk-integrate {
    padding: 30px 5%;
}
.sdk-title {
    font-size: 24px;
    line-height: 48px;
}
.sdk-code  {
    margin: 10px 0 20px;
    img {
        width: 100%;
    }
}
.sdk-tips {
    font-size: 16px;
    line-height: 30px;
}
</style>