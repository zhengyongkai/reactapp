import React, { useState, useEffect, useRef } from 'react';
import { Tabs } from 'antd-mobile-v5';
import { connect } from 'dva';
import styles from './css/recommend.less';
import Scroll from '@/components/scroll/scroll';
function mapStateToProps(state: any) {
  const { userInfo } = state.user; // test就是models命名空间名字
  return {
    userInfo,
  };
}

const MainPage: React.FC = (props: any) => {
  const scrollRef = useRef(null);
  const handlePullUp = () => {
    console.log('up');
  };
  const handlePullDown = () => {
    console.log('down');
  };

  const data = () => {
    return ['blue', 'red', 'yellow'].map((i) => {
      return <div style={{ height: 600, background: i }}>{i}</div>;
    });
  };
  return (
    <>
      <div style={{ marginBottom: 10 }} className={styles.bg}>
        <Tabs
          style={{
            '--title-font-size': '14px',
          }}
        >
          <Tabs.Tab title="全站" key="fruits" />
          <Tabs.Tab title="高赞" key="vegetables" />
          <Tabs.Tab title="体育" key="sport" />
          <Tabs.Tab title="生活" key="live" />
          <Tabs.Tab title="前端" key="fontend" />
        </Tabs>
      </div>
      <div
        className={styles.bg}
        style={{
          position: 'fixed',
          top: 100,
          bottom: 60,
          left: 0,
          right: 0,
          overflow: 'hidden',
        }}
      >
        <Scroll ref={scrollRef} pullUp={handlePullUp} pullDown={handlePullDown}>
          <div>
            <div>{data()}</div>
          </div>
        </Scroll>
      </div>
    </>
  );
};

export default connect(mapStateToProps)(MainPage);
