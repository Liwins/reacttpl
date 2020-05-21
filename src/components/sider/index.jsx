import React from 'react'
import routes from '@/routes'
import { Layout, Menu, Icon } from 'antd';
const { Sider } = Layout;
import { NavLink, Link, Redirect, Switch,withRouter } from 'react-router-dom'
import './index.css';
import SubMenu from 'antd/lib/menu/SubMenu';
@withRouter
export default  class MySider extends React.Component {
    constructor(props){
        super(props)
    }
    getSiderMenu(){
        let result=[];
        let pathName=this.props.location.pathname;
        let a="/"+pathName.split("/")[1]
        console.log(a)
        routes.map(ele=>{
            let menuItem=[]
            if(ele.path==a){
                if(ele.child){
                    ele.child.map(childEle=>
                        result.push(<Menu.Item key={childEle.id}>
                             <Link to={childEle.path}><Icon type={childEle.icon} /><b>{childEle.text}</b></Link>
                            </Menu.Item>)
                        )
                }
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