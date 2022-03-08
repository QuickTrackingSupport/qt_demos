<template>
    <div class="setting">
        <div class="setting-all">
            <view>配置全局属性</view>
            <textarea 
				auto-height 
				placeholder="支持js基本类型，globalpropery配置后会跟着每条日志上报，eg: {a, 1, b: 2} or [1, 2, 3, 4, 5] 不支持多层嵌套"
				:value="JSON.stringify(gp)"
			/>
      <div class="setting-btn">
                <button type="primary" @tap="registerGP">覆盖gp</button>
                <button type="primary" @tap="unregisterGP">删除某个gp</button>
			</div>
			<div class="setting-btn">
				<button type="primary" @tap="getGlobalProperties">获取所有gp</button>
				<button type="primary" @tap="clearGlobalProperties">删除所有gp</button>
      </div>
        </div>
        <div class="setting-user">
            <view>配置用户属性</view>
            <div class="user-account">
                <text>注意： 设置用户属性前，一定要上传用户账号</text>
                <textarea auto-height placeholder="上传用户账号代码" :value="puid"/>
            </div>
			<button type="primary" @tap="setUserIdAndOrganization">设置用户账号或组织</button>
	
            <div class="user-event">
                <text>用户属性跟随$$_user_profile自定义事件上报</text>
                <!-- <textarea auto-height placeholder="$$_user_profile自定义事件代码"/> -->
            </div>
            <button type="primary" @tap="setUserProfile">设置用户属性</button>
        </div>
    </div>
</template>

<script>
// #ifdef APP
const UmengAnalytics = uni.requireNativePlugin('UmengAnalytics')
// #endif
import UmengSDK from '../../utils/umengAdaptor.js'
export default {
	methods: {
		registerGP() {
			var that = this;
			uni.showModal({
				title: '设置全局属性',
				content: JSON.stringify(this.gp),
				confirmText:'同意',
				cancelText:'取消',
				success(res) {
					if(res && res.confirm) {
						// // #ifdef APP-PLUS
						// UmengAnalytics.registerGlobalProperties(JSON.stringify(that.gp));
						// // #endif
						console.log('yz----', JSON.stringify(that.gp))
						UmengSDK.registerGlobalProperties(that.gp);
					} else {
						
					}
				},
				fail(err) {
					console.log('yz----err', err);
				}
			})
		},
		unregisterGP() {
			// #ifdef APP-PLUS
			uni.showModal({
				title: '删除全局属性a',
				confirmText:'同意',
				cancelText:'取消',
				success(res) {
					if(res && res.confirm) {
						UmengSDK.unregisterGlobalProperty('a')
					} else {
						
					}
				},
				fail(err) {
					console.log('yz----err', err);
				}
			})
			// #endif
			// #ifdef H5 | MP
			uni.showModal({
				title: '删除全局属性a',
				content: '小程序|h5不支持单独删除某个全局属性名，可直接通过setMetaInfo覆盖'
			})
			// #endif
		},
		getGlobalProperties() {
			// // #ifdef APP-PLUS
			// var curGP = UmengAnalytics.getGlobalProperties();
			// console.log('yz----curGP', curGP);
			// uni.showModal({
			// 	title: '当前全局属性',
			// 	content: JSON.stringify(curGP || {}),
			// })
			// // #endif
			var curGP = UmengSDK.getGlobalProperties();
			console.log('yz----curGP', curGP);
			uni.showModal({
				title: '当前全局属性',
				content: JSON.stringify(curGP || {}),
			})
		},
		clearGlobalProperties() {
			uni.showModal({
				title: '清空全局属性',
				confirmText:'同意',
				cancelText:'取消',
				success(res) {
					if(res && res.confirm) {
						UmengSDK.clearGlobalProperties();
					} else {
						
					}
				},
				fail(err) {
					console.log('yz----err', err);
				}
			});
		},
		setUserProfile() {
			var that = this;
			console.log('yz-----', JSON.stringify(that.up));
			uni.showModal({
				title: '设置用户属性',
				confirmText: '同意',
				cancelText: '取消',
				content: JSON.stringify(this.up),
				success(res) {
					if(res && res.confirm) {
						console.log('yz-----up', that.up);
						UmengSDK.sendEvent('$$_user_profile', that.up, 'OTHER')
					} else {
						
					}
				}
			})
		},
		setUserIdAndOrganization() {
			var that = this;
			console.log('yz-----', this.puid);
			uni.showModal({
				title: '设置用户账号',
				content: '当前用户账号为' + that.puid + '; ' + 'native环境下，还支持设置组织，详细见代码',
				success(res) {
					if(res && res.confirm) {
						UmengSDK.setUserId(that.puid, that.organization);
					} else {
						
					}
				}
			})
		}
	},
    data() {
        return {
            title: 'textarea',
			puid: 'testUserId',
			organization: 'testOrganization',
			// #ifdef APP
			gp: {'a': 1, 'b': 2, 'c': '3', 'd': 'undefined'},
			// #endif
			// #ifdef MP | H5
			gp: {'a': 1, 'b': 2, 'c': '3', 'd': 'undefined', 'e': null, 'f': ''},
			// #endif
			up: {a: 1, b: 2}
        }
    },
}
</script>

<style lang="scss" scoped>
.setting {
    padding: 20px 3%;
    .setting-all {
        textarea{
            width: 96%;
            min-height: 60px;
            padding: 18rpx 2%;
            margin: 10px 0;
            font-size: 28rpx;
            background: #ccc;
            color: #000
        }
        .setting-btn {
            display: flex;
            button {
                // width: 150px;
                margin: 0 10px 30px 0;
            }
        }
    }
    .setting-user {
        view {
            line-height: 40px;
        }
        text {
            font-size: 16px;
            line-height: 32px;
        }
        textarea{
            width: 96%;
            min-height: 60px;
            padding: 18rpx 2%;
            margin: 10px 0;
            font-size: 28rpx;
            background: #ccc;
            color: #000
        }
        button {
            width: 200px;
            margin: 0;
        }
    }
    
}
</style>