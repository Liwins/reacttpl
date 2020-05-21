import React from 'react'
import {routes} from '@/router'
import { Layout, Menu, Icon } from 'antd';
const { Sider } = Layout;
import { NavLink, Link, Redirect, Switch } from 'react-router-dom'
import './index.css';
import SubMenu from 'antd/lib/menu/SubMenu';

export default  class MySider extends React.Component {
    getSiderMenu(){
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
                        <SubMenu key={ele.id} title={ele.text} >
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
                <Sider width={200} style={{ background: '#fff' }}>
                <Menu
                mode="inline"
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                style={{ height: '100%', borderRight: 0 }}
                >
                    {this.getSiderMenu()}
                </Menu>
                </Sider>
            </div>
        )
    }
}