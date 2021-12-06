import  request  from '@/utils/request'

export async function saveMessage(data: any) {
    return request('/api/users/login', {
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

export async function getSongSheet(data:any) {
  return request('/api/users/getUser"',{
      method: 'get',
      params: data,
      requestType: 'form' 
  })
}
