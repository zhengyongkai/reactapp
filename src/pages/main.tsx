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
  PullToRefresh,
} from 'antd-mobile-v5';
import { connect } from 'dva';
import { checkResponse } from '@/utils/common';
import { CloseCircleOutline } from 'antd-mobile-icons';
import styles from './less/main.less';
import commonStyles from './less/common.less';
import './less/main.less';
import {
  AppOutline,
  MessageOutline,
  MessageFill,
  UnorderedListOutline,
  UserOutline,
  ScanningOutline,
  HistogramOutline,
} from 'antd-mobile-icons';
import { history } from '@/.umi/core/history';
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
    <div>
      <div className={styles.Navbar}>
        <div>
          <img
            src={props.userInfo.head_img}
            style={{ width: 32, height: 32, borderRadius: '50%' }}
          ></img>
        </div>
        <div style={{ width: '72%' }}>
          <input
            placeholder="购房证明"
            className="wx-input"
            type="text"
            style={{ width: '100%' }}
          />
        </div>
        <div style={{ textAlign: 'center' }}>
          <ScanningOutline fontSize={24}></ScanningOutline>
          <div style={{ fontSize: 10, marginTop: -5 }}>扫一扫</div>
        </div>
      </div>
      <div className={commonStyles.scrollContent} style={{top: 40}}>
        <PullToRefresh onRefresh={async () => {}}>
          <div
            className={styles.Navbar}
            style={{ height: 40, marginTop: 0.5,padding:'10px 0' }}
          >
            <div
              className={commonStyles.flexAlignCenter}
              style={{ width: '33%' }}
            >
              <div style={{ marginRight: 8, fontWeight: 'lighter' }}>
                <HistogramOutline fontSize={16}></HistogramOutline>
              </div>
              <div style={{ fontSize: 18 }}>3°-17°</div>
            </div>
            <div
              className={`${commonStyles.flexAlignCenter}`}
              style={{ width: '33%' }}
            >
              <div
                style={{
                  fontSize: 10,
                  marginRight: 8,
                  wordBreak: 'normal',
                  width: 24,
                }}
              >
                空气质量
              </div>
              <div style={{ fontSize: 18 }}>148</div>
            </div>
            <div
              className={commonStyles.flexAlignCenter}
              style={{ width: '33%' }}
            >
              <div
                style={{
                  fontSize: 10,
                  marginRight: 8,
                  wordBreak: 'normal',
                  width: 24,
                }}
              >
                今日步数
              </div>
              <div style={{ fontSize: 18 }}>0</div>
            </div>
          </div>
        </PullToRefresh>
      </div>
    </div>
  );
};

export default connect(mapStateToProps)(MainPage);
