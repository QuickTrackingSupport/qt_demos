//
//  UMSpmHybrid.h
//  UM4Aplus
//
//  Created by wangkai on 2021/4/1.
//  Copyright © 2021 张军华. All rights reserved.
//

#import <Foundation/Foundation.h>

NS_ASSUME_NONNULL_BEGIN

@interface UMSpmHybrid : NSObject

/**
 * @brief                   跳过当前页面统计.
 *
 * @param     PageObject          容器对象（自动获取页面时使用，默认手动可填nil）
 * @param     pageName          页面名称（手动设置页面时使用，当设置自动获取页面时可填nil）
 * @warning                 建议在设置页面之前调用此接口，调用后设置的native页面将不发送数据
 *                          
 */
+ (void)skipMe:(id)PageObject pageName:(NSString *)pageName;

@end

NS_ASSUME_NONNULL_END
