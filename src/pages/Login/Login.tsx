import React, { useState } from 'react';
import { Button, Toast, Input, Form } from 'antd-mobile-v5';
import { connect } from 'dva';
import { login, getUserInfo } from './Service/Login';
import { history } from 'umi';
import { checkResponse } from '@/utils/common';
import bgimg from '@/assets/img/loginBg.jpeg';
import globalcss from '@/common/css/global.less';
function mapStateToProps(state: any) {
  return {};
}
const IndexPage: React.FC = (props: any) => {
  let [value, setValue] = useState({
    username: '',
    password: '',
  });
  function submit() {
    login({ password: value.password, username: value.username }).then(
      async (res) => {
        if (!checkResponse(res)) {
          return false;
        }
        const { token } = res.data;
        props.dispatch({
          type: 'user/SET_LOGGED', // 这里就会触发models层里面effects中fetchNum方法（也可以直接触发reducer中方法，看具体情况） ,test就是models里的命名空间名字
          payload: {
            tokenList: token,
          },
        });
        await getUserInfoInfo(props);
      },
    );
  }
  async function getUserInfoInfo(props: any) {
    getUserInfo().then((res) => {
      console.log(checkResponse(res));
      if (!checkResponse(res)) {
        return false;
      }
      props.dispatch({
        type: 'user/SET_USER', // 这里就会触发models层里面effects中fetchNum方法（也可以直接触发reducer中方法，看具体情况） ,test就是models里的命名空间名字
        payload: {
          ...res.data,
        },
      });
      Toast.show({
        content: '登陆成功 ' + res.data.username,
        position: 'top',
      });
      history.replace('/main/homePage/tuijian');
    });
  }

  return (
    <div
      className={globalcss.position_fixed}
      style={{ backgroundImage: `url(${bgimg})` }}
    >
      <div style={{ marginTop: 120, padding: '0 20px', textAlign: 'center' }}>
        <p style={{ marginBottom: 20, fontSize: 24, color: '#fff' }}>
          欢迎登陆我的论坛
        </p>
        <Form
          onFinish={submit}
          footer={
            <Button
              block
              type="submit"
              color="primary"
              style={{ height: '40px', marginTop: 30 }}
            >
              登陆
            </Button>
          }
        >
          <Form.Item rules={[{ required: true, message: '姓名不能为空' }]}>
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
          <Form.Item rules={[{ required: true, message: '密码不能为空' }]}>
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
