import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    {
      path: '/login',
      title: '登录',
      component: '@/pages/login'
    },
    {
      path: '/',
      title: '首页',
      // redirect: '/login',
      component: '@/pages',
      wrappers: [ // 用于做权限校验， 访问/， 如果权限校验通过就渲染src/pages 否则就跳转到/login
        '@/wrappers/auth'
      ]
    },
    {
      path: '/work',
      exact: false,
      component: '@/layouts/index',
      routes: [ // 配置子路由，通常在需要为多个路径增加layout组件时使用
        {
          path: '/work',
          title: '工作台', // 配置路由标题
          component: '@/pages/work'
        }
      ]
    }
  ],
  fastRefresh: {},
});
