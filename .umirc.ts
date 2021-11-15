import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', redirect:'/user' },
    { path: '/user', component: '@/pages/user' },
    { path: '/my', component: '@/pages/my' },
   
    { path: '/login', component: '@/pages/index' },
   
  ],
  fastRefresh: {},
  proxy: {
    '/api': {
      target: 'http://localhost/',
      pathRewrite: { '^/api': 'http://localhost/' },
      changeOrigin: true
    }
  }
});
