<template>
    <div class="setting">
        <div class="setting-all">
            <view>配置全局属性</view>
            <textarea auto-height placeholder="支持js基本类型，globalpropery配置后会跟着每条日志上报，eg: {a, 1, b: 2} or [1, 2, 3, 4, 5] 不支持多层嵌套"/>
            <div class="setting-btn">
                <button type="primary">覆盖gp</button>
                <button type="primary">更新gp</button>
            </div>
        </div>
        <div class="setting-user">
            <view>配置用户属性</view>
            <div class="user-account">
                <text>注意： 设置用户属性前，一定要上传用户账号</text>
                <textarea auto-height placeholder="上传用户账号代码"/>
            </div>
            <div class="user-event">
                <text>用户属性跟随$$_user_profile自定义事件上报</text>
                <textarea auto-height placeholder="$$_user_profile自定义事件代码"/>
            </div>
            <button type="primary">设置用户属性前</button>
        </div>
    </div>
</template>

<script>

export default {
  data () {
    return {
    }
  },
  components: {
  },
  methods: {
  },

  created () {
    // let app = getApp()
  }
}
</script>

<style scoped>
.setting {
    padding: 20px 3%;
}
.setting-all textarea {
    width: 96%;
    min-height: 60px;
    padding: 18rpx 2%;
    margin: 10px 0;
    font-size: 28rpx;
    background: #ccc;
    color: #000
}
.setting-btn {
    display: flex;
}
.setting-btn button {
    width: 110px;
    margin: 0 10px 30px 0;
}
.setting-user view{
    line-height: 40px;
}
.setting-user text {
    font-size: 16px;
    line-height: 32px;
}
.setting-user textarea{
    width: 96%;
    min-height: 60px;
    padding: 18rpx 2%;
    margin: 10px 0;
    font-size: 28rpx;
    background: #ccc;
    color: #000
}
.setting-user button {
    width: 173px;
    margin: 0;
}
</style>
