/* eslint-disable */
import { createElement } from 'rax';
import View from 'rax-view';
import Text from 'rax-text';
import styles from './click.module.css';
import AplusSDK from '../../utils/aplusAdapter';

function Click() {
    const detail = {
        product: '水杯',
        productColor: '黄色',
        productId: '003'
    }
    const sendEkv = () => {
        AplusSDK.sendEvent('test_clk', detail)
    };
    const onAplusClk = (e) => {
        AplusSDK.onAplusClk(e)
    };
    
    return (
        <view className={styles.eventClick} onTouchStart={onAplusClk}>
            <view className={styles.clickDetail}>
                <img src="https://img.alicdn.com/imgextra/i4/6000000008176/O1CN013N15912AGex7mJiJL_!!6000000008176-0-octopus.jpg" />
                <view>
                    <p>商品名称：{detail.product}</p>
                    <p>商品颜色：{detail.productColor}</p>
                    <p>商品ID: {detail.productId}</p>
                </view>
            </view>
            <view className={styles.clickPurchase}>
                <button type="primary" className='auto_clk' data-product={detail.product} data-productColor={detail.productColor} data-productId={detail.productId}>点击购买(自动)</button>
                <button type="primary" onClick={sendEkv}>点击购买(手动)</button>
            </view>
        </view>
    );
}

export default Click;
