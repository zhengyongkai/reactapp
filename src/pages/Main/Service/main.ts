import request from '@/utils/request';
const api =
  process.env.NODE_ENV === 'development' ? '/api' : 'https://www.fastmock.site';
export async function getSelList(data: any) {
  return request(
    api + '/mock/5e8b10e036c415858b064e08b709434c/zhihu/api/getSelList',
    {
      method: 'get',
      params: data,
      // requestType: 'form'  //加个这个，就可以了
    },
  );
}
