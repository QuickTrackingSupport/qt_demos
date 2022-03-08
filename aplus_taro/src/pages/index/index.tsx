import React, { Component } from "react";
import Taro from "@tarojs/taro";
import { View, Button, Input } from "@tarojs/components";
import "./index.less";

export default class Index extends Component {
  constructor(props: any) {
    super(props);
    this.state = {
      aplusRhostV: '',
      aplusApiHost: '',
      aplusVtCfgUrl: '',
      appKey: '',
      appInfoId: '',
    };
  }

  state: any

  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  // 页面分享事件日志上报时，需注册该方法
  onShareAppMessage() {}

  handlerDomainChange = (e) => {
    this.setState({
      aplusRhostV: e.detail.value.trim()
    });
  }
  handlerSysDomainChange = (e) => {
    this.setState({
      aplusApiHost: e.detail.value.trim()
    });
  }
  handlerVtURLChange = (e) => {
    this.setState({
      aplusVtCfgUrl: e.detail.value.trim()
    });
  }
  handlerAppKeyChange = (e) => {
    this.setState({
      appKey: e.detail.value.trim()
    });
  }
  handlerAppInfoIdChange= (e) => {
    this.setState({
      appInfoId: e.detail.value.trim()
    });
  }

  navigateToSubmit = () => {
    const { aplusRhostV = '', aplusApiHost = '', aplusVtCfgUrl = '', appKey = '', appInfoId = '' } = this.state;
    Taro.setStorageSync('__trackerInfo', {
      aplusRhostV,
      aplusApiHost,
      aplusVtCfgUrl,
      appKey,
      appInfoId
    });
    return;
  }

  clickHandle = (path: any) => {
    Taro.navigateTo({
      url: path,
    });
  };

  render() {
    const { aplusRhostV, appKey, aplusVtCfgUrl, aplusApiHost, appInfoId } = this.state;
    return (
      <View className="component index">
        <View className="basic-view">SDK集成流程说明</View>

        <View className="container taro-view">
          <View className="taro-left">SDK引入&_anony_id引入</View>
          <View className="taro-right">
            <View className="taro-tip">
              非常重要，
              <br />
              直接影响数据是否发送
            </View>
            <Button
              className="button"
              onClick={() => this.clickHandle("../integrate/integrate")}
            >
              点击查看集成代码
            </Button>
          </View>
        </View>

        <View className="container taro-view">
          <View className="taro-left">根据埋点方案进行事件埋点</View>
          <View className="taro-right">
            <Button
              className="button"
              onClick={() => this.clickHandle("../pv/pv")}
            >
              页面浏览事件
            </Button>
            <Button
              className="button"
              onClick={() => this.clickHandle("../click/click")}
            >
              点击事件
            </Button>
            <View
              className="button"
              style={{
                border: "1px dashed #ccc",
                padding: "4px",
              }}
            >
              曝光事件
              <Button
                className="button button-children"
                onClick={() => this.clickHandle("../exposure/swiper")}
              >
                曝光事件--轮播图
              </Button>
              <Button
                className="button button-children"
                onClick={() => this.clickHandle("../exposure/virtualList")}
              >
                曝光事件--虚拟列表
              </Button>
              <Button
                className="button button-children"
                onClick={() => this.clickHandle("../exposure/longList")}
              >
                曝光事件--长列表
              </Button>
            </View>
            <Button
              className="button"
              onClick={() => this.clickHandle("../custom/custom")}
            >
              自定义事件
            </Button>
            <Button
              className="button"
              onClick={() => this.clickHandle("../vt/vt")}
            >
              去看可视化demo
            </Button>
            
          </View>
        </View>

        <View className="container taro-view">
          <View className="taro-left">按需设置全局/用户属性</View>
          <View className="taro-right">
            <Button
              className="button"
              onClick={() => this.clickHandle("../setting/setting")}
            >
              设置全局/用户属性
            </Button>
          </View>
        </View>

        <View className="demo-view container">
          <View className="demo-full">
            收数域名：<Input type="text" className="uni-tracker-env"  value={aplusRhostV} onInput={this.handlerDomainChange} />
            appKey：<Input type="text" className="uni-tracker-env" value={appKey} onInput={this.handlerAppKeyChange} />
            可视化配置URL：<Input type="text" className="uni-tracker-env" value={aplusVtCfgUrl} onInput={this.handlerVtURLChange} />
            QT系统域名：<Input type="text" className="uni-tracker-env" value={aplusApiHost} onInput={this.handlerSysDomainChange} />
            appInfoId：<Input type="text" className="uni-tracker-env" value={appInfoId} onInput={this.handlerAppInfoIdChange} />
            <Button className="uni-viewcode button" onClick={this.navigateToSubmit}>更新可视化配置</Button>
          </View>
        </View>
      </View>
    );
  }
}
