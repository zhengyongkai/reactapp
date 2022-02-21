import React, { Component } from 'react';
import TabBar from '@/components/TabBarNav'; // 底部tabbar组件
import { history, Location } from 'umi';

const ULR_NO_LAYOUT = ['/', '/home', '/main']; // 判断在哪几个路由下需要出现底部导航

class Index extends Component {
  componentDidMount() {}
  renderBody = () => {
    console.log(location.pathname);
    const { children } = this.props;
    if (ULR_NO_LAYOUT.includes(location.pathname)) {
      // 需要tabbar的页面
      return <TabBar {...this.props} />;
    }
    return <React.Fragment>{children}</React.Fragment>;
  };

  render() {
    return <React.Fragment>{this.renderBody()}</React.Fragment>;
  }
}

export default Index;
