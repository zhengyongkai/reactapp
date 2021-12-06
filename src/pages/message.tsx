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
  RightOutline
} from 'antd-mobile-icons';
import { history } from '@/.umi/core/history';
import style from './less/IMessageItem.less';
import voice from '@/assets/voice.png';
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
        消息
      </NavBar>
      <div
        style={{
          position: 'absolute',
          top: 46,
          bottom: 50,
          left: 0,
          right: 0,
          padding: '0',
          overflow: 'hidden',
          overflowY: 'auto',
        }}
      >
        <div className={style.messageContent}>
          <div className={style.leftImg}>
            <img src={voice}></img>
          </div>
          <div className={style.rightContent} style={{ marginLeft: '12px' }}>
            <div>
              <div className={style.title}>系统信息</div>
              <div className={style.date}>8月17日</div>
            </div>
            <div>
              <div>欢迎使用我的南京</div>
            </div>
          </div>
        </div>
        <div className={style.messageContent} style={{ marginTop: 50 }}>
          <div className={style.leftImg}>
            <img src={voice}></img>
          </div>
          <div className={style.rightContent} style={{ marginLeft: '12px' }}>
            <div>
              <div className={style.title}>查找群</div>
            </div>
            <div>
              <div>根据群名称搜索</div>
            </div>
          </div>
          <div style={{lineHeight:'52px'}}>
          <RightOutline></RightOutline>
          </div>
        </div>
      </div>

      <TabBar
        activeKey="message"
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
