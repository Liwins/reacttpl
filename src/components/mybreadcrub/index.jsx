import React from 'react'
import { inject, observer } from 'mobx-react'
import { Button, Breadcrumb, Row, Col } from 'antd';
import { routes, headerRoutes } from '@/routes'
import { withRouter } from 'react-router-dom'
import './index.css'
@withRouter
export default class MyBreadcrumb extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    getNode() {
        let nodes = []
        let location = this.props.location.pathname;
        headerRoutes.map((ele) => {
            if (ele.path == location) {
                // nodes.push(<Breadcrumb.Item key={ele.id} >{ele.text}</Breadcrumb.Item>);
            }
            if (ele.child) {
                ele.child.map(eleChild => {
                    if (eleChild.path == location) {
                        nodes.push(<Breadcrumb.Item key={ele.id} href={'#/' + ele.path}>{ele.text}</Breadcrumb.Item>)
                        nodes.push(<Breadcrumb.Item key={eleChild.id} >{eleChild.text}</Breadcrumb.Item>)
                        return nodes
                    }
                }
                )
            }
        })
        if (nodes.length > 0) {
            return nodes;
        }
        routes.map((ele) => {
            if (ele.path == location) {
                // nodes.push(<Breadcrumb.Item key={ele.id} >{ele.text}</Breadcrumb.Item>);
            }
            if (ele.child) {
                ele.child.map(eleChild => {
                    if (eleChild.path == location) {
                        nodes.push(<Breadcrumb.Item key={ele.id} href={'#/' + ele.path}>{ele.text}</Breadcrumb.Item>)
                        nodes.push(<Breadcrumb.Item key={eleChild.id} >{eleChild.text}</Breadcrumb.Item>)
                    }
                }
                )
            }
        })
        return nodes
    }
    render() {
        return (
            <div className="mycl">
                <Row>
                    <Col span={8}>
                        <Breadcrumb className="bradeClass" >
                            {this.getNode()}
                        </Breadcrumb>
                    </Col>
                </Row>
            </div>

        )

    }
}
