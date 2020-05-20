import React from 'react'
import { NavLink, Route, Redirect, Switch } from 'react-router-dom'
import './style.scss'
import routes from '../../router'
import { Icon } from 'antd'
export default  class Layout extends React.Component {
    createRouter(type) {
        let res1 = []
        let res2 = []
        routes.map(ele => {
            if (type == 1) {
                res1.push(
                    <div key={ele.id}>
                        <NavLink exact to={ele.path} activeClassName="on">
                            <Icon type={ele.icon} />
                            {ele.text}
                        </NavLink>
                    </div>
                )
            } else {
                res2.push(
                    <Route key={ele.id} exact path={ele.path} component={ele.component} />
                )
            }
        })
        console.log(res2)
        return type == 1 ? res1 : res2
    }
    render() {
        return (
          <div className='layout'>
            <div className='aside'>
              <div className='navs'>
              { this.createRouter(1) }
              </div>
            </div>
            <div className='header'>Header</div>
            <div className='main'>
              <div>
                {/*Switch必须是Route直接父组件，Route不能被其它JSX对象所包裹*/}
                <Switch>
                { this.createRouter(2) }
                </Switch>
                <Redirect from='/*' to='/jsx' />
              </div>
            </div>
          </div>
        )
      }
}
