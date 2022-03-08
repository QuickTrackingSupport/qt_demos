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
    const listMap = ['list']
    const swiperImg = [
        { url: 'https://img.alicdn.com/imgextra/i4/O1CN0198ZqQc1ipBYrWKD7b_!!6000000004461-0-tps-1316-736.jpg' },
        { url: 'https://img.alicdn.com/imgextra/i1/O1CN01EdIpVV1jxiYfVOw8v_!!6000000004615-0-tps-1316-736.jpg' },
        { url: 'https://img.alicdn.com/imgextra/i4/O1CN01RjAj8X1aJZIQk6G27_!!6000000003309-0-tps-1316-736.jpg' },
    ];
    const list1 = [
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
    const list2 = [
        {
            url: 'https://img.alicdn.com/imgextra/i3/2212630767092/O1CN01GlqcuM22GBbchND9Q_!!0-item_pic.jpg_430x430q90.jpg',
            name: '台灯学习专用护眼灯',
            price: '35.0',
            scale: '173人购买',
            id: 1003
        },{
            url: 'https://img.alicdn.com/imgextra/https://img.alicdn.com/imgextra/i1/138006397/O1CN01QWCvC01x7sJhTFYYS_!!138006397.jpg_430x430q90.jpg',
            name: '欧普AAA级护眼灯',
            price: '239.0',
            scale: '698人购买',
            id: 1004
        }
    ];
    const list3 = [
        {
            url: 'https://img.alicdn.com/imgextra/i3/2103880744/O1CN012UZs071HMnMegbB33_!!2103880744.jpg_430x430q90.jpg',
            name: '壁灯卧室客厅背景墙灯',
            price: '69.0',
            scale: '222人购买',
            id: 1005
        },{
            url: 'https://gd1.alicdn.com/imgextra/i1/377720279/TB2Sev8e2NNTKJjSspfXXbXIFXa_!!377720279.jpg_400x400.jpg',
            name: '美式壁灯',
            price: '88.0',
            scale: '533人购买',
            id: 1006
        }
    ]
    const list4 = [{
        url: 'https://img.alicdn.com/imgextra/i1/2211428522500/O1CN01GC0qjf1UL2qvYwB9P_!!2211428522500.jpg_430x430q90.jpg',
        name: '奥克斯风扇灯吊扇灯',
        price: '249.0',
        scale: '912人购买',
        id: 1007
    }, {
        url: 'https://img.alicdn.com/imgextra/i2/2206769739534/O1CN01pKyg2S2KIcmMW9JWn_!!2206769739534.jpg_400x400.jpg',
        name: '隐形风扇灯吊扇灯',
        price: '158.0',
        scale: '752人购买',
        id: 1008
    }];
    const list5 = [{
        url: 'https://gd3.alicdn.com/imgextra/i2/2211780572115/O1CN01x4Tjsr1RUiMftry3t_!!2211780572115.jpg_400x400.jpg',
        name: '欧普照明led吸顶灯',
        price: '69.0',
        scale: '456人购买',
        id: 1009
    }, {
        url: 'https://img.alicdn.com/imgextra/https://img.alicdn.com/imgextra/i3/2183118489/O1CN01v5bDLw2Ca0vVOMMLA_!!2183118489.jpg_430x430q90.jpg',
        name: '北欧吊灯客厅灯',
        price: '999.0',
        scale: '79人购买',
        id: 1010
    }]

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
                                <SwiperSlide key={index} className="banner_item">
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
                                <Slider.Item key={index} className="banner_item">
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
                {listMap.map((item, index) => {
                    return (
                        <view className={styles.exposureGrid} key={index}>
                            {list1.map((item, index) => {
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
                {listMap.map((item, index) => {
                    return (
                        <view className={styles.exposureGrid} key={'info2-' + index}>
                            {list2.map((item, index) => {
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
                {listMap.map((item, index) => {
                    return (
                        <view className={styles.exposureGrid} key={'info3-' + index}>
                            {list3.map((item, index) => {
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
                {listMap.map((item, index) => {
                    return (
                        <view className={styles.exposureGrid} key={'info4-' + index}>
                            {list4.map((item, index) => {
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
                {listMap.map((item, index) => {
                    return (
                        <view className={styles.exposureGrid} key={'info5-' + index}>
                            {list5.map((item, index) => {
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
