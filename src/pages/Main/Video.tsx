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
  return <>vIDEO</>;
};

export default connect(mapStateToProps)(MainPage);
