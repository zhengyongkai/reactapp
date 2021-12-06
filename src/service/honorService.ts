import  request  from '@/utils/request'

  
export async function getTeamHonor(data:any) {
    return request('/api/union/teamhonor',{
        method: 'get',
        params: data,
        requestType: 'form' 
    })
}

export async function getSongSheet(data:any) {
    return request('/api/users/getUser',{
        method: 'get',
        params: data,
        requestType: 'form' 
    })
  }
  