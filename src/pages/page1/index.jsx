import React from 'react';
import { inject, observer } from 'mobx-react'
import MyBreacCurb from '../../components/mybreadcrub'
@inject('store') @observer
export default class Page1 extends React.Component {
    constructor(props) {
        super(props)
        this.state={}
    }
    render(){
        return (
            <div>
                <MyBreacCurb/>
                页面一
            </div>
        )
    }
}