import { createElement } from 'rax';
import View from 'rax-view';
import Text from 'rax-text';
import styles from './pv.module.css';
import { isWeb } from '@uni/env';
import AplusSDK from '../../utils/aplusAdapter';

function Pv() {
  const sendPV = () => {
    AplusSDK.sendPV({a: 1, b: 2, c: null, d: undefined, e: "", page_name: 'page1'});
    // if (isWeb) {
    //   // page_name 为预留字段，允许自定义某条事件对应的页面编码
    //   AplusSDK.sendPV({a: 1, b: 2, c: null, d: undefined, e: "", page_name: 'page1'});
    // } else {
      
    // }
  };
  return (
    <View className={styles.eventPv}>
        <view className={styles.pvTitle}>页面浏览事件（PV）</view>
        {isWeb ? 
          <view className={styles.pvTip}>
            <View>默认为页面浏览事件自动采集，如需关闭自动，需配置aplus-waiting=“MAN”，参考sdk集成代码部分</View>
            <view>对于单页应用，需要<text className={styles.manPv}>关闭自动PV</text>改成<text className={styles.manPv}>手动控制发送pv</text></view>
          </view> :
          <View>
            <View>自动采集的页面浏览事件中，页面编码为path路径，日志发送时间为页面消失，点击“返回”按钮可以看到上报日志。</View>
          </View>
        }
        <View className={styles.pvBtn}>
            <View>Tips: 手动采集的页面浏览事件中，除了统一设置，还允许页面编码为自定义值，使用预留的page_name字段覆盖</View>
            <button type="primary" onClick={sendPV}>手动pv事件 页面编码"page1"</button>
        </View>
    </View>
  );
}

export default Pv;
