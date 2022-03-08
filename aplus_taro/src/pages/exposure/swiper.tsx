import React, { Component } from "react";
import Taro from "@tarojs/taro";
import { View, Swiper, SwiperItem, Image } from "@tarojs/components";
import { onAplusTouch } from "../../utils/aplus_api";
// import "./index.less";

export default class Exposure extends Component {
  constructor(props: any) {
    super(props);
    this.state = {
      background: [
        "https://img.alicdn.com/imgextra/i1/2206686532409/O1CN01RpyDxW1TfMmVzxeBq_!!2206686532409-0-lubanimage.jpg",
        "https://img.alicdn.com/imgextra/i1/2206686532409/O1CN01ToF1WN1TfMmftyHpo_!!2206686532409-0-lubanimage.jpg",
        "https://aecpm.alicdn.com/simba/img/TB15tIjGVXXXXcoapXXSutbFXXX.jpg",
      ],
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
    const { background }: any = this.state;
    return (
      <View
        className="component"
        // onTouchStart={onAplusTouch}
      >
        <View className="basic-view">自动曝光--轮播</View>
        <View>
          <Swiper autoplay indicatorDots>
            {background.map((bg: any, idx: any) => {
              return (
                <SwiperItem
                  style={{
                    width: "100%",
                    height: "100%",
                  }}
                >
                  <Image
                    data-keyword={`banner-item-${idx}`}
                    className="banner-item"
                    key={idx}
                    data-index={`banner_index_${idx}`}
                    src={bg}
                    style={{
                      width: "100%",
                      height: "100%",
                    }}
                  />
                </SwiperItem>
              );
            })}
          </Swiper>
        </View>
      </View>
    );
  }
}
