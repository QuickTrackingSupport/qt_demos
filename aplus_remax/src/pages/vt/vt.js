import React, { Component } from "react";
import {
  View,
  Swiper,
  SwiperItem,
  Image,
} from "remax/wechat";
import { onAplusTouch } from "../../utils/aplus_api";
import './vt.css'

class Vt extends Component {
  constructor(props) {
    super(props);
    this.state = {
      swiperImg: [
        {
          url: "https://img.alicdn.com/imgextra/i4/O1CN0198ZqQc1ipBYrWKD7b_!!6000000004461-0-tps-1316-736.jpg",
        },
        {
          url: "https://img.alicdn.com/imgextra/i1/O1CN01EdIpVV1jxiYfVOw8v_!!6000000004615-0-tps-1316-736.jpg",
        },
        {
          url: "https://img.alicdn.com/imgextra/i4/O1CN01RjAj8X1aJZIQk6G27_!!6000000003309-0-tps-1316-736.jpg",
        },
      ],
      indicatorDots: true,
      autoplay: true,
      interval: 2000,
      duration: 500,
      lists: [
        [
          {
            url: "https://gd1.alicdn.com/imgextra/i1/2028723128/O1CN01AHNoOr1YyfbGi6ogZ_!!2028723128.jpg",
            name: "大理石融蜡灯1",
            price: "￥379.0",
            scale: "73人购买",
            id: 1001,
          },
          {
            url: "https://gd3.alicdn.com/imgextra/i3/2209303074383/O1CN01E5T9QU1iFSeRLWz4s_!!2209303074383.jpg_400x400.jpg",
            name: "欧式大理石台灯",
            price: "189.0",
            scale: "898人购买",
            id: 1002,
          },
        ],
        [
          {
            url: "https://img.alicdn.com/imgextra/i3/2212630767092/O1CN01GlqcuM22GBbchND9Q_!!0-item_pic.jpg_430x430q90.jpg",
            name: "台灯学习专用护眼灯",
            price: "35.0",
            scale: "173人购买",
            id: 1003,
          },
          {
            url: "https://img.alicdn.com/imgextra/https://img.alicdn.com/imgextra/i1/138006397/O1CN01QWCvC01x7sJhTFYYS_!!138006397.jpg_430x430q90.jpg",
            name: "欧普AAA级护眼灯",
            price: "239.0",
            scale: "698人购买",
            id: 1004,
          },
        ],
        [
          {
            url: "https://img.alicdn.com/imgextra/i3/2103880744/O1CN012UZs071HMnMegbB33_!!2103880744.jpg_430x430q90.jpg",
            name: "壁灯卧室客厅背景墙灯",
            price: "69.0",
            scale: "222人购买",
            id: 1005,
          },
          {
            url: "https://gd1.alicdn.com/imgextra/i1/377720279/TB2Sev8e2NNTKJjSspfXXbXIFXa_!!377720279.jpg_400x400.jpg",
            name: "美式壁灯",
            price: "88.0",
            scale: "533人购买",
            id: 1006,
          },
        ],
        [
          {
            url: "https://img.alicdn.com/imgextra/i1/2211428522500/O1CN01GC0qjf1UL2qvYwB9P_!!2211428522500.jpg_430x430q90.jpg",
            name: "奥克斯风扇灯吊扇灯",
            price: "249.0",
            scale: "912人购买",
            id: 1007,
          },
          {
            url: "https://img.alicdn.com/imgextra/i2/2206769739534/O1CN01pKyg2S2KIcmMW9JWn_!!2206769739534.jpg_400x400.jpg",
            name: "隐形风扇灯吊扇灯",
            price: "158.0",
            scale: "752人购买",
            id: 1008,
          },
        ],
        [
          {
            url: "https://gd3.alicdn.com/imgextra/i2/2211780572115/O1CN01x4Tjsr1RUiMftry3t_!!2211780572115.jpg_400x400.jpg",
            name: "欧普照明led吸顶灯",
            price: "69.0",
            scale: "456人购买",
            id: 1009,
          },
          {
            url: "https://img.alicdn.com/imgextra/https://img.alicdn.com/imgextra/i3/2183118489/O1CN01v5bDLw2Ca0vVOMMLA_!!2183118489.jpg_430x430q90.jpg",
            name: "北欧吊灯客厅灯",
            price: "999.0",
            scale: "79人购买",
            id: 1010,
          },
        ],
      ],
    };
  }

  render() {
    const { swiperImg, indicatorDots, autoplay, interval, duration, lists } =
      this.state;
    return (
      <View className="event-exposure" onTouchStart={onAplusTouch}>
        <View className="exposure-auto">
          <View className="auto-title">场景1：轮播</View>
          <Swiper
            className="swiper"
            indicator-dots={indicatorDots}
            autoplay={autoplay}
            circular
            interval={interval}
            duration={duration}
          >
            {swiperImg.map((bg, idx) => {
              return (
                <SwiperItem
                  className="banner_item_vt"
                  style={{
                    width: "100%",
                    height: "100%",
                  }}
                >
                  <Image
                    data-keyword={`banner-item-${idx}`}
                    className="vt-banner-item "
                    key={idx}
                    data-index={idx}
                    src={bg.url}
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
        <View className="exposure-manual">
          <View className="manual-title">场景2：瀑布流</View>
          {lists.map((list, index) => {
            return (
              <View key={index} className="exposure-grid vt-list-item">
                {list.map((item, idx) => {
                  return (
                    <View
                      className="exposure-grid-item-vt"
                      key={`${index}-${idx}`}
                      data-track-params={JSON.stringify(item)}
                    >
                      <View className="grid-item-box">
                        <Image src={item.url} />
                        <View>{item.name}</View>
                        <View className="grid-item-detail">
                          <View>
                            {item.price}+{index}
                          </View>
                          <View>
                            {item.scale}+{index}
                          </View>
                        </View>
                      </View>
                    </View>
                  );
                })}
              </View>
            );
          })}
        </View>
      </View>
    );
  }
}

export default Vt;
