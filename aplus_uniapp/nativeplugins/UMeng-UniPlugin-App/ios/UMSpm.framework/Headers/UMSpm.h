//
//  UMSpm.h
//
//  Copyright © 2021年  All rights reserved.
//

#import <Foundation/Foundation.h>


NS_ASSUME_NONNULL_BEGIN

@interface UMSpm : NSObject



#pragma mark - native method


/**
 * @brief     更新当前的spm & pProperties.
 *
 * @param     curSPM        当前页面事件的spm
 * @param     pProperties   业务参数,kv对
 *
 * @warning                 调用说明:必须在pageDisAppear之前调用
 *
 *                          最佳位置:在pageDisAppear之前调用即可
 */
+(void) updateCurSPM:(NSString *) curSPM;
+(void) updateCurSPM:(NSString *) curSPM properties:(NSDictionary *) pProperties;

/**
 * @brief     更新页面业务参数.
 *
 * @param     pageName      页面名称,如Page_Detail
 * @param     pProperties   业务参数,kv对
 *
 * @warning                 调用说明:必须在pageDisAppear之前调用
 *
 *                          最佳位置:在pageDisAppear之前调用即可
 */
+(void) updatePageProperties:(NSString *)pageName properties:(NSDictionary *) pProperties;


/**
 * @brief                   更新页面url.
 *
 * @param     pUrl          页面对应的url
 *
 * @warning                 调用说明:如手淘统一导航将每次页面跳转的url塞给对应的viewcontroller
 *
 *                          最佳位置:在pageDisAppear之前调用
 */
+(void) updatePageUrl:(NSURL *) pUrl;

/**
 * @brief                   更新下一个页面业务参数.
 *
 * @param     properties   传给下一个页面业务参数,kv对
 *
 * @warning                 调用说明:必须在下一个页面pageAppear之前调用,否则会携带错误
 *
 *                          最佳位置:必须在下一个页面pageAppear之前调用
 */
+(void) updateNextPageProperties:(NSDictionary *) properties;


/**
 * @brief                   得到当前页面的spm.
 *
 * @warning                 调用说明:必须在当前页面pageAppear之后调用,否则会携带错误
 *
 *                          最佳位置:必须在当前页面pageAppear之后调用
 */
+(NSString*) getPageSpmCnt;

/**
 * @brief                   得到当前页面的来源spm.
 *
 * @warning                 调用说明:必须在当前页面pageAppear之后调用,否则会携带错误
 *
 *                          最佳位置:必须在当前页面pageAppear之后调用
 */
+(NSString*) getPageSpmUrl;

/**
 * @brief                   得到当前页面的来源的来源的spm.
 *
 * @warning                 调用说明:必须在当前页面pageAppear之后调用,否则会携带错误
 *
 *                          最佳位置:必须在当前页面pageAppear之后调用
 */
+(NSString*) getPageSpmPre;

/**
 * @brief                   得到当前页面的名称.
 *
 * @warning                 调用说明:必须在当前页面pageAppear之后调用,否则会携带错误
 *
 *                          最佳位置:必须在当前页面pageAppear之后调用
 */
+(NSString*) getPageName;

/**
 * @brief                   得到当前页面的来源名称.
 *
 * @warning                 调用说明:必须在当前页面pageAppear之后调用,否则会携带错误
 *
 *                          最佳位置:必须在当前页面pageAppear之后调用
 */
+(NSString*) getRefPageName;


/**
 * @brief                   得到当前Url.
 *
 * @warning                 调用说明:必须在当前页面pageAppear之后调用,否则会携带错误
 *
 *                          最佳位置:必须在当前页面pageAppear之后调用
 */
+(NSString*) getUrl;


/**
 * @brief                   得到当前的来源Url.
 *
 * @warning                 调用说明:必须在当前页面pageAppear之后调用,否则会携带错误
 *
 *                          最佳位置:必须在当前页面pageAppear之后调用
 */
+(NSString*) getRefUrl;
@end

NS_ASSUME_NONNULL_END
