//
//  MobClick.h
//  Analytics
//
//  Copyright (C) 2010-2017 Umeng.com . All rights reserved.

#import <UIKit/UIKit.h>
#import <Foundation/Foundation.h>

@interface MobClick : NSObject

#pragma mark basics

///---------------------------------------------------------------------------------------
/// @name  设置
///---------------------------------------------------------------------------------------



#pragma mark event logs
///---------------------------------------------------------------------------------------
/// @name  页面计时
///---------------------------------------------------------------------------------------

/** 手动页面时长统计, 记录某个页面展示的时长.
 @param pageName 统计的页面名称.
 @param seconds 单位为秒，int型.
 @return void.
 */
+ (void)logPageView:(NSString *)pageName seconds:(int)seconds;

/** 自动页面时长统计, 开始记录某个页面展示时长.
 使用方法：必须配对调用beginLogPageView:和endLogPageView:两个函数来完成自动统计，若只调用某一个函数不会生成有效数据。
 在该页面展示时调用beginLogPageView:，当退出该页面时调用endLogPageView:
 @param pageName 统计的页面名称.
 @return void.
 */
+ (void)beginLogPageView:(NSString *)pageName;

/** 自动页面时长统计, 结束记录某个页面展示时长.
 使用方法：必须配对调用beginLogPageView:和endLogPageView:两个函数来完成自动统计，若只调用某一个函数不会生成有效数据。
 在该页面展示时调用beginLogPageView:，当退出该页面时调用endLogPageView:
 @param pageName 统计的页面名称.
 @return void.
 */
+ (void)endLogPageView:(NSString *)pageName;


///---------------------------------------------------------------------------------------
/// @name  事件统计
///---------------------------------------------------------------------------------------

/** 自定义事件,数量统计.
使用前，请先到友盟App管理后台的设置->编辑自定义事件 中添加相应的事件ID，然后在工程中传入相应的事件ID
 
 @param  eventId 网站上注册的事件Id.
 @param  accumulation 累加值。为减少网络交互，可以自行对某一事件ID的某一分类标签进行累加，再传入次数作为参数。
 @return void.
 */
+ (void)event:(NSString *)eventId;

/** 自定义事件,数量统计.
 使用前，请先到友盟App管理后台的设置->编辑自定义事件 中添加相应的事件ID，然后在工程中传入相应的事件ID
 */
+ (void)event:(NSString *)eventId attributes:(NSDictionary *)attributes;

+ (void)event:(NSString *)eventId attributes:(NSDictionary *)attributes counter:(int)number;

/** 自定义事件,时长统计.
    使用前，请先到友盟App管理后台的设置->编辑自定义事件 中添加相应的事件ID，然后在工程中传入相应的事件ID.
    beginEvent,endEvent要配对使用,也可以自己计时后通过durations参数传递进来
 
 @param  eventId 网站上注册的事件Id.
 @param millisecond 自己计时需要的话需要传毫秒进来
 @return void.
 @warning 每个event的attributes不能超过100个
    eventId、attributes中key和value都不能使用空格和特殊字符，必须是NSString,且长度不能超过255个字符（否则将截取前255个字符）
    id， ts， du是保留字段，不能作为eventId及key的名称
*/

/** 自定义事件,时长统计.
 使用前，请先到友盟App管理后台的设置->编辑自定义事件 中添加相应的事件ID，然后在工程中传入相应的事件ID.
 */

+ (void)event:(NSString *)eventId durations:(int)millisecond;

/** 自定义事件,时长统计.
 使用前，请先到友盟App管理后台的设置->编辑自定义事件 中添加相应的事件ID，然后在工程中传入相应的事件ID.
 */
+ (void)event:(NSString *)eventId attributes:(NSDictionary *)attributes durations:(int)millisecond;

/** 自定义事件,自定义事件页面信息
 使用前，请先到友盟App管理后台的设置->编辑自定义事件 中添加相应的事件ID，然后在工程中传入相应的事件ID.
 */
