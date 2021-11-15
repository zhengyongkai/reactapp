import  request  from '@/utils/request'

  
export async function getTeamHonor(data:any) {
    return request('/api/union/teamhonor',{
        method: 'get',
        params: data,
        requestType: 'form' 
    })
}