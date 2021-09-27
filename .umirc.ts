import { defineConfig } from 'umi';

export default defineConfig({
  title: 'TailwindCSS 中文社区',
  metas: [
    {
      name: 'keywords',
      content: 'TailwindCSS, 中文社区, 模板, 组件',
    },
    {
      name: 'description',
      content: '一个国内最活跃的，资源最丰富的 TailwindCSS 开发者社区',
    },
  ],
  // ssr: {},
  // exportStatic: {},
  hash: true,
  runtimePublicPath: true,
  publicPath:
    process.env.NODE_ENV === 'production'
      ? 'https://cdn.jsdelivr.net/gh/turkyden/tailwindcss-china@gh-pages/'
      : '/',
  analytics: {
    baidu: '1ec9adb08b058df906eba988612f4ce3',
  },
  favicon: '/assets/favicon.svg',
  ssr: {},
  exportStatic: {},
  theme: {
    '@primary-color': '#10B981',
  },
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [{ path: '/', component: '@/pages/index' }],
  fastRefresh: {},
});
