import { defineConfig } from 'umi';

export default defineConfig({
  title: 'TailwindCSS 中国社区',
  ssr: {},
  exportStatic: {},
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [{ path: '/', component: '@/pages/index' }],
  fastRefresh: {},
});
