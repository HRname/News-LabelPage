import request from '@/utils/http'

export const getLoginAPI = ( {username,password} ) => {
  return request({
    url: '/login',
    method: 'post',
    data: {
      username,
      password
    }
  })
}