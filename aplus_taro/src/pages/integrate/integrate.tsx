import React, { Component } from "react";
import Taro from "@tarojs/taro";
import {
  View,
  Text,
  Swiper,
  SwiperItem,
  Block,
  Image,
  Input,
  Button,
} from "@tarojs/components";
// import "./index.less";

export default class Integrate extends Component {
  constructor(props: any) {
    super(props);
    this.state = {
      userId: "",
      params: "",
      keyword: "",
    };
  }

  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  // 页面分享事件日志上报时，需注册该方法
  onShareAppMessage() {}

  render() {
    // const {  } = this.state;
    return (
      <View className="component">
        <View className="basic-view">SDK集成代码</View>

        <View className="container">
          <Image
            className="integrate-image"
            src="https://img.alicdn.com/imgextra/i2/O1CN01lrPuDV26Gsg57P7tP_!!6000000007635-2-tps-1494-646.png"
          />
        </View>

        <View className="wrapper">
          <View>注意</View>
          <View>1. appkey: 要填写您平台对应的appkey</View>
          <View>2. aplus-rhost-v: 需填写您的收数域名</View>
          <View>3. _anony_id: 务必填写</View>
        </View>
      </View>
    );
  }
}
