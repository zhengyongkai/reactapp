import React, { useState } from 'react';
import { Badge, TabBar } from 'antd-mobile-v5';
import {
  AppOutline,
  UserOutline,
  HeartOutline,
  ShopbagOutline,
} from 'antd-mobile-icons';
// import s from './../../index.less'  // 定位到底部样式
import { history } from 'umi';

const TabBarComponent: React.FC = (props: any) => {
  const [activeKey, setActiveKey] = useState(
    history.location.pathname.split('/')[1],
  );

  const tabs = [
    {
      key: 'main',
      title: '首页',
      icon: <AppOutline />,
      link: '/main/homePage/tuijian',
    },
    {
      key: 'love',
      title: '关注',
      icon: <HeartOutline />,
      link: '/main/mainPage',
    },
    {
      key: 'shop',
      title: '商城',
      icon: <ShopbagOutline />,
      link: '/main/mainPage',
    },
    {
      key: 'mine',
      title: '我的',
      icon: <UserOutline />,
      link: '/main/mainPage',
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
