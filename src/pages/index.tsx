import React, { useState } from 'react';
import styles from './index.less';
import { Button, Toast, Input, Form } from 'antd-mobile-v5'
import { connect } from 'dva'
import { saveMessage, getLoginUserInfo } from '@/service/countAjax'
import { history } from 'umi';
import { checkResponse } from '@/utils/common'
function mapStateToProps(state: any) {
  return {}
}
const IndexPage: React.FC = (props: any) => {
  let [value, setValue] = useState({
    username: '',
    password: ''
  });
  function dealDataBeforeLogin() {
    getLoginUserInfo({ appType: 'Manage' }).then((res) => {
      if (!checkResponse(res, true)) {
        return false;
      }
      // console.log("mange",res)
      props.dispatch({
        type: "user/SET_USER",// 这里就会触发models层里面effects中fetchNum方法（也可以直接触发reducer中方法，看具体情况） ,test就是models里的命名空间名字
        payload: {
          ...res.data
        }
      })
      Toast.show({
        content: '登陆成功 ' + res.data.name,
        position: 'top',
      })
      history.replace('/user')
    })
  }
  function submit() {
    saveMessage({  password: value.password, username: value.username }).then((res) => {
      if (!checkResponse(res, true)) {
        return false;
      }
      const { data } = res
      props.dispatch({
        type: "user/SET_LOGGED",// 这里就会触发models层里面effects中fetchNum方法（也可以直接触发reducer中方法，看具体情况） ,test就是models里的命名空间名字
        payload: {
          tokenList: data.access_token,
          expireIn: new Date().getTime() / 1000 + data.expires_in,
          refreshToken: data.refresh_token,
          clientId: data.client_id,
        }
      })
      dealDataBeforeLogin()
    })
  }

  return (
    <div>
      <div>
        <Form onFinish={submit} footer={
          <Button block type='submit' color='primary'>
            提交
            </Button>
        }>
          <Form.Item
            name='姓名'
            label='姓名'
            rules={[{ required: true, message: '姓名不能为空' }]}
          >
            <Input placeholder='账号' value={value.username} onChange={val => {
              setValue({
                ...value,
                username: val
              })
            }} />
          </Form.Item>
          <Form.Item
            name='密码'
            label='密码'
            rules={[{ required: true, message: '密码不能为空' }]}
          >
            <Input type='password' placeholder='密码' value={value.password} onChange={val => {
              setValue({
                ...value,
                password: val
              })
            }} />
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default connect(mapStateToProps)(IndexPage);
