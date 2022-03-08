/* eslint-disable */
import { createElement } from 'rax';
import View from 'rax-view';
import Text from 'rax-text';
import styles from './integrate.module.css';
import { isWeb } from '@uni/env';

function Integrate() {
  const tips = [
    {text: '注意：'},
    {text: '1. appkey: 要填写您平台对应的appkey'},
    {text: '2. aplus-rhost-v: 需填写您的收数域名'},
  ]
  if (!isWeb) {
    tips.push({text: '3. _anony_id: 务必填写！取值为小程序平台的openid'})
  } else {
    tips.push({text: '3. 其他功能请具体参考集成代码和集成文档'})
  }
  return (
    <View className={styles.sdkIntegrate}>
        <view className={styles.sdkTitle}>SDK集成代码</view>
        {isWeb ?
          <view className={styles.sdkCode}>
            <Text>请参考Demo源码 src/document/index.tsx 文件 </Text>
          </view> : 
          <view className={styles.sdkCode}>
            <img src="https://img.alicdn.com/imgextra/i2/O1CN01lrPuDV26Gsg57P7tP_!!6000000007635-2-tps-1494-646.png" alt="" />
          </view>
        }
        {
            tips.map((item, index) => {
              return (<view className={styles.sdkTips} key={index}>{item.text}</view>)
            })
        }
    </View>
  );
}

export default Integrate;
