const bottomPagePath = require('umi-bottom-common').getPagePath()

const routes = [
    {
        path: '/', component: bottomPagePath.layoutPath, routes: [
            { path: '/', component: bottomPagePath.dashboardPath },
            { path: '/dashboard', component: bottomPagePath.dashboardPath },

            // 商品管理
            { path: '/goods', component: './goods/index.js' },

            { path: '/exception/403', component: bottomPagePath.exception403Path },
            { path: '/exception/404', component: bottomPagePath.exception404Path },
            { path: '/exception/500', component: bottomPagePath.exception500Path },
            { component: bottomPagePath.exception404Path },
        ],
    },
]

module.exports = routes