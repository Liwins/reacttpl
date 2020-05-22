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
    @observable layOutTop = true
        
}
const menuStore=new Menu()
export default menuStore;