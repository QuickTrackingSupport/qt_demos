import React, { Component } from "react";
import { View, Image, Button } from "remax/wechat";
import { record } from "../../utils/aplus_api";
// import "./index.less";

export default class Custom extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  // 页面分享事件日志上报时，需注册该方法
  onShareAppMessage() {}

  render() {
    return (
      <View className="component">
        <View
          className="container"
          style={{
            display: "flex",
            alignItems: "flex-end",
          }}
        >
          <View
            style={{
              width: "60%",
            }}
          >
            <Image
              style={{ width: "100%" }}
              src="https://gd1.alicdn.com/imgextra/i4/2207297515629/O1CN01W5rDzt1rS89qNHD1f_!!2207297515629.jpg_400x400.jpg"
            ></Image>
          </View>
          <View
            style={{
              width: "40%",
            }}
          >
            <View>商品名称: 床头灯</View>
            <View>颜色: 黄色</View>
            <View>商品ID: 003</View>
          </View>
        </View>

        <View style={{ display: "flex", justifyContent: "space-around" }}>
          <View className="wrapper">
            <Button
              onClick={() => {
                record("test_other_ekv", "OTHER", {
                  a: 1, b:2, c: 3
                });
              }}
            >
              点击购买
            </Button>
          </View>
        </View>
      </View>
    );
  }
}
