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

// 获取用户关于time样式的设置信息
export const getTimeSettingAPI = (userId) => {
  return request({
    url: '/timeSetting?userId='+userId,
    method: 'get'
  })
}
// 更新用户关于time样式的设置信息
export const updateTimeSettingAPI = (
    { 
        userId,
        isShow,
        isShowHourMinutes,
        isShowYear,
        isShowMonthDay,
        isShowWeek,
        timeFontWeight,
        timeTypeTwentyFour,
        timeFontSize,
        timeFontColor,
        timeFontColorIndex,
    }) => {
    return request({
      url: '/timeSetting',
      method: 'put',
      data:{
        userId,
        isShow,
        isShowHourMinutes,
        isShowYear,
        isShowMonthDay,
        isShowWeek,
        timeFontWeight,
        timeTypeTwentyFour,
        timeFontSize,
        timeFontColor,
        timeFontColorIndex,
      }
    })
  }

  // 获取用户关于背景图片的设置信息
  export const getBackgroundSettingAPI = (userId) => {
    return request({
      url: '/backgroundSetting?userId='+userId,
      method: 'get'
    })
  }
  // 更新用户关于背景图片的设置信息
  export const updateBackgroundSettingAPI = (
      { 
        userId,
        shelterBackgroundOpacity,
        shelterBackgroundBlur,
        modifyBackground,
        selectBackground,
        backgroundFullPath,
        closeBackgroundOption
      }) => {
    return request({
      url: '/bgSetting',
      method: 'put',
      data:{
        userId,
        shelterBackgroundOpacity,
        shelterBackgroundBlur,
        modifyBackground,
        selectBackground,
        backgroundFullPath,
        closeBackgroundOption
      }
    })
  }

  // 获取用户关于当前模式的设置信息
  export const getSimplePatternSettingAPI = (userId) => {
    return request({
      url: '/simplePatternSetting?userId='+userId,
      method: 'get'
    })
  }
  // 更新用户关于当前模式的设置信息
  export const updateSimplePatternSettingAPI = (
      { 
        userId,
        homePageNav,
        homePageUrlApp,
        isSimplePattern,
        placeholder
      }) => {
    return request({
      url: '/simplePatternSetting',
      method: 'put',
      data:{
        userId,
        homePageNav,
        homePageUrlApp,
        isSimplePattern,
        placeholder
      }
    })
  }

  // 获取用户关于左侧导航栏的设置信息
  export const getNavSettingAPI = (userId) => {
    return request({
      url: '/navSetting?userId='+userId,
      method: 'get'
    })
  }
  // 更新用户关于左侧导航栏的设置信息
  export const updateNavSettingAPI = (
      { 
        userId,
        backgroundRed,
        backgroundGreen,
        backgroundBlue,
        backgroundOpacity,
        isBorderRadius
      }) => {
      return request({
        url: '/navSetting',
        method: 'put',
        data:{
          userId,
          backgroundRed,
          backgroundGreen,
          backgroundBlue,
          backgroundOpacity,
          isBorderRadius
        }
      })
    }