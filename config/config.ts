import { defineConfig } from 'umi';
import { resolve } from 'path';

export default defineConfig({
  locale: { default: 'zh-CN' },
  alias: {
    theme: resolve(__dirname, '../src/theme'),
  },
  // chrome 插件配置项
  extensions: {
    name: 'Power Yuque',
    description: '语雀增强插件',
    optionsUI: {
      page: '@/pages/options',
      openInTab: true,
    },
    contentScripts: [
      {
        matches: ['https://yuque.com/*', 'https://www.yuque.com/*'],
        entries: ['@/contentScripts/index'],
      },
    ],
    background: { scripts: ['@/background/index'] },
    popupUI: '@/pages/popup',
    icons: {
      16: 'logo/logo@16.png',
      32: 'logo/logo@32.png',
      48: 'logo/logo@48.png',
      128: 'logo/logo@128.png',
    },
  },
});
