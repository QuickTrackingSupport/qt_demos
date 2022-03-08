/* eslint-disable */
// MPA 模式下该文件无效
import { runApp } from 'rax-app';
import aplus from './utils/aplus';


const appConfig = {
  router: {
    type: 'browser', //前端路由 改为 BrowserHistory 模式
  },
  app: {
    aplus
  }
};
runApp(appConfig);
