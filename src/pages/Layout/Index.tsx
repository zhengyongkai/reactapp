import React, { Component } from 'react';
import TabBar from '@/components/TabBarNav'; // 底部tabbar组件

const ULR_NO_LAYOUT = [
  '/main',
  '/main/homePage',
  '/main/mainPage',
  '/main/homePage/tuijian',
  '/main/homePage/video',
  '/main/homePage/hot',
]; // 判断在哪几个路由下需要出现底部导航

class Index extends Component {
  renderBody = () => {
    console.log(location.hash.substring(1));
    const { children } = this.props;
    if (ULR_NO_LAYOUT.includes(location.hash.substring(1))) {
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
