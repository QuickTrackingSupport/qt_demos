/* eslint-disable */
import { createElement } from 'rax';
import View from 'rax-view';
import Text from 'rax-text';
import styles from './custom.module.css';
import AplusSDK from '../../utils/aplusAdapter';

function Custom() {
    const detail = {
        product: '床头灯',
        productColor: '黄色',
        productId: '003'
    };
    return (
        <View className={styles.eventcClick}>
            <view className={styles.clickDetail}>
                <img src="https://gd1.alicdn.com/imgextra/i4/2207297515629/O1CN01W5rDzt1rS89qNHD1f_!!2207297515629.jpg_400x400.jpg" />
                <view>
                    <p>商品名称：{detail.product}</p>
                    <p>商品颜色：{detail.productColor}</p>
                    <p>商品ID: {detail.productId}</p>
                </view>
            </view>
            <button className={styles.clickPurchase} type="primary" onClick={AplusSDK.sendEvent.bind(null, 'test_other', detail, 'OTHER')}>非点击曝光以外的事件</button>
        </View>
    );
}

export default Custom;
