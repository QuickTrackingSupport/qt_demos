import React, { Component } from 'react';
import { View, Button, TextInput } from "react-native";
// import "./index.less";
import { setMetaInfo, appendMetaInfo } from '../../utils/aplus_api';

export default class Setting extends Component {
  constructor(props: any) {
    super(props);
    this.state = {
      gpValue: '',
      upValue: ''
    };
  }

  state: any

  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  // 页面分享事件日志上报时，需注册该方法
  // onShareAppMessage() {}
  onGPInput = (value: string) => {
    this.setState({
      gpValue: value
    })
  }

  onUPInput = (value: any) => {
    this.setState({
      upValue: value
    })
  }

  render() {
    const { gpValue, upValue }:any = this.state;
    return (
      <View className="component">
        <View className="basic-view">配置全局属性</View>

        <TextInput
          editable
          maxLength={40}
          multiline
          numberOfLines={4}
          onChangeText={(text:string) => this.onGPInput(text)}
          value={this.state.gpValue}
          style={{
            padding: 10,
            minHeight: 100
          }}
          // value={gpValue}
          // onInput={this.onGPInput}
          className="container"
          autoHeight 
          placeholder="输入框内要求文本为JSON格式；支持js基本类型，globalpropery配置后会跟着每条日志上报，eg: {a, 1, b: 2} or [1, 2, 3, 4, 5] 不支持多层嵌套" 
        />
        <View style={{display: 'flex'}}>
          <View className="wrapper"><Button title={'覆盖gp'} onClick={() => {
            // 全局属性原有的{a: 1, b: 2}被覆盖
            setMetaInfo('globalproperty', {
              ...JSON.parse(gpValue)
            })
          }}></Button></View>
          <View className="wrapper"><Button title={'更新gp'} onClick={() => {
            // 全局属性原有的{a: 1, b: 2}仍保留，追加为{a: 1, b: 2, ccc: 3, ddd: 4}
            appendMetaInfo('globalproperty', {
              ...JSON.parse(gpValue)
            })
          }}></Button></View>
        </View>


        <View className="basic-view">配置用户属性</View>

        <View className="wrapper">注意：设置用户属性前，一定要上传用户账号</View>
        <TextInput
          editable
          maxLength={40}
          multiline
          numberOfLines={4}
          onChangeText={(text:string) => this.onGPInput(text)}
          // value={this.state.gpValue}
          style={{
            padding: 10,
            minHeight: 100
          }}
          // value={gpValue}
          // onInput={this.onGPInput}
          className="container"
          autoHeight 
          placeholder="上传用户账号代码" 
        />

        <View className="wrapper">用户属性跟随$$_user_profile自定义事件上报</View>
        <TextInput
          editable
          maxLength={40}
          multiline
          numberOfLines={4}
          onChangeText={(text:string) => this.onUPInput(text)}
          value={this.state.upValue}
          style={{
            padding: 10,
            minHeight: 100
          }}
          // onInput={this.onGPInput}
          className="container"
          autoHeight 
          placeholder="$$_user_profile自定义事件代码" 
        />

        <View className="wrapper"><Button title="设置用户属性"></Button></View>

      </View>
    );
  }
}