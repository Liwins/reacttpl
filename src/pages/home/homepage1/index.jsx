import React from 'react'
import {   inject,  observer} from 'mobx-react'
import {Button,Breadcrumb} from 'antd';
import routesf from '@/router'
import MyBreacCurb from '../../../components/mybreadcrub'
import {withRouter } from 'react-router-dom'
@inject('store') @observer @withRouter
export default class HomePage1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
   
    render() {
        return (
            <div className="div">
                <MyBreacCurb/>
                配置页面一
            </div>
        )
    }
}
