import {observable,action,computed} from 'mobx'
import loginStore from './login'
import siderStore from './sidebar'
import  moment  from "moment"   
const store={
    loginStore,siderStore
}

export default store