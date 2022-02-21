import React, { useState, useEffect } from 'react';
import { TabBar } from 'antd-mobile-v5';
import { connect } from 'dva';
import {
  AppOutline,
  MessageOutline,
  MessageFill,
  UnorderedListOutline,
  UserOutline,
} from 'antd-mobile-icons';
function mapStateToProps(state: any) {
  const { userInfo } = state.user; // test就是models命名空间名字
  return {
    userInfo,
  };
}
const MainPage: React.FC = (props: any) => {
  const tabs = [
    {
      key: 'home',
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
  return (
    <>
      <TabBar
        activeKey="home"
        style={{ position: 'fixed', bottom: 0, left: 0, right: 0 }}
      >
        {tabs.map((item) => (
          <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
        ))}
      </TabBar>
    </>
  );
};

export default connect(mapStateToProps)(MainPage);
