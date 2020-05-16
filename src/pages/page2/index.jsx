import React from 'react';
import { inject, observer } from 'mobx-react'
@inject('store') @observer
export default class Page2 extends React.Component {
    constructor(props) {
        super(props)
        this.state={}
    }
    render(){
        return (
            <div>
                页面二
            </div>
        )
    }
}