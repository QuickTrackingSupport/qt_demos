import React, { Component } from "react";
import { View, Button, Textarea } from "remax/wechat";
// import "./index.less";
import { setMetaInfo, appendMetaInfo, record } from "../../utils/aplus_api";

export default class Setting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gpValue: "",
      upValue: "",
      puid: "testUserId",
    };
  }

  // 页面分享事件日志上报时，需注册该方法
  onShareAppMessage() {}

  onGPInput = (event) => {
    try {
      let gp = this.toJSONString(event.detail.value);
      this.setState({
        gpValue: gp,
      });
    } catch (e) {}
  };

  onUPInput = (event) => {
    try {
      let up = this.toJSONString(event.detail.value);
      this.setState({
        upValue: up,
      });
    } catch (e) {}
  };

  onPuidInput = (event) => {
    this.setState({
      puid: event.detail.value,
    });
  };

  toJSONString = (input) => {
    const keyMatcher = '([^",{}\\s]+?)';
    const valMatcher = "(.,*)";
    const matcher = new RegExp(`${keyMatcher}\\s*:\\s*${valMatcher}`, "g");
    const parser = (match, key, value) => `"${key}":${value}`;
    return input.replace(matcher, parser);
  };

  render() {
    const { gpValue, upValue, puid } = this.state;
    return (
      <View className="component">
        <View className="basic-view">配置全局属性</View>

        <Textarea
          value={gpValue}
          onInput={this.onGPInput}
          className="container"
          autoHeight
          placeholder="输入框内要求文本为JSON格式；支持js基本类型，globalpropery配置后会跟着每条日志上报，eg: {a, 1, b: 2} or [1, 2, 3, 4, 5] 不支持多层嵌套"
          style={{
            minHeight: "100px",
          }}
        />
        <View style={{ display: "flex" }}>
          <View className="wrapper">
            <Button
              onClick={() => {
                // 全局属性原有的{a: 1, b: 2}被覆盖
                setMetaInfo("globalproperty", {
                  ...JSON.parse(gpValue),
                });
              }}
            >
              覆盖gp
            </Button>
          </View>
          <View className="wrapper">
            <Button
              onClick={() => {
                // 全局属性原有的{a: 1, b: 2}仍保留，追加为{a: 1, b: 2, ccc: 3, ddd: 4}
                appendMetaInfo("globalproperty", {
                  ...JSON.parse(gpValue),
                });
              }}
            >
              更新gp
            </Button>
          </View>
        </View>

        <View className="basic-view">配置用户属性</View>

        <View className="wrapper">
          注意：设置用户属性前，一定要上传用户账号
        </View>
        <Textarea
          value={puid}
          onInput={this.onPuidInput}
          className="container"
          autoHeight
          placeholder="上传用户账号代码"
          style={{
            minHeight: "100px",
          }}
        />

        <View className="wrapper">
          <Button
            onClick={() => {
              setMetaInfo("$$_user_id", puid);
            }}
            style={{
              width: 180,
            }}
          >
            设置用户账号
          </Button>
        </View>
        <Textarea
          value={upValue}
          onInput={this.onUPInput}
          className="container"
          autoHeight
          placeholder="请填写用户属性，支持js object对象，仅支持一级kv结构"
          style={{
            minHeight: "100px",
          }}
        />

        <View className="wrapper">
          <Button
            onClick={() => {
              record("$$_user_profile", "OTHER", {
                ...JSON.parse(upValue),
              });
            }}
            style={{
              width: 180,
            }}
          >
            设置用户属性
          </Button>
        </View>
      </View>
    );
  }
}
