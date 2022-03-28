import React, { useState, useEffect, useRef } from 'react';
import { Tabs, Mask, Popup } from 'antd-mobile-v5';
import { connect } from 'dva';
import styles from './css/recommend.less';
import PopupStyles from '@/common/css/popup.less';
import Scroll from '@/components/scroll/scroll';
import ListItem from '@/components/List/listItem';
import { getSelList, getTypeList } from './Service/main';
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
    id: number;
    title: string;
    content: string;
    agree: string;
    comment: string;
    type: String;
    text_type: String;
    frontImgList: Array<{
      img_url: String;
    }>;
    type_name: String;
    user: {
      avatar: string;
      nickname: string;
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
  interface TList {
    id: number;
    name: String;
  }
  const scrollRef = useRef(null);
  const [dataList, setData] = useState([]);
  const [dataType, setDataType] = useState([]);
  const dataRef = useRef([]);
  const [visible, setVisible] = useState(false);
  const [dataStatus, setDataStatus] = useState({
    end: false,
    page: 1,
    limit: 10,
  });
  const [pullUpLoading, setPullUpLoading] = useState(false);
  const handlePullUp = () => {
    if (dataStatus.end) {
      setPullUpLoading(true);
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
  const changeTab = async (res: string) => {
    setData([]);
    getSel({ type_id: res }, () => {});
  };
  useEffect(() => {
    dataRef.current = dataList;
  }, [dataList]);

  const renderData = () => {
    return (
      <>
        {dataList.map((res: IList, key) => {
          return (
            <div style={{ marginBottom: 10 }}>
              <ListItem
                key={res.id}
                titles={res.title}
                userImg={res.user.avatar}
                userName={res.user.nickname}
                work={res.user.work}
                content={res.content}
                agree={res.agree}
                comment={res.comment}
                type={res.type_name}
                textType={res.text_type}
                frontImg={
                  res.frontImgList[0] ? res.frontImgList[0].img_url : ''
                }
              ></ListItem>
            </div>
          );
        })}
      </>
    );
  };

  const getType = async () => {
    await getTypeList({ limit: 99999 }).then((res) => {
      if (checkResponse(res)) {
        setDataType(res.data.list);
      }
    });
  };
  const getSel = (obj: object, func: Function) => {
    getSelList(obj).then((res: IResult) => {
      if (checkResponse(res)) {
        setData([...dataRef.current, ...res.data.list]);
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
    getType();
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
          <Tabs.Tab title={'推荐'} key={''} />
          {dataType.map((item: TList) => (
            <Tabs.Tab title={item.name} key={item.id} />
          ))}
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
        >
          <div>{renderData()}</div>
        </Scroll>
      </div>
      <Popup
        visible={visible}
        onMaskClick={() => {
          setVisible(false);
        }}
        position="bottom"
        bodyStyle={{
          height: '80vh',
          borderTopLeftRadius: '8px',
          borderTopRightRadius: '8px',
        }}
      >
        <div className={PopupStyles.popup}>www</div>
      </Popup>
    </>
  );
};

export default connect(mapStateToProps)(MainPage);
