import { defineStore } from "pinia";
import { ref,watch } from "vue";

export const useSettingStore = defineStore("setting",() => {
    const optionList = ref([
        {id: 1, name: '个人中心',isSelect: true},
        {id: 2, name: '搜索框',isSelect: false},
        {id: 3, name: '图标',isSelect: false},
        {id: 4, name: '时间',isSelect: false},
        {id: 5, name: '背景',isSelect: false},
        {id: 6, name: '模式选择',isSelect: false},
        {id: 7, name: '左侧导航',isSelect: false},
        {id: 8, name: "重置",isSelect: false}
    ])

    const settingList = ref([
        { id: 1, name: 'searchSetting', searchHeight: 44, searchBottomMargin: 0, searchBorderRadius:30, searchOpacity: 0.9},
        { id: 2, name: 'webAppSetting', webAppHeight: 100, webAppWidth: 100, webAppSize: 55, webAppOpacity: 0.9, webAppBorderRadius: 20, webAppFontSize: 12, webAppSelectDefault: true, webAppSelectRound: false},
        { id: 3, name: 'timeSetting', isShow: true,isShowHourMinutes: true, isShowYear: true, isShowMonthDay: true, isShowWeek: true, timeFontWeight: false, timeTypeTwentyeFour: true, timeFontSize: 14, timeFontColor: 'white' ,timeFontColorIndex: 0},
        { id: 4, name: 'backgroudSetting', shelterBackgroundOpacity: 0, shelterBackgroundBlur: 0, modifyBackground: false, selectBackground: false, backgroundFullPath: '/src/assets/preview.jpg', closeBackgroundOption: false },
        { id: 5, name: 'simplePatternSetting', HomePageNav: true, HomePageUrlApp: true, isSimplePattern: false, placeholder: 0 },
        { id: 6, name: 'navSetting', backgroundRed: 28, backgroundGreen: 24, backgroundBlue: 41, backgroundOpacity: 0.5, isBorderRadius: false }
    ])

    const defaultSettingList = ref([
        { id: 1, name: 'searchSetting', searchHeight: 44, searchBottomMargin: 0, searchBorderRadius:30, searchOpacity: 0.9},
        { id: 2, name: 'webAppSetting', webAppHeight: 100, webAppWidth: 100, webAppSize: 55, webAppOpacity: 0.9, webAppBorderRadius: 20, webAppFontSize: 12, webAppSelectDefault: true, webAppSelectRound: false},
        { id: 3, name: 'timeSetting', isShow: true,isShowHourMinutes: true, isShowYear: true, isShowMonthDay: true, isShowWeek: true, timeFontWeight: false, timeTypeTwentyeFour: true, timeFontSize: 14, timeFontColor: 'white' ,timeFontColorIndex: 0},
        { id: 4, name: 'backgroudSetting', shelterBackgroundOpacity: 0, shelterBackgroundBlur: 0, modifyBackground: false, selectBackground: false, backgroundFullPath: '/src/assets/preview.jpg', closeBackgroundOption: false },
        { id: 5, name: 'simplePatternSetting', HomePageNav: true, HomePageUrlApp: true, isSimplePattern: false, placeholder: 0 },
        { id: 6, name: 'navSetting', backgroundRed: 28, backgroundGreen: 24, backgroundBlue: 41, backgroundOpacity: 0.5, isBorderRadius: false }
    ])

// settingNav组件 span颜色列表
// rgba(red,blue,yellow,opacity)
const colorSpanList = ref([
    { id: 1, name:"black", red: 28, blue: 41, green: 24, isActive: false},
    { id: 2, name:"skyblue", red: 93, blue: 231, green: 226, isActive: false },
    { id: 3, name:"orange", red: 254, blue: 0, green: 153, isActive: false },
    { id: 4, name:"pink", red: 239, blue: 202, green: 195, isActive: false },
    { id: 5, name:"lightOrange", red: 223, blue: 123, green: 197, isActive: false },
    { id: 6, name:"purple", red: 204, blue: 231, green: 108, isActive: false },
    { id: 7, name:"green", red: 125, blue: 88, green: 218, isActive: false },
    { id: 8, name:"red", red: 182, blue: 66, green: 38, isActive: false },
    { id: 9, name:"blue", red: 76, blue: 228, green: 136, isActive: false },
    { id: 10, name:"gray", red: 226, blue: 244, green: 234, isActive: false },
    { id: 11, name:"lightBule", red: 0, blue: 153, green: 102, isActive: false },
    { id: 12, name:"workBule", red: 51, blue: 153, green: 51, isActive: false },
    { id: 13, name:"deepBule", red: 0, blue: 102, green: 0, isActive: false },
    { id: 14, name:"ligthGreen", red: 153, blue: 153, green: 255, isActive: false },
    { id: 15, name:"ligthPink", red: 204, blue: 153, green: 0, isActive: false },
    { id: 16, name:"deepBlack", red: 28, blue: 24, green: 41, isActive: false },
])

    const showSetting = ref(false)
    // 控制显示设置界面
    const changeShowSetting = () => {
        showSetting.value = !showSetting.value;
        // 退出时重置选项数据
        if (showSetting.value === false) {
            changeSelect(0);
        }
    }

    // 控制选项选中样式
    const changeSelect = (index) => {
        for (let i = 0; i < optionList.value.length; i++) {
            optionList.value[i].isSelect = false;
        }
        optionList.value[index].isSelect = true;
    }

    // 图标设置的函数
    const selectDefault = () => {
        settingList.value[1].webAppSelectDefault = true;
        settingList.value[1].webAppSelectRound = false;
        settingList.value[1].webAppBorderRadius = 20;
    }
    const selectRound = () => {
        settingList.value[1].webAppSelectDefault = false;
        settingList.value[1].webAppSelectRound = true;
        settingList.value[1].webAppBorderRadius = 50;
    }
    // 监听设置数据，如果webAppBorderRadius为50，则选中圆形，否则为方形
    watch(settingList,(value)=>{
        if(value[1].webAppBorderRadius == 50){
            value[1].webAppSelectDefault = false;
            value[1].webAppSelectRound = true;
        }else{
            value[1].webAppSelectDefault = true;
            value[1].webAppSelectRound = false;
        }
    },{
        deep: true,
        immediate: true
    })

    // 背景选项卡
    const activeModifyBackground = () => {
        settingList.value[3].modifyBackground = true;
        settingList.value[3].selectBackground = false;
    }
    const activeSelectBackground = () => {
        settingList.value[3].modifyBackground = false;
        settingList.value[3].selectBackground = true;
    }
    // 控制背景选项卡开启关闭
    const switchBackgroundOption = () => {
        settingList.value[3].closeBackgroundOption = !settingList.value[3].closeBackgroundOption;
    }
    // 通过设置打开时选中进入时点击的选项
    const enterModifyBackground = () => {
        activeModifyBackground();
        switchBackgroundOption();
    }
    const enterSelectBackground = () => {
        activeSelectBackground();
        switchBackgroundOption();
    }

    // 进入极简模式
    const enterSimplePattern = () => {
        settingList.value[4].HomePageNav = false;
        settingList.value[4].HomePageUrlApp = false;
        settingList.value[4].placeholder = 50;
        settingList.value[4].isSimplePattern = true;
    }

    // 进入组件模式
    const enterComponent = () => {
        settingList.value[4].HomePageNav = true;
        settingList.value[4].HomePageUrlApp = true;
        settingList.value[4].isSimplePattern = false;
        settingList.value[4].placeholder = 0;
    }

    // 重置选项卡
    const resetSearchSetting = () => {
        settingList.value[0] = defaultSettingList.value[0];
    }
    const resetWebAppSetting = () => {
        settingList.value[1] = defaultSettingList.value[1];
    }
    const resetTimeSetting = () => {
        settingList.value[2] = defaultSettingList.value[2];
    }
    const resetNavSetting = () => {
        settingList.value[5] = defaultSettingList.value[5];
    }
    const resetAllSetting = () => {
        settingList.value = defaultSettingList.value;
    }

    return {
        showSetting,
        changeShowSetting,
        optionList,
        changeSelect,
        settingList,
        selectDefault,
        selectRound,
        activeModifyBackground,
        activeSelectBackground,
        switchBackgroundOption,
        enterModifyBackground,
        enterSelectBackground,
        enterSimplePattern,
        enterComponent,
        colorSpanList,
        resetSearchSetting,
        resetWebAppSetting,
        resetTimeSetting,
        resetNavSetting,
        resetAllSetting
    }
})