import {observable,action,computed} from 'mobx'
import loginStore from './login'
import siderStore from './sidebar'
import menuStore from './menu'
import  moment  from "moment"   
const store={
    loginStore,siderStore,menuStore
}

export default store