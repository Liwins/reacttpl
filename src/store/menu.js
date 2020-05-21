import {observable,action,computed} from 'mobx' 

/**
 * 定义sidebar和header中的菜单项
 *
 * 一些约定:
 * 1.菜单最多3层;
 * 2.只有"叶子"节点才能跳转;
 * 3.所有的key都不能重复;
 */
//定义sidebar菜单
class Menu{
    @observable sidebarMenu = [
        {
            key: 'index',//url
            name: '菜单1',
            icon: 'smile',
            child: [
                {
                    key: 'option1',
                    name: '模拟1',
                    icon: 'play-circle',
                },
                {
                    key: 'option2',
                    name: '模拟2',
                    icon: 'android',
                },
                {
                    key: 'option3',
                    name: '模拟3',
                    icon: 'bulb',
                }
            ]
        }, {
            key: 'page1',
            name: 'PAGE1',
            icon: 'clock-circle',
        }, {
            key: 'page2',
            name: 'PAGE2',
        }, {
            key: 'daohang',
            name: '导航',
            icon: 'appstore',
            child: [
                {
                    key: '555',
                    name: '选项5',
                },
                {
                    key: 'sanji',  // 最多只能到三级导航
                    name: '三级导航',
                    icon: 'laptop',
                    child: [
                        {
                            key: '666',
                            name: '选项6',
                            icon: 'check',
                        },
                        {
                            key: '777',
                            name: '选项7',
                            icon: 'close',
                        },
                        {
                            key: '888',
                            name: '选项8',
                        },
                        {
                            key: '999',
                            name: '选项9',
                        },
                    ],
                },
            ],
        },
    ]
    @observable headerMenu= [
        {
            key: 'userMenu',
            child: [
                {
                    key: 'modifyUser',
                    name:'修改用户信息',
                    icon:'bulb',
                    //对于headerMenu的菜单项, 可以让它跳到外部地址, 如果设置了url属性, 就会打开一个新窗口
                    // 如果不设置url属性, 行为和sidebarMenu是一样的, 激活特定的组件, 注意在index.js中配置好路由, 否则会404
                    url:''
                },{
                    key: 'user222',
                    name: '药药切克闹',
                    icon: 'rocket',
                  },
            ]
        },{
            key: 'headerMenu2',
            name: 'header菜单',
            icon: 'team',
            child: [
              {
                key: 'headerMenu111',
                name: '菜单项1',
                icon: 'windows',
                url: 'http://jxy.me',
              },
              {
                key: '菜单项2',
                name: '短信表管理',
                url: 'http://jxy.me',
              },
              {
                key: '菜单项3',
                name: '选项3',
                icon: 'chrome',
                url: 'http://jxy.me',
              },
            ],
        }
    ]
}
const menuStore=new Menu()
export default menuStore;