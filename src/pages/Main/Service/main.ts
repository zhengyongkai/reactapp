import request from '@/utils/request';
// const api =
// process.env.NODE_ENV === 'development' ? '/api' : 'https://www.fastmock.site';
export async function getSelList(data: any) {
  return request('/api/news/list', {
    method: 'get',
    params: data,
    requestType: 'form', //加个这个，就可以了
  });
}
export async function getTypeList(data: any) {
  return request('/api/type/list', {
    method: 'get',
    params: data,
    requestType: 'form', //加个这个，就可以了
  });
}
