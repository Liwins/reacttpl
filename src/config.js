/**
 * 定义这个那个项目的全局配置  
 */
// 约定优于配置
// 我可以提供尽量多的配置, 但尽量不要太个性化, 接口的路径/名称/格式之类的
// 遵循统一的规范, 好维护, 交给其他人也比较简单
module.exports = {
    name: '管理后台',//项目名称
    favicon: '/public/favicon.ico',
    footer: 'rs版权所有 © 2015-2099',
    tabMode: {//tab模式相关配置
        enable: false,
        allowDuplicate: false,//同一个菜单只允许一个tab
    },
    log: {
        level: 'info',
        debug: [],
        info: [],
        warn: [],
        error: ['loggerA', 'loggerB'],
    },
    api: {
        host: 'http://localhost:12345',//调用ajax接口地址,默认值为空
        path: '/api',//ajax请求的路径
        timeout: 15000,//请求超时,ms
    },
    login: {//登录相关配置
        getCurrentUser: '/getCurrentUser',//后端必须提供接口校验当前用户的身份,如果拿不到用户信息,才会尝试登录
        //登录情况
        // 1.sso  
        sso: '',//是否使用单点登录?是的话我会把地址encode后加到后面, 然后跳转, 如果这个是空字符串, 说明不使用单点登录
        //2.不使用sso,使用提供的一个登录界面  
        validate: '/login',
        logout: '/logout',//退出url
    }, upload: {  // 上传相关配置
        // 上传图片和上传普通文件分别配置
        file: '/uploadFile',  // 默认的上传文件的接口
        fileSizeLimit: 10240,  // 默认的文件大小限制, 单位KB
    },
    sidebar: {  // 侧边栏相关配置
        collapsible: true,  // 是否显示折叠侧边栏的按钮
        autoMenuSwitch: true,  // 只展开一个顶级菜单, 其他顶级菜单自动折叠
    },
    DBTable: {  // DBTable组件相关配置
        pageSize: 50, // 表格每页显示多少条数据
        showSizeChanger: true, // 是否可以修改每页显示多少条数据
        pageSizeOptions: ['10', '20', '50', '100'], // 指定每页可以显示多少条

        default: {  // 针对每个表格的默认配置
            showExport: true,  // 显示导出按钮, 默认true
            showImport: true,  // 显示导入按钮, 默认true
            showInsert: true,  // 显示新增按钮, 默认true
            showUpdate: true,  // 显示修改按钮, 默认true
            showDelete: true,  // 显示删除按钮, 默认true

            asyncSchema: false,  // 是否从服务端加载schema, 默认false
            ignoreSchemaCache: false,  // 是否忽略schema的缓存, 对于异步schema而言, 默认只会请求一次后端接口然后缓存起来
        },
    },
    /**
    * 是否单点登录
    *
    * @returns {boolean}
    */
   isSSO() {
     if (this.login.sso && this.login.sso !== '') {
       return true;
     } else {
       return false;
     }
   },
}