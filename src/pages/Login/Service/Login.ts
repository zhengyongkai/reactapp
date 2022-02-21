import request from '@/utils/request';

export async function login(data: any) {
  return request('/api/api/user/login', {
    method: 'POST',
    data: data,
    // requestType: 'form'  //加个这个，就可以了
  });
}
export async function getUserInfo() {
  return request('/api/api/user/get_userinfo', {
    method: 'get',
    // requestType: 'form'  //加个这个，就可以了
  });
}
