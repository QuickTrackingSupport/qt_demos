import { createElement } from 'rax';
import { Root, Style, Script } from 'rax-document';

function Document(props) {
  return (
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,minimum-scale=1,user-scalable=no,viewport-fit=cover"/>
        {/* props.title 的值是通过 app.json 分析注入的 */}
        <title>{'props.title'}</title>
        <Style />
        <script type="text/javascript" dangerouslySetInnerHTML={{__html: `
          (function(w, d, s, q, i) {
            w[q] = w[q] || [];
            var f = d.getElementsByTagName(s)[0],j = d.createElement(s);
            j.async = true;
            j.id = 'beacon-aplus';
            j.src = 'https://d.alicdn.com/alilog/mlog/aplus/' + i + '.js';
            f.parentNode.insertBefore(j, f);
           })(window, document, 'script', 'aplus_queue', '203520406');

          //集成应用的appKey
          aplus_queue.push({
            action: 'aplus.setMetaInfo',
            arguments: ['appKey', 'aTestAppkey']
          })
          //如果是私有云部署还需要在上面那段JS后面紧接着添加日志域名埋点
          //通常私有云日志服务端域名类似于：quickaplus-web-api.xxx.com.cn, 具体域名要找交付同学要
          aplus_queue.push({
            action: 'aplus.setMetaInfo',
            arguments: ['aplus-rhost-v', 'log-api.aplus.emas-poc.com']
            // arguments: ['aplus-rhost-v', 'log-api-daily.aplus.emas-poc.com'],
          });
          //开启调试模式
          aplus_queue.push({
            action: 'aplus.setMetaInfo',
            arguments: ['DEBUG', true]
          });
          // 设置aplus-waiting = MAN, 关闭自动pv上报
          // aplus_queue.push({
          //   action: 'aplus.setMetaInfo',
          //   arguments: ['aplus-waiting', 'MAN']
          // });

          aplus_queue.push({
            action: 'aplus.setMetaInfo',
            arguments: ['aplus-auto-exp', [{
              'cssSelector': '.banner_item',
              'logkey': 'test_auto_exp_banner',
              'props': ['data-index'],
            }, {
              'cssSelector': '.exposure-grid-item',
              'logkey': 'test_auto_exp_grid',
              'props': ['data-index', 'data-name'],
            }], ]
          })

          aplus_queue.push({
            action: 'aplus.setMetaInfo',
            arguments: ['aplus-auto-clk', [{
              'cssSelector': '.auto_clk',
              'logkey': 'test_auto_clk',
              'props': ['data-product', 'data-productColor', 'data-productId'],
            }]]
          })

          aplus_queue.push({
            action: 'aplus.setMetaInfo',
            arguments: ['_user_id', 'testid']
          });

          aplus_queue.push({
            action: 'aplus.setMetaInfo',
            arguments: ['pageConfig', {
              '/': {
                pageName: 'home_page_test'
              },
              '/integrate': {
                pageName: 'integrate_page_test'
              },
              '/pv': {
                pageName: 'pv_page_test'
              },
              '/click': {
                pageName: 'clk_page_test'
              },
              '/exposure': {
                pageName: 'exposure_page_test'
              },
            }]
          });
        `}}>
        </script>
      </head>
      <body>
        {/* root container */}
        <Root />
        <Script />
      </body>
    </html>
  );
}

export default Document;