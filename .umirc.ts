import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  hash: true,
  history: { type: 'hash' },
  routes: [
    { path: '/', redirect: '/main/homePage/tuijian' },
    { path: '/login', component: '@/pages/Login/Login' },
    {
      path: '/main',
      component: '@/pages/Layout/Index', // layouts页面
      routes: [
        {
          path: '/main/homePage',
          component: '@/pages/Main/home',
          routes: [
            {
              path: '/main/homePage/tuijian',
              component: '@/pages/Main/Index',
            },
            { path: '/main/homePage/video', component: '@/pages/Main/Video' },
            { path: '/main/homePage/hot', component: '@/pages/Main/Hot' },
          ],
        },
        { path: '/main/mainPage', component: '@/pages/Main/main' },
      ],
    },
  ],
  fastRefresh: {},
  proxy: {
    '/api': {
      target: 'http://localhost:7001/',
      pathRewrite: { '^/api': '' },
      changeOrigin: true,
    },
  },
});
