/**
 * 该组件未在demo中使用
 * 可移步至./swiper、./longList、./virtualList
 */
import React, { Component } from 'react';
import Taro from "_@tarojs_taro@3.3.17@@tarojs/taro";
import VirtualList from '_@tarojs_components@3.3.17@@tarojs/components/virtual-list';
import {
  View,
  Swiper,
  SwiperItem,
  Image,
} from "_@tarojs_components@3.3.17@@tarojs/components";

function buildData (offset = 0) {
  return Array(10).fill(0).map((_, i) => i + offset);
}

const Row = React.memo(({ id, index, style, data }: any) => {
  return (
    <View 
      id={id} 
      className="ListItem" 
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

export default class Exposure extends Component {
  constructor(props: any) {
    super(props);
    this.state = {
      background: [
        "https://img.alicdn.com/imgextra/i1/2206686532409/O1CN01RpyDxW1TfMmVzxeBq_!!2206686532409-0-lubanimage.jpg",
        "https://img.alicdn.com/imgextra/i1/2206686532409/O1CN01ToF1WN1TfMmftyHpo_!!2206686532409-0-lubanimage.jpg",
        "https://aecpm.alicdn.com/simba/img/TB15tIjGVXXXXcoapXXSutbFXXX.jpg",
      ],
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
    const { background, data }:any = this.state;
    const dataLen = data.length;
    return (
      <View 
        className="component" 
      >
        <View>
          <View style={{
            // height: '120vh'
          }}/>
          <View className="basic-view">自动曝光--轮播</View>
          <View>
            <Swiper autoplay indicatorDots>
              {background.map((bg: any, idx: any) => {
                return (
                  <SwiperItem
                    style={{
                      width: '100%',
                      height: '100%'
                    }}
                  >
                    <Image
                      data-keyword={`banner-item-${idx}`}
                      className="banner-item"
                      key={idx}
                      data-index={idx}
                      src={bg}
                      style={{
                        width: '100%',
                        height: '100%'
                      }}
                    />
                  </SwiperItem>
                );
              })}
            </Swiper>
          </View>
        </View>

        <View>
          <View className="basic-view">自动曝光--虚拟列表</View>
          <View>
            <VirtualList
              height={500} 
              width='100%' 
              itemData={data} 
              itemCount={dataLen} 
              itemSize={100}
            >
              {Row}
            </VirtualList>
          </View>
        </View>

      </View>
    );
  }
}