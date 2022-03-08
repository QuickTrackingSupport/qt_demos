import React, { Component } from 'react';
import {
  View,
  Button
} from "react-native";
import { navigator } from '@terminus/octopus-router';
import "./index.less";

export default class IndexHome extends Component {
  constructor(props: any) {
    super(props);
    this.state = {
    };
  }

  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  // 页面分享事件日志上报时，需注册该方法
  // onShareAppMessage(opts) {
  //   console.log('===> optsoptsopts', opts)
  // }
  clickHandle = (path: any) => {
    navigator.navigate(path, {sisanTest: '111'})
  }

  render() {
    return (
      <View className="component index">

        <View className="basic-view">SDK集成流程说明</View>

        <View className="container taro-view">
          <View className="taro-left">SDK引入&_anony_id引入</View>
          <View className="taro-right">
            <View className="taro-tip">非常重要，<br />直接影响数据是否发送</View>
            <Button className="button" title={"点击查看集成代码"} onPress={() => this.clickHandle('../integrate/integrate')}></Button>
          </View>
        </View>

        <View className="container taro-view">
          <View className="taro-left">根据埋点方案进行事件埋点</View>
          <View className="taro-right">
            <Button className="button" title={"页面浏览事件"} onPress={() => this.clickHandle('../pv/pv')}></Button>
            <Button className="button" title={"点击事件"} onPress={() => this.clickHandle('../click/click')}></Button>
            <View className="button" style={{
              border: '1px dashed #ccc',
              padding: '4px'
            }}>
              曝光事件
              <Button className="button button-children" title={"曝光事件--手动曝光"} onPress={() => this.clickHandle('../exposure/swiper')}></Button>
              <Button className="button button-children" title={"曝光事件--自动曝光"} onPress={() => this.clickHandle('../exposure/longList')}></Button>
            </View>
            <Button className="button" title={"自定义事件"} onPress={() => this.clickHandle('../custom/custom')}></Button>
          </View>
        </View>

        <View className="container taro-view">
          <View className="taro-left">按需设置全局/用户属性</View>
          <View className="taro-right">
            <Button className="button" title={"设置全局/用户属性"} onPress={() => this.clickHandle('../setting/setting')}></Button>
          </View>
        </View>

      </View>
    );
  }
}
