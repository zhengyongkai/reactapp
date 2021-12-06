import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', redirect: '/user' },
    { path: '/user', component: '@/pages/user' },
    { path: '/my', component: '@/pages/my' },
    { path: '/message', component: '@/pages/message' },
    { path: '/login', component: '@/pages/index' },
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
