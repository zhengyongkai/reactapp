import React, { useState, useEffect, useRef } from 'react';
import { Tabs } from 'antd-mobile-v5';
import { connect } from 'dva';
import styles from './css/recommend.less';
import Scroll from '@/components/scroll/scroll';
import ListItem from '@/components/List/listItem';
function mapStateToProps(state: any) {
  const { userInfo } = state.user; // test就是models命名空间名字
  return {
    userInfo,
  };
}

const MainPage: React.FC = (props: any) => {
  const scrollRef = useRef(null);

  const data = [
    {
      title: '银行为什么要求所有应聘的应届生从柜台做起？',
      user: {
        name: '知乎官方',
        img: 'https://picsum.photos/200/300',
        work: '银行从业者',
      },
      content:
        '不是因为必须去基层锻炼，原因有三，第一：必须增加自主能力，懂得如何讨好领导，第二：懂得一些叫有道理，第三：深知职场之道，才能更好的发展',
      agree: 100,
      comment: 5,
    },
    {
      title: '银行为什么要求所有应聘的应届生从柜台做起？',
      user: {
        name: '知乎官方',
        img: 'https://picsum.photos/200/300',
        work: '银行从业者',
      },
      content:
        '不是因为必须去基层锻炼，原因有三，第一：必须增加自主能力，懂得如何讨好领导，第二：懂得一些叫有道理，第三：深知职场之道，才能更好的发展',
      agree: 100,
      comment: 5,
    },
    {
      title: '银行为什么要求所有应聘的应届生从柜台做起？',
      user: {
        name: '知乎官方',
        img: 'https://picsum.photos/200/600',
        work: '银行从业者',
      },
      content:
        '不是因为必须去基层锻炼，原因有三，第一：必须增加自主能力，懂得如何讨好领导，第二：懂得一些叫有道理，第三：深知职场之道，才能更好的发展',
      agree: 100,
      comment: 5,
    },
    {
      title: '银行为什么要求所有应聘的应届生从柜台做起？',
      user: {
        name: '知乎官方',
        img: 'https://picsum.photos/200/100',
        work: '银行从业者',
      },
      content:
        '不是因为必须去基层锻炼，原因有三，第一：必须增加自主能力，懂得如何讨好领导，第二：懂得一些叫有道理，第三：深知职场之道，才能更好的发展',
      agree: 100,
      comment: 5,
    },
  ];
  const [datas, setData] = useState(data);
  const [pullUpLoading, setPullUpLoading] = useState(false);
  const handlePullUp = () => {
    setPullUpLoading(true);
    setTimeout(() => {
      setData([...datas, ...data]);
      setPullUpLoading(false);
    }, 2000);
  };
  const handlePullDown = () => {
    console.log('down');
  };
  const renderData = () => {
    return (
      <>
        {datas.map((res, key) => {
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
        style={{
          position: 'fixed',
          top: 100,
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
    </>
  );
};

export default connect(mapStateToProps)(MainPage);
