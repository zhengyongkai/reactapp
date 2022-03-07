import React, { useState, useEffect, useRef } from 'react';
import { Tabs, Mask, Popup } from 'antd-mobile-v5';
import { connect } from 'dva';
import styles from './css/recommend.less';
import Scroll from '@/components/scroll/scroll';
import ListItem from '@/components/List/listItem';
import { getSelList } from './Service/main';
import { AppstoreOutline, CloseCircleOutline } from 'antd-mobile-icons';
import { checkResponse } from '@/utils/common';
function mapStateToProps(state: any) {
  const { userInfo } = state.user; // test就是models命名空间名字
  return {
    userInfo,
  };
}

const MainPage: React.FC = (props: any) => {
  interface IList {
    title: string;
    content: string;
    agree: string;
    comment: string;
    user: {
      img: string;
      name: string;
      work: string;
    };
  }
  interface IResult {
    data: {
      limit: number;
      page: number;
      total: number;
      pages: number;
      list: Array<never>;
    };
  }
  const scrollRef = useRef(null);
  const [datas, setData] = useState([]);
  const [visible, setVisible] = useState(false);
  const [dataStatus, setDataStatus] = useState({
    end: false,
    page: 1,
    limit: 10,
  });
  const [pullUpLoading, setPullUpLoading] = useState(false);
  const handlePullUp = () => {
    setPullUpLoading(true);
    if (dataStatus.end) {
      getSel(
        {
          ...dataStatus,
          page: Number(dataStatus.page) + 1,
        },
        () => {
          setPullUpLoading(false);
        },
      );
    } else {
      console.log('已经没有数据');
    }
  };
  const handlePullDown = () => {
    // props.dispatch({
    //   type: 'mask/SET_HOME_VISABLE', // 这里就会触发models层里面effects中fetchNum方法（也可以直接触发reducer中方法，看具体情况） ,test就是models里的命名空间名字
    //   payload: {
    //     value:true,
    //   },
    // });
  };
  const changeTab = (res: string) => {
    // setData([])
    // getSel({})
  };
  const renderData = () => {
    return (
      <>
        {datas.map((res: IList, key) => {
          return (
            <div style={{ marginBottom: 10 }}>
              <ListItem
                key={key}
                titles={res.title}
                userImg={res.user.img + key}
                userName={res.user.name}
                work={res.user.work}
                content={res.content}
                agree={res.agree}
                comment={res.comment}
              ></ListItem>
            </div>
          );
        })}
      </>
    );
  };
  const getSel = (obj: object, func: Function) => {
    getSelList(obj).then((res: IResult) => {
      if (checkResponse(res)) {
        setData([...datas, ...res.data.list]);
        setDataStatus({
          end: res.data.page > res.data.pages ? false : true,
          limit: res.data.limit,
          page: res.data.page,
        });
        func && func();
      }
    });
  };
  useEffect(() => {
    getSel(dataStatus, () => {});
  }, []);
  return (
    <>
      <div
        style={{ marginBottom: 10, position: 'relative' }}
        className={styles.bg}
      >
        <Tabs
          style={{
            '--title-font-size': '14px',
            marginRight: '40px',
          }}
          onChange={(res) => {
            changeTab(res);
          }}
        >
          <Tabs.Tab title="全站" key="fruits" />
          <Tabs.Tab title="高赞" key="vegetables" />
          <Tabs.Tab title="体育" key="sport" />
          <Tabs.Tab title="生活" key="live" />
          <Tabs.Tab title="前端" key="fontend" />
          <Tabs.Tab title="后端" key="backend" />
          <Tabs.Tab title="知识" key="know" />
        </Tabs>
        {/* 添加一个设置标签 */}
        <div
          style={{
            position: 'absolute',
            boxSizing: 'border-box',
            top: '0',
            right: '0',
            padding: '0 12px',
            bottom: 0,
            lineHeight: '40px',
          }}
        >
          <AppstoreOutline
            onClick={() => {
              setVisible(true);
            }}
          ></AppstoreOutline>
        </div>
      </div>
      <div
        style={{
          position: 'fixed',
          top: 90,
          bottom: 60,
          left: 0,
          right: 0,
          overflow: 'hidden',
        }}
      >
        <Scroll
          ref={scrollRef}
          pullUpLoading={pullUpLoading}
          pullUp={handlePullUp}
          pullDown={handlePullDown}
        >
          <div>{renderData()}</div>
        </Scroll>
      </div>
      <Popup
        visible={visible}
        onMaskClick={() => {
          setVisible(false);
        }}
        bodyStyle={{
          height: '90vh',
          borderTopLeftRadius: '8px',
          borderTopRightRadius: '8px',
          padding: '16px',
        }}
      >
        <div className={styles.mask}>
          <div className={styles.title}>
            <div>全部板块</div>
            <div>
              <CloseCircleOutline
                onClick={() => {
                  setVisible(false);
                }}
              ></CloseCircleOutline>
            </div>
          </div>
        </div>
      </Popup>
    </>
  );
};

export default connect(mapStateToProps)(MainPage);
