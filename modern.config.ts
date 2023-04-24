import { defineConfig } from '@modern-js/doc-tools';
import path from 'path';

function getI18nHelper(lang: 'zh' | 'en') {
  const cn = lang === 'zh';
  // 默认语言为中文，如果是英文，需要加上 /en 前缀
  // The default language is Chinese, if it is English, you need to add the /en prefix
  const prefix = cn ? '' : '/en';
  const getLink = (str: string) => `${prefix}${str}`;
  const getText = (cnText: string, enText: string) => (cn ? cnText : enText);
  return { getText, getLink };
}
// index
function getNavConfig(lang: 'zh' | 'en') {
  const { getText, getLink } = getI18nHelper(lang);
  return [
    {
      text: getText('首页', 'Home'),
      link: getLink('/'),
    },
    {
      text: getText('code', 'code'),
      items: [
        {
          text: getText('Java', 'Java'),
          link: getLink('/javaDoc/Java'),
        },
        {
          text: getText('React', 'React'),
          link: getLink('/reactDoc/react'),
        },
      ],
    },
    {
      text: getText('项目实践', 'ProjectPractice'),
      items: [
        {
          text: getText('全栈之巅', 'topfullstack'),
          link: getLink('/topfullstackDoc/topfullstack'),
        },
      ],
    },
    {
      text: getText('调试问题', 'DebugProblem'),
      items: [
        {
          text: getText('MongoDB', 'MongoDB'),
          link: getLink('/mongoDBDoc/mongoDB'),
        },
      ],
    },
  ];
}

// context
function getSidebarConfig(lang: 'zh' | 'en') {
  const { getText, getLink } = getI18nHelper(lang);
  // 注: 侧边栏配置可以嵌套，子菜单字段为 items
  // Note: The sidebar configuration can be nested, and the sub-menu field is items
  return {
    '/': [
      {
        text: getText('快速上手', 'Quick Start'),
        link: getLink('/guide/getting-started'),
        items: [
          {
            text: getText('安装', 'Install'),
            link: getLink('/guide/install'),
          },
        ],
      },
      {
        text: getText('基础', 'Basic'),
        link: getLink('/guide/basic'),
      },
      {
        text: getText('进阶', 'Advanced'),
        link: getLink('/guide/advanced'),
      },
    ],
  };
}

export default defineConfig({
  doc: {
    root: path.join(__dirname, 'docs'),
    title: '在争渡！再为热爱续命...',
    description: '在争渡！再为热爱续命...',
    logo: 'https://lf3-static.bytednsdoc.com/obj/eden-cn/zq-uylkvT/ljhwZthlaukjlkulzlp/logo-2x-text-0104.png',
    icon: 'https://lf3-static.bytednsdoc.com/obj/eden-cn/zq-uylkvT/ljhwZthlaukjlkulzlp/logo-1x-0104.png',
    // 默认语言
    // Default language
    lang: 'zh',
    themeConfig: {
      footer: {
        // 页脚的文案
        // Footer text
        message: '暂定...',
      },
      // 不同语言的配置
      // Configuration for different languages
      locales: [
        {
          lang: 'zh',
          title: '一个很棒的项目',
          description: '一个很棒的项目描述',
          nav: getNavConfig('zh'),
          sidebar: getSidebarConfig('zh'),
          // 语言切换按钮的文案
          // Language switch button text
          label: '简体中文',
        },
        {
          lang: 'en',
          title: 'A awesome project',
          description: 'A awesome project description',
          nav: getNavConfig('en'),
          sidebar: getSidebarConfig('en'),
          label: 'English',
        },
      ],
      socialLinks: [
        // 链接
        {
          icon: 'github',
          mode: 'link',
          content: 'https://github.com/liu4509',
        },
      ],
    },
  },
  plugins: ['@modern-js/doc-tools'],
});
