import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', redirect: '/main' },
    { path: '/user', component: '@/pages/user' },
    { path: '/my', component: '@/pages/my' },
    { path: '/message', component: '@/pages/message' },
    { path: '/login', component: '@/pages/index' },
    { path: '/main', component: '@/pages/main' },
  ],
  fastRefresh: {},
  proxy: {
    '/api': {
      target: 'http://localhost:7002/',
      pathRewrite: { '^/api': 'http://localhost:7002/' },
      changeOrigin: true,
    },
  },
});
