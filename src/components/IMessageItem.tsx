import React, { useState, useEffect } from 'react';
import { connect } from 'dva';
import style from './componentStyle/IMessageItem.less';
import voice from '@/assets/voice.png';
const IMessageItem: React.FC = (props: any) => {
  return (
    <>
      <div style={{ display: 'flex' ,padding:"14px 10px",backgroundColor:'#fff'}}>
        <div className={style.leftImg}>
            <img src={voice}></img>
        </div>
        <div className={style.rightContent} style={{marginLeft:"12px"}}>
          <div >
            <div className={style.title}>系统信息</div>
            <div className={style.date}>8月17日</div>
          </div>
          <div>
            <div>欢迎使用我的南京</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default connect()(IMessageItem);
