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

export const postUserAPI = ( {id,username,password,sex,userHeaderImg,signature,address} ) => {
  return request({
    url: '/user',
    method: 'post',
    data: {
      id,
      username,
      password,
      sex,
      userHeaderImg,
      signature,
      address
    }
  })
}

export const deleteUserAPI = (id) => {
  return request({
    url: '/user',
    method: 'delete',
    data: {
      id
    }
  })
}