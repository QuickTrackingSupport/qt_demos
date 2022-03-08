import React, { Component } from "react";
import { View, Button } from "remax/wechat";
import { sendPV } from "../../utils/aplus_api";
// import "./index.less";

export default class Pv extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  // 页面分享事件日志上报时，需注册该方法
  onShareAppMessage() {}

  render() {
    return (
      <View className="component">
        <View className="basic-view">页面浏览事件PV</View>

        <View className="wrapper">
          默认为页面页面浏览事件自动采集，如需关闭自动，需配置aplus-waiting=“MAN”，手动控制发送pv
        </View>
        <View className="wrapper">
          自动采集的页面浏览事件中，页面编码为path路径，日志发送时间为页面消失，点击“返回”按钮可以看到上报日志。
        </View>

        <View className="wrapper">
          <Button
            onClick={() => {
              sendPV({
                //非必传参数
                page_name: "manpv_page_custom", //您当前页面的自定义页面编码
                duration: "111111", // 手动pv,duration信息需要您自己计算
                // 自定义PV参数key-value键值对
                x: 111,
                y: 222,
                a: 1, b: 2, c: 3
              });
            }}
          >
            手动pv事件 页面编码"manpv_page_custom"
          </Button>
        </View>

        <View className="wrapper">
          手动采集的页面浏览事件中，页面编码为自定义值，使用page_name字段设置。
        </View>
      </View>
    );
  }
}
