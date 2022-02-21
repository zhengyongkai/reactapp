import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', redirect: '/main' },
    { path: '/main', component: '@/pages/main' },
    { path: '/login', component: '@/pages/Login/Login' },
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
