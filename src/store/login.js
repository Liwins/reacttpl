import {observable,action,computed} from 'mobx'
class LoginStore{
    @observable login=false;
    @observable userName:'未登录';
    @action login=(username)=>{
        //这里应该有ajax后端进行验证
        self.userName=username;
        self.login=true;
    }
}
const loginStore=new LoginStore()
export default loginStore;