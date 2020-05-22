import React from 'react'
import routes from '@/routes'
import { Layout, Menu, Icon } from 'antd';
const { Header, Content, Footer } = Layout;
import { NavLink, Link, Redirect, Switch } from 'react-router-dom'
import './index.css';
import SubMenu from 'antd/lib/menu/SubMenu';
import config from '@/config.js'

export default  class HeaderPage extends React.Component {
    getHeaderMenu(){
        return config.layoutTopDown?this.getHeaderMenu1():this.getHeaderMenu2();
    }
    /**
     * 获取头部菜单只有一级
     */
    getHeaderMenu1(){
        let result=[];
        routes.map(ele=>{
            result.push(
                        <Menu.Item key={ele.id}>
                                 <Link to={ele.path}><Icon type={ele.icon} /><b>{ele.text}</b></Link>
                        </Menu.Item>
            )
        })
        return result
    }
    /**
     * 获取头部菜单包含二级,从配置中获取
     */
    getHeaderMenu2(){
        let result=[];
        routes.map(ele=>{
             let menuItem=[]
             if(ele.child){
                 ele.child.map(childEle=>
                     menuItem.push(<Menu.Item key={childEle.id}>
                          <Link to={childEle.path}><Icon type={childEle.icon} /><b>{childEle.text}</b></Link>
                         </Menu.Item>)
                     )
                     result.push(
                         <SubMenu key={ele.id} title={ele.text}    >
                             {menuItem}
                         </SubMenu>
                     )
             }else{
                 result.push(
                     <Menu.Item key={ele.id}>
                              <Link to={ele.path}><Icon type={ele.icon} /><b>{ele.text}</b></Link>
                     </Menu.Item>
                 )
             }
        })
        return result
    }
    render() {
        return (
            <div>
                <Header>
                    <div className='logo'></div>
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={['2']}
                        style={{ lineHeight: '64px' }}
                    >
                        {this.getHeaderMenu() }
                    </Menu>
                </Header>
            </div>
        )
    }
}