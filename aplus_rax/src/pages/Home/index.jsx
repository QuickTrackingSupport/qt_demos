/* eslint-disable */
import { createElement, useEffect, useState } from 'rax';
import { history } from 'rax-app';
import View from 'rax-view';
import Text from 'rax-text';
import { isWeb } from '@uni/env';
import { getApp } from '@uni/application';
// import {setStorageSync} from '@uni/storage';
import { storage } from '@uni/apis';

import styles from './index.module.css';

import Logo from '@/components/Logo';

export default function Home() {
  const [trackerInfo, setTrackerInfo] = useState({
    aplusRhostV: '',
    aplusApiHost: '',
    aplusVtCfgUrl: '',
    appKey: '',
    appInfoId: '',
  })
  const handlerDomainChange = (e) => {
    setTrackerInfo({
      ...trackerInfo,
      'aplusRhostV': e.target.value.trim()
    })
  };
  const handlerSysDomainChange = (e) => {
    setTrackerInfo({
      ...trackerInfo,
      'aplusApiHost': e.target.value.trim()
    })
  };
  const handlerVtURLChange = (e) => {
    setTrackerInfo({
      ...trackerInfo,
      'aplusVtCfgUrl': e.target.value.trim()
    })
  };
  const handlerAppKeyChange = (e) => {
    setTrackerInfo({
      ...trackerInfo,
      'appKey': e.target.value.trim()
    })
  };
  const handlerAppInfoIdChange = (e) => {
    setTrackerInfo({
      ...trackerInfo,
      'appInfoId': e.target.value.trim()
    })
  };
  const navigateToSubmit = () => {
    const { aplusRhostV = '', aplusApiHost = '', aplusVtCfgUrl = '', appKey = '', appInfoId = '' } = trackerInfo;
    storage.setStorageSync({
      key: '__trackerInfo',
      data: {
        aplusRhostV: aplusRhostV,
        aplusApiHost: aplusApiHost,
        aplusVtCfgUrl: aplusVtCfgUrl,
        appKey: appKey,
        appInfoId: appInfoId
      }
    });
    return;
  };

  const navigateToCode = () => {
    history.push('/integrate');
  };
  const navigateToPv = () => {
    history.push('/pv');
  };
  const navigateToClick = () => {
    history.push('/click');
  };
  const navigateToExposure = () => {
    history.push('/exposure');
  };
  const navigateToCustom = () => {
    history.push('/custom');
  };
  const navigateToSetting = ()=>{
    history.push('/setting');
  };
  const navigateToVT = () => {
    history.push('/vt');
  }

  useEffect(() => {
    console.log(getApp());
  }, []); 
  
  return (
    <View className={styles.uniapp}>
      <view className={styles.uniappView}>
        {isWeb ? <view className={styles.uniLeft}>SDK??????</view> : <view className={styles.uniLeft}>SDK??????&_anony_id??????</view>}
        <view className={styles.uniRight}>
          <view className={styles.uniTip}>????????????</view>
          <view className={styles.uniTip}>??????????????????????????????</view>
          <view className={styles.uniRightBtn} type="primary" onClick={navigateToCode}>????????????????????????</view>
        </view>
      </view>
      <view className={styles.uniappView}>
        <view className={styles.uniLeft}>????????????????????????????????????</view>
        <view className={styles.uniRight}>
          <view className={styles.uniRightBtn} type="primary" onClick={navigateToPv}>??????????????????</view>
          <view className={styles.uniRightBtn} type="primary" onClick={navigateToClick}>????????????</view>
          <view className={styles.uniRightBtn} type="primary" onClick={navigateToExposure}>????????????</view>
          <view className={styles.uniRightBtn} type="primary" onClick={navigateToCustom}>???????????????</view>
          <view className={styles.uniRightBtn} type="primary" onClick={navigateToVT}>???????????????demo</view>
        </view>
      </view>
      <view className={styles.uniappView}>
        <view className={styles.uniLeft}>??????????????????/????????????</view>
        <view className={styles.uniRight}>
          <view className={styles.uniRightBtn} type="primary" onClick={navigateToSetting}>????????????/????????????</view>
        </view>
      </view>
      <view className={styles.uniappView}>
        <view className={styles.uniFull}>
          ???????????????<input type="text" className={styles.unitrackerEnv} id={styles.trackerDomain} value={trackerInfo.aplusRhostV} onChange={handlerDomainChange} />
          appKey???<input type="text" className={styles.unitrackerEnv} id={styles.trackerAppkey} value={trackerInfo.appKey} onChange={handlerAppKeyChange} />
          ???????????????URL???<input type="text" className={styles.unitrackerEnv} id={styles.trackerVtUrl} value={trackerInfo.aplusVtCfgUrl} onChange={handlerVtURLChange} />
          QT???????????????<input type="text" className={styles.unitrackerEnv} id={styles.trackerSysDomain} value={trackerInfo.aplusApiHost} onChange={handlerSysDomainChange} />
          appInfoId???<input type="text" className={styles.unitrackerEnv} id={styles.trackerAppinfoid} value={trackerInfo.appInfoId} onChange={handlerAppInfoIdChange} />
          <button type="primary" className={styles.uniViewcode} onClick={navigateToSubmit}>?????????????????????</button>
        </view>
      </view>
    </View>
  );
}
