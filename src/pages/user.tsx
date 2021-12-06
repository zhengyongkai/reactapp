import React, { useState, useEffect } from 'react';
import { NavBar, TabBar, Swiper, Grid, Divider, InfiniteScroll, List, Mask } from 'antd-mobile-v5'
import { connect } from 'dva'
import u5 from '@/assets/u5.svg';
import u6 from '@/assets/u6.svg';
import u7 from '@/assets/u7.svg';
import u8 from '@/assets/u8.svg';
import u9 from '@/assets/u9.svg';
import u10 from '@/assets/pic_u81-0.svg';
import styles from './less/user.less'
import commonStyle from './less/common.less'
import { getTeamHonor , getSongSheet } from '@/service/honorService'
import { checkResponse } from '@/utils/common'
import { CloseCircleOutline } from 'antd-mobile-icons'
import {
    AppOutline,
    MessageOutline,
    MessageFill,
    UnorderedListOutline,
    UserOutline,
} from 'antd-mobile-icons'
import { history } from '@/.umi/core/history';
function mapStateToProps(state: any) {
    return {}
}
const IndexPage: React.FC = (props: any) => {
    const gridArr = [
        {
            name: "工会简介",
            image: "u72.svg",
            icon: "jianjie.svg",
            children: [
                { name: "工会组织", image: "u46.svg", icon: "zuzhijiagou_n.svg" },
                { name: "工会阵地", image: "u26.svg", icon: "zuobiao.svg" },
                { name: "工会服务", image: "u34.svg", icon: "fuwu.svg" }
            ]
        },
        {
            name: "工会发布",
            image: "u26.svg",
            icon: "fabu.svg",
            children: [
                { name: "活动通知", image: "u46.svg", icon: "huodong-copy.svg" },
                {
                    name: "职工风采",
                    image: "u72.svg",
                    icon: "fengcaizhanshibeifen.svg"
                },
                { name: "工会喜报", image: "u26.svg", icon: "honour.svg" }
            ]
        },
        {
            name: "服务大厅",
            image: "u34.svg",
            icon: "fuwudating.svg",
            children: [
                { name: "关爱帮扶", image: "u34.svg", icon: "linlibangfu.svg" },
                { name: "惠民福利", image: "u26.svg", icon: "fuli-xuanzhong.svg" },
                { name: "意见反馈", image: "u46.svg", icon: "yijianguanxi.svg" },
                { name: "我的申报", image: "u55.svg", icon: "wodeshenbao.svg" }
            ]
        },
        {
            name: "网上工会",
            image: "u46.svg",
            icon: "huojian.svg",
            children: [
                {
                    name: "入会申请",
                    image: "u46.svg",
                    icon: "shenqing.svg",
                    src: "/onlineLU/apply/MeApplication/applied"
                },
                {
                    name: "电子送签",
                    image: "u34.svg",
                    icon: "tijiao (1).svg",
                    src: "/election/indexList"
                },
                {
                    name: "意见调查",
                    image: "u55.svg",
                    icon: "yingxiaohuodong_toupiaotiaocha.svg"
                },
                { name: "意见征询", image: "u72.svg", icon: "yijianfankui.svg" },
                { name: "民主投票", image: "u26.svg", icon: "lunbotu-.svg" }
            ]
        },
        {
            name: "云上课堂",
            image: "u55.svg",
            icon: "kecheng.svg",
            children: [
                { name: "职工书屋", image: "u46.svg", icon: "shu.svg" },
                { name: "学习园区", image: "u34.svg", icon: "xuexi.svg", src: "/personEducation/index" }
            ]
        },
        {
            name: "生活频道",
            image: "u64.svg",
            icon: "pengyouquan.svg",
            children: [
                { name: "交通", image: "u46.svg", icon: "jiaotong.svg" },
                { name: "健康", image: "u34.svg", icon: "jiankang.svg" },
                { name: "人文", image: "u55.svg", icon: "fengjing.svg" },
                { name: "教育", image: "u26.svg", icon: "diqiuyi.svg" },
                { name: "信息", image: "u46.svg", icon: "keji.svg" }
            ]
        }
    ]
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
    ]
    const [pagination, setState] = useState({
        pagination: {
            page: 1,
            pages: 1,
            limit: 10,
            hasMore: false
        },
    });
    const [listData, setList] = useState([])
    const [mask, setVisable] = useState(false)
    const [showGridData, setGridData] = useState([])
    useEffect(() => {
        getData()
        return function cleanup() {
            setList([])
            console.log('销毁')
        }
    }, [])
    async function loadMore() {
        setState({
            ...pagination, pagination: {
                ...pagination.pagination,
                page: pagination.pagination.page += 1
            }
        })
        // await getData()
    }
    function getData() {
        return getSongSheet({}).then(()=>{

        })
        
    }
    const colors = [u5, u6, u7, u8, u9]
    const items = colors.map((color, index) => (
        <Swiper.Item key={index}>
            <div
                className={styles.content}
                onClick={() => {
                }}
            >
                <img src={color} style={{ width: '100%' }}></img>
            </div>
        </Swiper.Item>
    ))
    function changGridData(data: any) {
        setVisable(true)
        console.log(data)
        setGridData(data.children)
    }
    const gridItem = gridArr.map((res, index) => (
        <Grid.Item key={index} className={styles['user-grid']} >
            <div style={{
                backgroundPosition: '50% 50%', margin: '0 auto',
                backgroundImage: "url(" + require('../assets/' + res.image) + ")",
                backgroundRepeat: 'no-repeat', textAlign: 'center',
                height: 60, width: 60

            }} onClick={changGridData.bind(this, res)}>
                <div ><img style={{ height: 24, width: 24, marginTop: 16 }} src={require('../assets/' + res.icon)} ></img></div>

            </div>
            <div >{res.name}</div>
        </Grid.Item>
    ))
    function routerChange(data:any){
            history.push('/'+data)
    }
    return (
        <div>
            <NavBar style={{ position: 'fixed', top: 0, left: 0, right: 0 }}>昆山工会</NavBar>
            <div style={{ position: 'absolute', top: 46, bottom: 50, left: 0, right: 0, padding: "0 10px", overflow: 'hidden', overflowY: 'auto' }}>
                <Swiper >{items}</Swiper>
                <Grid columns={3} style={{backgroundColor:'#fff'}}>
                    {gridItem}
                </Grid>
                {/* 职工教育 */}
                {/* <div className={styles['user-title']}>
                    <div>工会活动</div>
                    <div><a href='#'>查看全部</a></div>
                </div> */}
                {/* <div>
                    <List>{listData}</List>
                </div>
                <InfiniteScroll loadMore={loadMore} hasMore={pagination.pagination.hasMore} /> */}
            </div>

            <TabBar style={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} onChange={routerChange.bind(this)}>
                {tabs.map(item => (
                    <TabBar.Item  key={item.key} icon={item.icon} title={item.title} />
                ))}
            </TabBar>
            <Mask visible={mask} onMaskClick={() => (setVisable(false))} className={styles['maskStyle']} >
                <div style={{ textAlign: 'center', height: '100%' }}>
                    <div style={{ position: 'relative', fontSize: '18px', height: 400, marginTop: 120 }}>
                        <div style={{ fontWeight: 550 }}>最新质询</div>
                        <Grid columns={3} style={{marginTop:60}}>
                                {
                                    showGridData.map((res: any,index:number) => (
                                        <Grid.Item key={index}  style={{marginTop:20}}>
                                            <div style={{
                                                backgroundPosition: '50% 50%', margin: '0 auto',
                                                backgroundImage: "url(" + require('../assets/' + res.image) + ")",
                                                backgroundRepeat: 'no-repeat', textAlign: 'center',
                                                height: 60, width: 60

                                            }} >
                                                <div ><img style={{ height: 24, width: 24, marginTop: 16 }} src={require('../assets/' + res.icon)} ></img></div>
                                            </div>
                                            <div >{res.name}</div>
                                        </Grid.Item>
                                    ))
                                }
                        </Grid>
                        <div style={{marginTop:160}}>
                                <CloseCircleOutline fontSize={24} onClick={setVisable.bind(this,false)}></CloseCircleOutline>
                        </div>
                    </div>
                </div>
            </Mask>
        </div>
    );
}

export default connect(mapStateToProps)(IndexPage);
