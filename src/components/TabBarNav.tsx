import React, { useState } from 'react';
import { Badge, TabBar } from 'antd-mobile-v5';
import {
  AppOutline,
  MessageOutline,
  MessageFill,
  UnorderedListOutline,
  UserOutline,
} from 'antd-mobile-icons';
// import s from './../../index.less'  // 定位到底部样式
import { history } from 'umi';

const TabBarComponent: React.FC = (props: any) => {
  const [activeKey, setActiveKey] = useState(
    history.location.pathname.split('/')[1],
  );

  const tabs = [
    {
      key: 'home',
      title: '首页',
      icon: <AppOutline />,
      link: '/home',
    },
    {
      key: 'main',
      title: '个人中心',
      icon: <UserOutline />,
      link: '/main',
    },
  ];
  const InfoActiveKey = (e: string) => {
    setActiveKey(e);
    let InfoActiveKeyData = tabs.filter((item) => item.key.includes(e));
    history.replace(InfoActiveKeyData[0].link);
  };
  return (
    <div>
      {props.children}
      <div>
        <TabBar
          activeKey={activeKey}
          onChange={InfoActiveKey}
          style={{ position: 'fixed', bottom: 0, left: 0, right: 0 }}
        >
          {tabs.map((item) => {
            return (
              <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
            );
          })}
        </TabBar>
      </div>
    </div>
  );
};
export default TabBarComponent;
