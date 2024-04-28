import request from '@/utils/http.js'
// 搜索框设置API
// 获取用户搜索框设置信息
export const getSearchSettingAPI = (userId) => {
  return request({
    url: '/searchSetting?userId='+userId,
    method: 'get'
  })
}
// 更新用户搜索框设置信息
export const updateSearchSettingAPI = ({ userId,searchHeight,searchBottomMargin,searchBorderRadius,searchOpacity }) => {
    return request({
      url: '/searchSetting',
      method: 'put',
      data:{
        userId,
        searchHeight,
        searchBottomMargin,
        searchBorderRadius,
        searchOpacity
      }
    })
}

// 获取用户关于WebApp的设置信息
export const getWebAppSettingAPI = (userId) => {
  return request({
    url: '/webAppSetting?userId='+userId,
    method: 'get'
  })
}
// 更新用户关于WebApp的设置信息
export const updateWebAppSettingAPI = (
    { 
        userId,
        webAppHeight,
        webAppWidth,
        webAppSize,
        webAppOpacity,
        webAppBorderRadius,
        webAppFontSize,
        webAppSelectDefault,
        webAppSelectRound
    }) => {
    return request({
      url: '/webAppSetting',
      method: 'put',
      data:{
        userId,
        webAppHeight,
        webAppWidth,
        webAppSize,
        webAppOpacity,
        webAppBorderRadius,
        webAppFontSize,
        webAppSelectDefault,
        webAppSelectRound
      }
    })
}