<template>
  <div class="setting">
    <div class="setting-all">
      <view>配置全局属性</view>
      <textarea
        auto-height
        placeholder="支持js基本类型，globalpropery配置后会跟着每条日志上报，eg: {a, 1, b: 2} or [1, 2, 3, 4, 5] 不支持多层嵌套"
        @input="onGlobalPropertiesChanged"
        :value="JSON.stringify(gp)"
      />
      <div class="setting-btn">
        <button class="btn-gp" type="primary" @tap="registerGP">覆盖gp</button>
      </div>
    </div>
    <div class="setting-user">
      <view>配置用户属性</view>
      <div class="user-account">
        <text>注意： 设置用户属性前，一定要上传用户账号</text>
        <textarea
          auto-height
          placeholder="上传用户账号代码"
          @input="onUserIdChanged"
          :value="puid"
        />
      </div>
      <button class="btn-user" type="primary" @tap="setUserId">
        设置用户账号
      </button>
      <div class="user-event">
        <text>用户属性跟随$$_user_profile自定义事件上报</text>
        <textarea
          auto-height
          placeholder="请填写用户属性，支持js object对象，仅支持一级kv结构"
          @input="onUserPropertiesChanged"
          :value="JSON.stringify(up)"
        />
      </div>
      <button type="primary" @tap="setUserProfile">设置用户属性</button>
    </div>
  </div>
</template>

<script>
import { setMetaInfo, record } from '../../utils/aplus_api';
export default {
  data() {
    return {
      title: "textarea",
      puid: "testUserId",
      up: { a: 1, b: 2 },
      gp: { a: 1, b: 2, c: "3", from: "uniapp" },
    };
  },
  methods: {
    onGlobalPropertiesChanged(e) {
      try {
        console.log("yz--------json", e.target);
        let gp = this.toJSONString(e.target.value);
        console.log("yz------json", JSON.parse(gp));
        this.$set(this.$data, "gp", JSON.parse(gp));
      } catch (e) {}
    },
    registerGP() {
      console.log("yz----", JSON.stringify(this.gp));
      setMetaInfo('globalproperty', { ...this.gp });
    },
    onUserIdChanged(e) {
      try {
        this.$set(this.$data, "puid", e.target.value);
        console.log("puid", this.puid);
      } catch (e) {}
    },
    setUserId() {
      console.log("当前userid:", this.puid);
      setMetaInfo("$$_user_id", this.puid);
    },
    onUserPropertiesChanged(e) {
      try {
        console.log("yz--------json", e.target);
        let up = this.toJSONString(e.target.value);
        console.log("yz------json", JSON.parse(up));
        this.$set(this.$data, "up", JSON.parse(up));
      } catch (e) {}
    },
    setUserProfile() {
      console.log("yz-----", JSON.stringify(this.up));
      record('$$_user_profile', 'OTHER', this.up)
    },
    toJSONString(input) {
      const keyMatcher = '([^",{}\\s]+?)';
      const valMatcher = "(.,*)";
      const matcher = new RegExp(`${keyMatcher}\\s*:\\s*${valMatcher}`, "g");
      const parser = (match, key, value) => `"${key}":${value}`;
      return input.replace(matcher, parser);
    },
  },
};
</script>

<style lang="less">
.setting {
  padding: 20px 3%;
  .setting-all {
    textarea {
      width: 96%;
      min-height: 60px;
      padding: 18rpx 2%;
      margin: 10px 0;
      font-size: 28rpx;
      background: #ccc;
      color: #000;
    }
    .setting-btn {
      display: flex;
      .btn-gp {
        width: 173px;
        margin: 0 10px 30px 0;
      }
    }
  }
  .setting-user {
    view {
      line-height: 40px;
    }
    text {
      font-size: 16px;
      line-height: 32px;
    }
    textarea {
      width: 96%;
      min-height: 60px;
      padding: 18rpx 2%;
      margin: 10px 0;
      font-size: 28rpx;
      background: #ccc;
      color: #000;
    }
    button {
      width: 173px;
      margin: 0;
    }
  }
}
</style>
