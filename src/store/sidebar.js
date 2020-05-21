import {observable,action,computed} from 'mobx'
const initState={
    collapse: false,  // 是否折叠
}
class SiderStore{
    @action sidebarCollapse(state =initState,action = {}){
        switch (action.type) {
            case 'SIDEBAR_COLLAPSE':
              return {collapse: !state.collapse};
            default: // 注意必须要有default语句
              return state;
          }
    }
}
const siderStore=new SiderStore()
export default siderStore;
