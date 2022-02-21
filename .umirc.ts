import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    // { path: '/', redirect: '/main' },
    // { path: '/main', component: '@/pages/Main/main' },
    { path: '/login', component: '@/pages/Login/Login' },
    {
      path: '/',
      component: '@/pages/Layout/Index', // layouts页面
      routes: [
        // { path: '/home', component: '@/pages/home' }, // 首页
        { path: '/main', component: '@/pages/Main/main' },
      ],
    },
  ],
  fastRefresh: {},
  proxy: {
    '/api': {
      target: 'http://localhost:7001/',
      pathRewrite: { '^/api': 'http://localhost:7001/' },
      changeOrigin: true,
    },
  },
});
