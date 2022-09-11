import { defineConfigWithTheme } from 'vitepress'
import { searchForWorkspaceRoot } from 'vite'
import type { Config as ThemeConfig } from '@vue/theme'
import baseConfig from '@vue/theme/config'
import { headerPlugin } from './headerMdPlugin'
import path from 'path'

const nav = [
  {
    text: 'Docs',
    activeMatch: `^/(guide)/`,
    items: [{ text: 'Guide', link: '/guide/introduction' }]
  }
]

export const sidebar = {
  '/guide/': [
    {
      text: '起步',
      items: [{ text: 'Introduction', link: '/guide/introduction' }]
    }
  ]
}

export default defineConfigWithTheme<ThemeConfig>({
  extends: baseConfig,

  lang: 'en-zh',
  title: 'Meta',
  description: 'Meta - Meta',
  srcDir: 'src',
  scrollOffset: 'header',
  lastUpdated: true,

  head: [
    [
      'script',
      {
        src: 'https://cdn.usefathom.com/script.js',
        'data-site': 'XNOLWPLB',
        'data-spa': 'auto',
        defer: ''
      }
    ],
    [
      'meta',
      {
        name: 'keywords',
        content: '流媒体,Electron,推流,拉流，pm2,ffmpeg'
      }
    ],
    [
      'meta',
      {
        name: 'description',
        content: 'Meta'
      }
    ]
  ],

  themeConfig: {
    nav,
    sidebar,

    socialLinks: [{ icon: 'github', link: 'https://github.com/godkun/meta' }],

    editLink: {
      repo: 'godkun/meta',
      text: 'Edit this page on GitHub'
    }
  },

  markdown: {
    config(md) {
      md.use(headerPlugin)
    }
  },

  vite: {
    define: {
      __VUE_OPTIONS_API__: false
    },
    optimizeDeps: {
      include: ['gsap', 'dynamics.js'],
      exclude: ['@vue/repl']
    },
    // @ts-ignore
    ssr: {
      external: ['@vue/repl']
    },
    server: {
      host: true,
      fs: {
        allow: [
          // search up for workspace root
          searchForWorkspaceRoot(process.cwd())
        ]
      }
    },
    build: {
      minify: 'terser',
      chunkSizeWarningLimit: Infinity
    },
    json: {
      stringify: true
    }
  },

  vue: {
    reactivityTransform: true
  }
})
