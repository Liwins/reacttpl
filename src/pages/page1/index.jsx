import React from 'react';
import { inject, observer } from 'mobx-react'
@inject('store') @observer
export default class Page1 extends React.Component {
    constructor(props) {
        super(props)
        this.state={}
    }
    render(){
        return (
            <div>
                页面一
            </div>
        )
    }
}