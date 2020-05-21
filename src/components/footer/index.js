import React from 'react';
import globalConfig from '../../config';
import { Layout } from 'antd';
const { Footer } = Layout;
import './index.less';
/**
 * 定义Footer组件
 */
export default class MyFooter extends React.PureComponent {

    render() {
        const text = globalConfig.footer || 'footer被弄丢啦!';

        // backtop如果不设置target会有问题
        // footer的字可以有html标签, 有一定XSS的风险, 不过问题不大
        return (
            <div>
                <Footer style={{ textAlign: 'center' }}>{text}</Footer>
            </div>
        );
    }

}
