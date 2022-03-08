import React, { Component } from "react";
import Taro from "_@tarojs_taro@3.3.17@@tarojs/taro";
import VirtualList from "_@tarojs_components@3.3.17@@tarojs/components/virtual-list";
import { View, Image } from "_@tarojs_components@3.3.17@@tarojs/components";
// import "./index.less";

function buildData(offset = 0) {
  return Array(10)
    .fill(0)
    .map((_, i) => i + offset);
}

const image = {
  src: "https://img.alicdn.com/imgextra/i4/856481861/O1CN01JAGKVB1PcNgi1o1VJ_!!856481861-0-daren.jpg_120x120.jpg",
  title: "背包",
  price: "$ 40",
};

const Row = React.memo(({ id, index, style, data }: any) => {
  return (
    <View
      id={id}
      className="ListItem"
      style={{
        ...style,
        display: "flex",
        justifyContent: "space-around",
      }}
    >
      {/* Row {index} : {data[index]} */}
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
            width: 80,
            height: 80,
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
            width: 80,
            height: 80,
          }}
        />
        <View>{`${image.title} No.${index}`}</View>
        <View>{image.price}</View>
      </View>
    </View>
  );
});

export default class ExposureVL extends Component {
  constructor(props: any) {
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
    const { data }: any = this.state;
    const dataLen = data.length;
    return (
      <View className="component">
        <View className="basic-view">自动曝光--虚拟列表</View>
        <View>
          <VirtualList
            height={600}
            width="100%"
            itemData={data}
            itemCount={dataLen}
            itemSize={180}
          >
            {Row}
          </VirtualList>
        </View>
      </View>
    );
  }
}
