/* eslint-disable */
import { createElement } from 'rax';
import View from 'rax-view';
import Text from 'rax-text';
import styles from './exposure.module.css';
import { isWeb } from '@uni/env';
import { Swiper, SwiperSlide } from 'rax-swiper';
import Slider from 'rax-slider';

import AplusSDK from '../../utils/aplusAdapter';
let swiperEle;
function Exposure() {
    const swiperImg = [
        { url: 'https://img.alicdn.com/imgextra/i4/O1CN0198ZqQc1ipBYrWKD7b_!!6000000004461-0-tps-1316-736.jpg' },
        { url: 'https://img.alicdn.com/imgextra/i1/O1CN01EdIpVV1jxiYfVOw8v_!!6000000004615-0-tps-1316-736.jpg' },
        { url: 'https://img.alicdn.com/imgextra/i4/O1CN01RjAj8X1aJZIQk6G27_!!6000000003309-0-tps-1316-736.jpg' },
    ];
    const list = [
        {
            url: 'https://gd1.alicdn.com/imgextra/i4/2208928232857/O1CN019LfEfG1WyYGv4pMQ5_!!2208928232857.jpg_400x400.jpg',
            name: '大理石香薰灯',
            price: '￥129.0',
            scale: '88人购买',
        },
        {
            url: 'https://gd1.alicdn.com/imgextra/i1/2028723128/O1CN01AHNoOr1YyfbGi6ogZ_!!2028723128.jpg',
            name: '大理石融蜡灯',
            price: '￥379.0',
            scale: '73人购买',
        },
    ];
    const sendEvent = () => {
        // AplusSDK.sendEvent('test_exp', {a: 1, b: '2'}, 'EXP');
    };
    return (
        <View className={styles.eventExposure}>
            <view className={styles.exposureAuto}>
                <view>自动曝光(场景1 轮播图)</view>
                {isWeb ? (
                    <Swiper
                        autoplay={true}
                        loop={true}
                        onSlideChange={sendEvent}
                        onSwiper={(swiper) => (swiperEle = swiper)}
                        pagination={{ clickable: true }}
                        initialSlide={2}
                    >
                        {swiperImg.map((item, index) => {
                            return (
                                <SwiperSlide key={index} className="banner_item" data-index={index}>
                                    <view className={styles.exposureImg}>
                                        <img src={item.url} key={index} />
                                    </view>
                                </SwiperSlide>
                            );
                        })}
                    </Swiper>
                ) : (
                    <Slider
                        className="slider"
                        style={styles.exposureSwiper}
                        autoPlay={true}
                        loop={true}
                        showsPagination={true}
                        autoplayTimeout={3000}
                        onChange={sendEvent}>
                        {swiperImg.map((item, index) => {
                            return (
                                <Slider.Item key={index} className="banner_item" data-index={index}>
                                    <view className={styles.exposureImg}>
                                        <img src={item.url} key={index} />
                                    </view>
                                </Slider.Item>
                            );
                        })}
                    </Slider>
                )}
            </view>
            <view className={styles.exposureManual}>
                <view className={styles.exposureTitle}>自动曝光(场景2 瀑布流)</view>
                {list.map((item, index) => {
                    return (
                        <view className={styles.exposureGrid} key={index}>
                            {list.map((item, index) => {
                                return (
                                    <view key={index} className={`${styles.exposureGridItem} exposure-grid-item`}>
                                        <view className={styles.gridItemBox}>
                                            <img src={item.url} />
                                            <view>{item.name}</view>
                                            <view className={styles.gridItemDetail}>
                                                <view>{item.price}</view>
                                                <view>{item.scale}</view>
                                            </view>
                                        </view>
                                    </view>
                                );
                            })}
                        </view>
                    );
                })}
            </view>
        </View>
    );
}

export default Exposure;
