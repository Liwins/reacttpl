import React from 'react'
import {   inject,  observer} from 'mobx-react'
import {Button} from 'antd';
import './style.css'

@inject('store') @observer
export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    handleTodes(type) {
        let { store } = this.props
        switch (type) {
            case 'add':
                store.addTodo("一条新任务")
                break;
            case 'delete':
                store.deleteTodo()
                break
            case 'reset':
                store.resetTodo()
                break
            default:

        }
    }
    render() {
        let { store } = this.props
        return (
            <home className="div">
                <h1>主页 </h1>
                <div>{store.desc}</div>
                <Button type="primary" onClick={this.handleTodes.bind(this,"add")}>添加任务</Button>
                <Button onClick={this.handleTodes.bind(this,"delete")}>删除一条任务</Button>
                <Button onClick={this.handleTodes.bind(this,"reset")}>任务重置</Button>
                {
                    store.todos.map((item,index,arr)=>{
                        return (
                            <div key ={index}>{item}</div>
                        )

                    })
                }
            </home>
        )
    }
}
