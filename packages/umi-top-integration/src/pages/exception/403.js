import React from 'react';
import router from 'umi/router';
import { Button } from 'antd';
import { initRouter } from 'configs/config';
import Exception from './components/index';

class Exception403Page extends React.Component {
    render () {
        return <Exception 
            type="403" 
            style={{ minHeight: 500, height: '80%' }} 
            actions={<Button type="primary" onClick={() => { router.push(`${initRouter}`) }}>返回首页</Button>}
            />;
    }
}

export default Exception403Page;