+ (void)event:(NSString *)eventId pageName:(NSString *)pageName;

/** 自定义事件,自定义事件页面信息
 使用前，请先到友盟App管理后台的设置->编辑自定义事件 中添加相应的事件ID，然后在工程中传入相应的事件ID.
 */
+ (void)event:(NSString *)eventId pageName:(NSString *)pageName attributes:(NSDictionary *)attributes;

/** 自定义事件,自定义事件页面信息
 使用前，请先到友盟App管理后台的设置->编辑自定义事件 中添加相应的事件ID，然后在工程中传入相应的事件ID.
 */
+ (void)event:(NSString *)eventId attributes:(NSDictionary *)attributes counter:(int)number pageName:(NSString *)pageName;

#pragma mark - user methods
/** active user sign-in.
 使用sign-In函数后，如果结束该PUID的统计，需要调用sign-Off函数
 @param puid : user's ID
 @param provider : 不能以下划线"_"开头，使用大写字母和数字标识; 如果是上市公司，建议使用股票代码。
 @return void.
 */
+ (void)profileSignInWithPUID:(NSString *)puid;
+ (void)profileSignInWithPUID:(NSString *)puid provider:(NSString *)provider;

/** active user sign-off.
 停止sign-in PUID的统计
 @return void.
 */
+ (void)profileSignOff;

///---------------------------------------------------------------------------------------
/// @name 地理位置设置
/// 需要链接 CoreLocation.framework 并且 #import <CoreLocation/CoreLocation.h>
///---------------------------------------------------------------------------------------

/** 设置经纬度信息
 @param latitude 纬度.
 @param longitude 经度.
 @return void
 */
+ (void)setLatitude:(double)latitude longitude:(double)longitude;


///---------------------------------------------------------------------------------------
/// @name Utility函数
///---------------------------------------------------------------------------------------

/** 判断设备是否越狱，依据是否存在apt和Cydia.app
 */
+ (BOOL)isJailbroken;

/** 判断App是否被破解
 */
+ (BOOL)isPirated;

/** 设置 app secret
 @param secret string
 @return void.
 */
+ (void)setSecret:(NSString *)secret;


/**
 * 设置关注事件是否首次触发,只关注eventList前五个合法eventID.只要已经保存五个,此接口无效
 */
+(void)setFirstLaunchEvent:(NSArray *)eventList;

/** 设置是否自动采集页面, 默认NO(不自动采集).
 @param value 设置为YES, umeng SDK 会将自动采集页面信息
 */
+ (void)setAutoPageEnabled:(BOOL)value;

/**
 * 设置超级事件属性 键值对 会覆盖同名的key
 */
+(void) registerSuperProperty:(NSDictionary *)property;

/**
 *
 * 删除指定超级事件属性
 @param key
 */
+(void) unregisterSuperProperty:(NSString *)propertyName;

/**
 *
 * 获取指定超级事件属性
 @param key
 */
+(NSString *)getSuperProperty:(NSString *)propertyName;

/**
 * 获取超级事件所有属性；如果不存在，则返回空。
 */
+(NSDictionary *)getSuperProperties;

/**
 *清空所有超级事件属性。
 */
+(void)clearSuperProperties;


/**
 * 设置超级事件属性 键值对 会覆盖同名的key
 */
+(void) registerGlobalProperty:(NSDictionary *)property;

/**
 *
 * 获取指定超级事件属性值
 @param key
 */
+(NSString *) getGlobalProperty:(NSString *)propertyName;

/**
 *
 * 删除指定超级事件属性
 @param key
 */
+(void) unregisterGlobalProperty:(NSString *)propertyName;

/**
 * 获取超级事件所有属性；如果不存在，则返回空。
 */
+(NSDictionary *)getGlobalProperties;

/**
 *清空所有超级事件属性。
 */
+(void)clearGlobalProperties;



/**
 *集成测试。
 */
+ (BOOL)handleUrl:(NSURL *)url;

@end


