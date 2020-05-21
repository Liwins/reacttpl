import Home from '@/pages/home'
import HomePage1 from '@/pages/home/homepage1'
import HomePage2 from '@/pages/home/homepage2'
import Page1 from "@/pages/page1";
import Page2 from "@/pages/page2";

/**
 * 头菜单(支持多级菜单)
 */
const headerRoutes=[
    {
        id:11,
        path:'/home',
        component:Home,
        text:'配置',
        icon:'setting',
        child:[
            {
            id:111,
            path:'/home/home',
            component:Home,
            text:'配置',
            icon:'setting',
        },
            {
                id:112,
                path:'/home/page1',
                component:HomePage1,
                text:'配置页面一',
                icon:'setting'
            }, {
                id:113,
                path:'/home/page2',
                component:HomePage2,
                text:'配置页面二',
                icon:'setting'
            }
        ]
    },
    {
        id:12,
        path:'/page1',
        component:Page1,
        text:"行情",
        icon: 'stock'
    },
    {
        id:13,
        path:'/page2',
        component:Page2,
        text:"项目简介",
        icon: 'pic-left'
    }
]
/**
 * slide 菜单(支持多级菜单)
 */
const routes=[
    {
        id:21,
        path:'/home',
        component:Home,
        text:'配置',
        icon:'setting',
        child:[
            {
                id:211,
                path:'/home',
                component:Home,
                text:'配置',
                icon:'setting', 
            },
            {
                id:212,
                path:'/home/page1',
                component:HomePage1,
                text:'配置页面一',
                icon:'setting'
            }, {
                id:213,
                path:'/home/page2',
                component:HomePage2,
                text:'配置页面二',
                icon:'setting'
            }
        ]
    },
    {
        id:22,
        path:'/page1',
        component:Page1,
        text:"行情",
        icon: 'stock'
    },
    {
        id:23,
        path:'/page2',
        component:Page2,
        text:"项目简介",
        icon: 'pic-left'
    }
]
export  {routes,headerRoutes}