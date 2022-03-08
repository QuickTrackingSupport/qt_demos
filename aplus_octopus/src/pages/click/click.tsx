import React, { Component } from 'react';
import { View, Image, Button } from "react-native";
import { onAplusClk, record } from '../../utils/aplus_api';
// import "./index.less";

export default class Click extends Component {
  constructor(props: any) {
    super(props);
    this.state = {};
  }

  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  // 页面分享事件日志上报时，需注册该方法
  // onShareAppMessage() {}

  render() {
    return (
      <View className="component" onClick={onAplusClk}>
        <View 
          className="container"
          style={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'row'
          }}
        >
          <View style={{
            width: '60%'
          }}>
            <Image style={{ width: '100%' }} src="https://gd1.alicdn.com/imgextra/i4/2207297515629/O1CN01W5rDzt1rS89qNHD1f_!!2207297515629.jpg_400x400.jpg"></Image>
          </View>
          <View style={{
            width: '40%'
          }}>
            <View>商品名称: 床头灯</View>
            <View>颜色: 黄色</View>
            <View>商品ID: 003</View>
          </View>
        </View>
        
        <View style={{display: 'flex'}}>
          <View className="wrapper auto-click" data-keyword="auto-click"><Button title={"点击购买(自动)"}></Button></View>
          <View className="wrapper"><Button title={"点击购买(手动)"} onPress={() => {
            record('/ClickToBuy', 'CLK', {
              productName: '床头灯',
              price: '100'
            })
          }}></Button></View>
        </View>
      </View>
    );
  }
}