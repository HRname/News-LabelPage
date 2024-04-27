import request from '@/utils/http'

export const getAllWebAppAPI = (userId) => {
  return request({
    url: '/searchHome?userId=' + userId,
    method: 'get'
  })
}

export const addWebApp = ({userId,zoneName,webName,url,domainNameImg,bgcColor}) => {
  return request({
    url: '/searchHome',
    method: 'post',
    data: {
      userId: userId,
      zoneName: zoneName,
      webName: webName,
      url: url,
      domainNameImg: domainNameImg,
      bgcColor: bgcColor
    }
  })
}