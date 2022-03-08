import React, { Component } from 'react';
import {
  View,
  StyleSheet
} from "react-native";
import { record } from '../../utils/aplus_api';
// import "./index.less";

const styles = StyleSheet.create({
  exp: {
    backgroundColor: '#fff',
    width: 200,
    lineHeight: 40,
    textAlign: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
    padding: '8px 16px'
  },
});
export default class Exposure extends Component {
  constructor(props: any) {
    super(props);
    this.state = {
      module: null
    };
  }

  componentWillMount() {}

  componentDidMount() {
    this.setState({
      module: (
        <View className="auto-view" style={styles.exp}>
          该模块将自动曝光
        </View>
      )
    })
  }

  componentDidUpdate(pProps, pState) {
    if(this.state.module) {
      record('/AutoExp', 'EXP', {
        autoExp: true
      })
    }
  }

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  // 页面分享事件日志上报时，需注册该方法
  // onShareAppMessage() {}

  render() {
    return (
      <View 
        className="component" 
        // onTouchStart={onAplusTouch}
      >
        <View className="basic-view">手动曝光</View>
        {this.state.module}
      </View>
    );
  }
}