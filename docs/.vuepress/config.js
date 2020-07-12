module.exports = {
    title: 'Awesome App',
    description: '收集的app',
    base: '/awesome-app/',
    evergreen: true,
    head: [
        ['link', { rel: 'icon', href: `/favicon.png` },],
        ['script', { src: `https://at.alicdn.com/t/font_1912560_jfz1kdte36m.js` },],
    ],
    plugins: [
        '@vuepress/active-header-links',
        '@vuepress/back-to-top',
        '@vuepress/last-updated'
    ],
    themeConfig: {
        logo: '/favicon.png',
        repo: 'ShoorDay/awesome-app',
        docsDir: 'docs',
        editLinks: true,
        editLinkText: '在 GitHub 上编辑此页',
        lastUpdated: '上次编辑',
        nav: [
            { text: 'App', link: '/win/' },
        ],
        sidebarDepth: 2,
        collapsable: true,
        sidebar: {
            '/win/': [
                '网络通信',
                '工作办公',
                '系统管理',
                '系统增强',
                '系统美化',
                '笔记管理',
                '电子书',
                '多媒体处理',
                '字体',
                {
                    title: '开发工具',
                    children: [
                        '开发工具/开发工具',
                        '开发工具/编辑器'
                    ]
                },
                'scoop',
            ]
        }
    },
    markdown: {
        extendMarkdown: md => {
            md.use(require('markdown-it-regex').default, {
                name: 'iconfont',
                regex: /:(if-[a-zA-Z0-9-]+):/,
                replace: match => {
                    return `<svg class="if" aria-hidden="true"><use xlink:href="#${match}"></use></svg>`
                }
            });
        }
    }
}