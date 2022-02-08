import React, { useState, useEffect } from 'react';
import {
  NavBar,
  TabBar,
  Swiper,
  Grid,
  Divider,
  InfiniteScroll,
  List,
  Mask,
} from 'antd-mobile-v5';
import { connect } from 'dva';
import {
  AppOutline,
  MessageOutline,
  MessageFill,
  UnorderedListOutline,
  UserOutline,
} from 'antd-mobile-icons';
import { history } from '@/.umi/core/history';
function mapStateToProps(state: any) {
  const { userInfo } = state.user; // test就是models命名空间名字
  console.log(state.user);
  return {
    userInfo,
  };
}
const myPage: React.FC = (props: any) => {
  const tabs = [
    {
      key: 'user',
      title: '首页',
      icon: <AppOutline />,
    },
    {
      key: 'todo',
      title: '我的待办',
      icon: <UnorderedListOutline />,
      badge: '5',
    },
    {
      key: 'message',
      title: '我的消息',
      icon: (active: boolean) =>
        active ? <MessageFill /> : <MessageOutline />,
    },
    {
      key: 'my',
      title: '个人中心',
      icon: <UserOutline />,
    },
  ];
  useEffect(() => {
    return function cleanup() {
      console.log('销毁');
    };
  }, []);

  function routerChange(data: any) {
    history.push('/' + data);
  }
  return (
    <div>
      <NavBar style={{ position: 'fixed', top: 0, left: 0, right: 0 }}>
        昆山工会
      </NavBar>
      <div
        style={{
          position: 'absolute',
          top: 46,
          bottom: 50,
          left: 0,
          right: 0,
          padding: '0 10px',
          overflow: 'hidden',
          overflowY: 'auto',
        }}
      >
        {props.userInfo.name}
      </div>

      <TabBar
        activeKey="my"
        style={{ position: 'fixed', bottom: 0, left: 0, right: 0 }}
        onChange={routerChange.bind(this)}
      >
        {tabs.map((item) => (
          <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
        ))}
      </TabBar>
    </div>
  );
};

export default connect(mapStateToProps)(myPage);
