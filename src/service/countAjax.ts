import  request  from '@/utils/request'

export async function saveMessage(data: any) {
    return request('/api/home/Login/doLogin_wt', {
      method: 'POST',
      data: data,
      // requestType: 'form'  //加个这个，就可以了
    });
}
  
export async function getLoginUserInfo(data:any) {
    return request('/api/admin/auth/me',{
        method: 'get',
        params: data,
        requestType: 'form' 
    })
}