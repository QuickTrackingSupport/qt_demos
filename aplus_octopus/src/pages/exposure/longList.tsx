import React, { Component } from 'react';
import {
  View
} from "react-native";
import { onAplusTouch } from '../../utils/aplus_api';
// import "./index.less";

function buildData (offset = 0) {
  return Array(10).fill(0).map((_, i) => i + offset);
}

const Row = React.memo(({ id, index, style, data }: any) => {
  return (
    <View 
      id={id} 
      className="LongListItem" 
      data-keyword={`关键词${index}`}
      style={{
        ...style,
        display: 'flex',
        justifyContent: 'space-around'
      }}
    >
      {/* Row {index} : {data[index]} */}
      <View>
        Row {index} : {data[index]}
      </View>
      <View>
        Row-copy {index} : {data[index]}
      </View>
    </View>
  );
})

export default class ExposureLL extends Component {
  constructor(props: any) {
    super(props);
    this.state = {
      data: buildData(0)
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
    const { data }:any = this.state;
    return (
      <View 
        className="component" 
        // onTouchStart={onAplusTouch}
      >
        <View className="basic-view">自动曝光--长列表</View>
        <View>
          {data.map((d: any) => {
            return <Row id={d} index={d} style={{paddingTop: 40, paddingBottom: 40 }} data={d}/>
          })}
        </View>
      </View>
    );
  }
}