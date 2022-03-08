import React, { Component } from "react";
import { View, Image } from "remax/wechat";
import { onAplusTouch } from "../../utils/aplus_api";
// import "./index.less";

const image = {
  src: "https://img.alicdn.com/imgextra/i4/856481861/O1CN01JAGKVB1PcNgi1o1VJ_!!856481861-0-daren.jpg_120x120.jpg",
  title: "背包",
  price: "$ 40",
};

function buildData(offset = 0) {
  return Array(10)
    .fill(0)
    .map((_, i) => i + offset);
}

const Row = React.memo(({ id, index, style, data }) => {
  return (
    <View
      id={id}
      className="LongListItem"
      data-index={`list_index_${index}`}
      data-name={`list_name_${index}`}
      style={{
        ...style,
        display: "flex",
        justifyContent: "space-around",
      }}
    >
      <View
        style={{
          padding: 20,
          background: "#fff",
          textAlign: "center",
        }}
      >
        <Image
          src={image.src}
          style={{
            width: 140,
            height: 140,
          }}
        />
        <View>{`${image.title} No.${index}`}</View>
        <View>{image.price}</View>
      </View>
      <View
        style={{
          padding: 20,
          background: "#fff",
          textAlign: "center",
        }}
      >
        <Image
          src={image.src}
          style={{
            width: 140,
            height: 140,
          }}
        />
        <View>{`${image.title} No.${index}`}</View>
        <View>{image.price}</View>
      </View>
    </View>
  );
});

export default class ExposureLL extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: buildData(0),
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
    const { data } = this.state;
    return (
      <View
        className="component"
        // onTouchStart={onAplusTouch}
      >
        <View className="basic-view">自动曝光--长列表</View>
        <View>
          <View>
            {data.map((d) => {
              return (
                <Row id={d} index={d} style={{ padding: "40px 0" }} data={d} />
              );
            })}
          </View>
        </View>
      </View>
    );
  }
}
