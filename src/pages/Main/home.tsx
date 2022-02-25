import React, { useState, useEffect } from 'react';
import { Tabs, Badge } from 'antd-mobile-v5';
import { connect } from 'dva';
import { renderRoutes } from 'react-router-config';
import { NavLink } from 'react-router-dom';
import s from './css/home.less';
import { history } from 'umi';
import { BellOutline, SearchOutline } from 'antd-mobile-icons';
function mapStateToProps(state: any) {
  const { userInfo } = state.user; // test就是models命名空间名字
  return {
    userInfo,
  };
}
const HomePage: React.FC = (props: any) => {
  const { route } = props;
  const [activeKey, setActiveKey] = useState(0);
  const activeChange = (e: number, link: string) => {
    setActiveKey(e);
    history.replace('/main/homePage/' + link);
  };
  return (
    <>
      <div className={s.home}>
        <div className={s.home_top}>
          <div className={s.home_top_icon}>
            <span>
              <Badge style={{ '--top': '10px' }} content="99+">
                <BellOutline></BellOutline>
              </Badge>
            </span>
          </div>
          <div className={`${activeKey == 0 ? s.active : ''} ${s.home_tab}`}>
            <span onClick={activeChange.bind(this, 0, 'video')}>视频</span>
          </div>
          <div className={`${activeKey == 1 ? s.active : ''} ${s.home_tab}`}>
            <span onClick={activeChange.bind(this, 1, 'tuijian')}>推荐</span>
          </div>
          <div className={`${activeKey == 2 ? s.active : ''} ${s.home_tab}`}>
            <span onClick={activeChange.bind(this, 2, 'hot')}>热榜</span>
          </div>
          <div className={s.home_top_icon}>
            <span>
              <SearchOutline></SearchOutline>
            </span>
          </div>
        </div>
        <div>{renderRoutes(route.routes)}</div>
      </div>
    </>
  );
};

export default connect(mapStateToProps)(HomePage);
