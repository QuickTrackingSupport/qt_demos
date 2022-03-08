<template>
    <div class="event-pv">
        <div class="pv-title">页面浏览事件（PV）</div>
        <div class="pv-tip">
            <ul>
                <li>默认为页面页面浏览事件自动采集，如需关闭自动，需配置aplus-waiting=“MAN”，手动控制发送pv</li>
                <li>自动采集的页面浏览事件中，页面编码为path路径，日志发送时间为页面消失，点击“返回”按钮可以看到上报日志。</li>
            </ul>
        </div>
        <div class="pv-btn">
            <button type="primary" @tap="sendPv">手动pv事件 页面编码"manpv_page_custom"</button>
            <view>手动采集的页面浏览事件中，页面编码为自定义值，使用page_name字段设置。</view>
        </div>
    </div>
</template>

<script>
import { sendPV } from "../../utils/aplus_api";
export default {
    methods: {
        sendPv: function() {
            console.log('yz-----sendPV');
            sendPV({
                //非必传参数
                page_name: "manpv_page_custom", //您当前页面的自定义页面编码
                duration: "111111", // 手动pv,duration信息需要您自己计算
                // 自定义PV参数key-value键值对
                x: 111,
                y: 222,
                a: 1, b: 2, c: 3
            });
        }
    }
}
</script>

<style lang="less">
.event-pv {
    padding: 30px 3%;
}
.pv-title {
    font-size: 24px;
    line-height: 48px;
}
.pv-tip  {
    font-size: 16px;
    line-height: 22px;
    view {
        margin: 10px 0;
    }
}
.pv-btn {
    button {
        width: 216px;
        line-height: 35px;
        margin: 45px 0 15px;
    }
    view {
        font-size: 16px;
        line-height: 22px;
    }
}
</style>