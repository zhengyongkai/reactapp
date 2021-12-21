import React, { useState } from 'react';
import styles from './index.less';
import { Button, Toast, Input, Form } from 'antd-mobile-v5';
import { connect } from 'dva';
import { saveMessage, getLoginUserInfo } from '@/service/countAjax';
import { history } from 'umi';
import { checkResponse } from '@/utils/common';
function mapStateToProps(state: any) {
  return {};
}
const IndexPage: React.FC = (props: any) => {
  let [value, setValue] = useState({
    username: '',
    password: '',
  });
  function submit() {
    saveMessage({ password: value.password, username: value.username }).then(
      (res) => {
        if (!checkResponse(res, true)) {
          return false;
        }
        const { userInfo , token} = res.data;
        props.dispatch({
          type: 'user/SET_LOGGED', // 这里就会触发models层里面effects中fetchNum方法（也可以直接触发reducer中方法，看具体情况） ,test就是models里的命名空间名字
          payload: {
            tokenList: token,
          },
        });
        props.dispatch({
          type: 'user/SET_USER', // 这里就会触发models层里面effects中fetchNum方法（也可以直接触发reducer中方法，看具体情况） ,test就是models里的命名空间名字
          payload: {
            ...userInfo,
          },
        });
        Toast.show({
          content: '登陆成功 ' + userInfo.account,
          position: 'top',
        });
        history.replace('/user');
      },
    );
  }
  return (
    <div>
      
      <div style={{marginTop:120,padding:"0 20px",textAlign:'center'}}>
      <p style={{marginBottom:20,fontSize:24}}>欢迎登陆我的南京</p>
        <Form
          onFinish={submit}
          footer={
            <Button  block type="submit" color="primary" style={{height:40,marginTop:30}}>
              登陆
            </Button>
          }
        >
          <Form.Item
            rules={[{ required: true, message: '姓名不能为空' }]}
          >
            <Input
              placeholder="账号"
              value={value.username}
              onChange={(val) => {
                setValue({
                  ...value,
                  username: val,
                });
              }}
            />
          </Form.Item>
          <Form.Item
            rules={[{ required: true, message: '密码不能为空' }]}
          >
            <Input
              type="password"
              placeholder="密码"
              value={value.password}
              onChange={(val) => {
                setValue({
                  ...value,
                  password: val,
                });
              }}
            />
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default connect(mapStateToProps)(IndexPage);
