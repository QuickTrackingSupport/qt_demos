/**
 * 配置参考：https://wechat-miniprogram.github.io/kbone/docs/config/
 */

module.exports = {
    origin: 'https://test.miniprogram.com',
    entry: '/',
    router: {
        index: ['/index/index'],
		integrate: ['/integrate/index'],
		pv: ['/pv/index'],
		custom: ['/custom/index'],
		click: ['/click/index'],
		exposure: ['/exposure/index'],
		setting: ['/setting/index'],
		vt: ['/vt/index'],
    },
    redirect: {
        notFound: '../../',
        accessDenied: '../../',
    },
    generate: {
        appEntry: 'miniprogram-app',
        autoBuildNpm: 'npm',
        appWxss: 'display',
        weui: true,
    },
    app: {
        backgroundTextStyle: 'dark',
        navigationBarTextStyle: 'white',
        navigationBarTitleText: 'kbone',
    },
	appExtraConfig: {
        sitemapLocation: 'sitemap.json',
	},
    global: {
        share: true,
        windowScroll: false,
        backgroundColor: '#F7F7F7',
    },
    pages: {},
    optimization: {
		domSubTreeLevel: 10,

		elementMultiplexing: true,
		textMultiplexing: true,
		commentMultiplexing: true,
		domExtendMultiplexing: true,

		styleValueReduce: 5000,
		attrValueReduce: 5000,
	},
    projectConfig: {
        projectname: 'kbone-template-vue-ui',
        appid: 'wx9faf1fced05847ed',
    },
}
