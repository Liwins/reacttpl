import React from 'react'
import {   inject,  observer} from 'mobx-react'
import {Button} from 'antd';
import MyBreacCurb from '../../../components/mybreadcrub'
@inject('store') @observer
export default class HomePage2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="div">
                <MyBreacCurb/>
               配置页面二
               
            </div>
        )
    }
}
