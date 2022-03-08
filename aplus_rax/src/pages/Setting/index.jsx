import { createElement, useState  } from 'rax';
import View from 'rax-view';
import Text from 'rax-text';
import styles from './index.module.css';
import TextInput from 'rax-textinput';
import AplusSDK  from '../../utils/aplusAdapter';

function Setting() {
    const [gp, setGp] = useState({'a': 1, 'b': 2, 'c': '3', from: 'rax'});
    const [puid, setPuid] = useState('testUserId');
    const [up, setUp] = useState({'a': 1, 'b': 2, 'c': '3', from: 'rax'})

    const toJSONString = (input) => {
        const keyMatcher = '([^",{}\\s]+?)';
        const valMatcher = '(.,*)';
        const matcher = new RegExp(`${keyMatcher}\\s*:\\s*${valMatcher}`, 'g');
        const parser = (match, key, value) => `"${key}":${value}`
        return input.replace(matcher, parser);
    }
    const onGlobalPropertiesChanged = (e) => {
        try {
            console.log('yz--------json', e.target);
            let gp = toJSONString(e.target.value);
            console.log('yz------json', JSON.parse(gp));
            setGp(JSON.parse(gp))
        } catch (e) {}
    }
    const registerGP = (e) => {
        console.log('yz----', JSON.stringify(gp))
        AplusSDK.registerGlobalProperties(gp);
    };
    const onUserIdChanged = (e) => {
        try {
            console.log('puid', puid);
            setPuid(e.target.value);
        } catch(e){
        }
    };
    const setUserID = () => {
        console.log('当前userid:', puid);
        AplusSDK.setUserId(puid);
    };
    const onUserPropertiesChanged = (e) => {
        try {
            console.log('yz--------json', e.target);
            let up = toJSONString(e.target.value);
            console.log('yz------json', JSON.parse(up));
            setUp(JSON.parse(up));
        } catch (e) {}
    };
    const sendUserInfo = () => {
        AplusSDK.sendUserInfo(up);
    };

    const getGlobalProperties = () => {
        var curGP = AplusSDK.getGlobalProperties();
        console.log('----curGP', curGP);
    };
    const clearGlobalProperties = () => {
        var curGP = AplusSDK.clearGlobalProperties();
        setGp(curGP);
        console.log('----curGP', curGP);
    };
    
    
    return (
        <View className={styles.setting}>
            <view className={styles.settingAll}>
                <view>配置全局属性</view>
                <TextInput
                    className={styles.settingGlobalText}
                    multiline={true}
                    numberOfLines={3}
                    style={styles.multiline}
                    placeholder={'支持js基本类型，globalpropery配置后会跟着每条日志上报，eg: {a, 1, b: 2} or [1, 2, 3, 4, 5] 不支持多层嵌套'}
                    defaultValue={'{"a":1,"b":2,"c":"3","d":"undefined","e":null,"f":""}'}
                    onInput={onGlobalPropertiesChanged}
                    value={JSON.stringify(gp)}
                />
                {/* <textarea
                    className={styles.settingGlobalText}
                    auto-height
                    placeholder="支持js基本类型，globalpropery配置后会跟着每条日志上报，eg: {a, 1, b: 2} or [1, 2, 3, 4, 5] 不支持多层嵌套"
                /> */}
                <view className={styles.settingBtn}>
                    <button type="primary" onClick={registerGP}>覆盖gp</button>
                </view>
                <view className={styles.settingBtnGp}>
                    <button type="primary" onClick={getGlobalProperties}>获取所有gp</button>
                    <button type="primary" onClick={clearGlobalProperties}>删除所有gp</button>
                </view>
            </view>
            <view className={styles.settingUser}>
                <view>配置用户属性</view>
                <view className={styles.useAaccount}>
                    <text>注意： 设置用户属性前，一定要上传用户账号</text>
                    <textarea className={styles.settingUserText} auto-height placeholder="上传用户账号代码" onInput={onUserIdChanged} value={puid}/>
                    <View>
                        <button type="primary" onClick={setUserID}>设置用户账号</button>
                    </View>
                </view>
                <view className={styles.userEvent}>
                    <text>用户属性跟随$$_user_profile自定义事件上报</text>
                    <textarea className={styles.settingUserText} auto-height placeholder="请填写用户属性，支持js object对象，仅支持一级kv结构"  onInput={onUserPropertiesChanged} value={JSON.stringify(up)}/>
                </view>
                <View>
                    <button type="primary" onClick={sendUserInfo}>设置用户属性</button>
                </View>
            </view>
        </View>
    );
}

export default Setting;
