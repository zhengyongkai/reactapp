/**
 * request 网络请求工具
 * 更详细的 api 文档: https://github.com/umijs/umi-request
 */
import { extend } from 'umi-request';
import { Toast } from 'antd-mobile';
import { history } from 'umi';

const codeMessage: { [key: number]: string } = {
  109: '密码或者账号错误',
  400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
  4010: '用户没有权限（令牌、用户名、密码错误）。',
  403: '用户得到授权，但是访问是被禁止的。',
  404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
  406: '请求的格式不可得。',
  410: '请求的资源被永久删除，且不会再得到的。',
  422: '当创建一个对象时，发生一个验证错误。',
  500: '服务器发生错误，请检查服务器。',
  502: '网关错误。',
  503: '服务不可用，服务器暂时过载或维护。',
  504: '网关超时。',
};

const controller = new AbortController();
const { signal } = controller;

/**
 * 异常处理程序
 */
const errorHandler = (error: { response: Response }): Response => {
  const { response } = error;
  console.log(response);
  if (response && response.status) {
    if (response.status == 401 || response.status == 403) {
      controller.abort();
      window.sessionStorage.removeItem('token');
      // 多个请求同时发送时，可能页面已经跳转到 auth 页面
      if (history.location.pathname !== '/auth') {
        window.localStorage.setItem(
          'redirect',
          `${history.location.pathname}${history.location.search}`,
        );
      }
      history.push(`/login`);
    }
    const { status, url } = response;
  } else if (!response) {
    Toast.fail('网络异常', 1);
  }
  return response;
};

/**
 * 配置request请求时的默认参数
 */
const request = extend({
  errorHandler, // 默认错误处理
  credentials: 'include', // 默认请求是否带上cookie
  prefix: process.env.path, //Path为config中定义的变量
});

request.interceptors.request.use((url, options) => {
  const token = window.localStorage.getItem('ILUManageCloudtest_tokenList');
  const headers = <{ [key: string]: string }>{ ...options.headers };
  if (!(/login/.test(url) || /qrcode/.test(url))) {
    if (token) {
      headers['authorization'] = `Bearer ${token}`;
    }
  }
  return {
    options: { ...options, headers: headers },
    signal,
  };
});
export default request;
