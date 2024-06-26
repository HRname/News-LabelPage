import { defineStore } from "pinia";
import { computed,ref,watch } from "vue";
import { getSearchSettingAPI, updateSearchSettingAPI } from "@/apis/setting";
import { getWebAppSettingAPI, updateWebAppSettingAPI } from "@/apis/setting";
import { getTimeSettingAPI,updateTimeSettingAPI } from "@/apis/setting";
import { getBackgroundSettingAPI,updateBackgroundSettingAPI } from "@/apis/setting";
import { getSimplePatternSettingAPI,updateSimplePatternSettingAPI } from "@/apis/setting";
import { getNavSettingAPI,updateNavSettingAPI } from "@/apis/setting";
import { useSearchStore } from "./searchStore";
import { useUserStore } from "./userStore";

export const useSettingStore = defineStore("setting",() => {
    const searchStore = useSearchStore();
    const userStore = useUserStore();
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

    const searchSetting = ref({
        searchHeight: 44,
        searchBottomMargin: 0,
        searchBorderRadius:30,
        searchOpacity: 0.9
    })
    const webAppSetting = ref({
        webAppHeight: 100,
        webAppWidth: 100,
        webAppSize: 55,
        webAppOpacity: 0.9,
        webAppBorderRadius: 20,
        webAppFontSize: 12,
        webAppSelectDefault: true,
        webAppSelectRound: false
    })
    const bgcSize= computed(() => {
        const result = Number(webAppSetting.value.webAppSize) + 2;
        return result;
    })
    const timeSetting = ref({
        isShow: true,
        isShowHourMinutes: true,
        isShowYear: true,
        isShowMonthDay: true,
        isShowWeek: true,
        timeFontWeight: false,
        timeTypeTwentyFour: true,
        timeFontSize: 14,
        timeFontColor: 'white' ,
        timeFontColorIndex: 0
    })
    // 控制背景设置弹窗的显示与隐藏
    const modifyBackground = ref(false)
    const selectBackground = ref(false)
    const closeBackgroundOption = ref(false)

    const backgroundSetting = ref({
        shelterBackgroundOpacity: 0,
        shelterBackgroundBlur: 0,
        backgroundFullPath: '/src/assets/preview.jpg',
    })
    const simplePatternSetting = ref({
        homePageNav: true,
        homePageUrlApp: true,
        isSimplePattern: false,
        placeholder: 0
    })
    const navSetting = ref({
        backgroundRed: 28,
        backgroundGreen: 24,
        backgroundBlue: 41,
        backgroundOpacity: 0.5,
        isBorderRadius: false
    })

    // 登录获取用户设置信息
    const getAllSetting = async (userId) => {
        const searchRes = await getSearchSettingAPI(userId);
        searchSetting.value = searchRes.data;
        const webAppRes = await getWebAppSettingAPI(userId);
        webAppSetting.value = webAppRes.data;
        const timeRes = await getTimeSettingAPI(userId);
        timeSetting.value = timeRes.data;
        const backgroundRes = await getBackgroundSettingAPI(userId);
        backgroundSetting.value = backgroundRes.data;
        const simplePatternRes = await getSimplePatternSettingAPI(userId);
        simplePatternSetting.value = simplePatternRes.data;
        const navRes = await getNavSettingAPI(userId);
        navBgcColorIsChange.value = true;
        navSetting.value = navRes.data;
    }
    // 更新用户搜索框设置信息
    const updateSearchSetting = async (searchSetting) => {
        const res = await updateSearchSettingAPI(searchSetting);
        searchSettingIsChange.value = false;
    }
    // 更新用户图标设置信息
    const updateWebAppSetting = async (webAppSetting) => {
        const res = await updateWebAppSettingAPI(webAppSetting);
        webAppSettingIsChange.value = false;
    }
    // 更新用户时间设置信息
    const updateTimeSetting = async (timeSetting) => {
        const res = await updateTimeSettingAPI(timeSetting);
        timeSettingIsChange.value = false;
    }
    // 更新用户背景设置信息
    const updateBackgroundSetting = async (backgroundSetting) => {
        const res = await updateBackgroundSettingAPI(backgroundSetting);
        backgroundSettingIsChange.value = false;
    }
    // 更新用户模式设置信息
    const updateSimplePatternSetting = async (simplePatternSetting) => {
        if(userStore.username == "")return
        const res = await updateSimplePatternSettingAPI(simplePatternSetting);
        simplePatternSettingIsChange.value = false;
    }
    // 更新用户导航栏设置信息
    const updateNavSetting = async (navSetting) => {
        const res = await updateNavSettingAPI(navSetting);
        navSettingIsChange.value = false;
    }
    // 用于重置功能的默认列表
    const defaultSettingList = ref([
        { id: 1, settingName: 'searchSetting', searchHeight: 44, searchBottomMargin: 0, searchBorderRadius:30, searchOpacity: 0.9},
        { id: 2, settingName: 'webAppSetting', webAppHeight: 100, webAppWidth: 100, webAppSize: 55, webAppOpacity: 0.9, webAppBorderRadius: 20, webAppFontSize: 12, webAppSelectDefault: true, webAppSelectRound: false},
        { id: 3, settingName: 'timeSetting', isShow: true,isShowHourMinutes: true, isShowYear: true, isShowMonthDay: true, isShowWeek: true, timeFontWeight: false, timeTypeTwentyFour: true, timeFontSize: 14, timeFontColor: 'white' ,timeFontColorIndex: 0},
        { id: 4, settingName: 'backgroudSetting', shelterBackgroundOpacity: 0, shelterBackgroundBlur: 0, modifyBackground: false, selectBackground: false, backgroundFullPath: '/src/assets/preview.jpg', closeBackgroundOption: false },
        { id: 5, settingName: 'simplePatternSetting', homePageNav: true, homePageUrlApp: true, isSimplePattern: false, placeholder: 0 },
        { id: 6, settingName: 'navSetting', backgroundRed: 28, backgroundGreen: 24, backgroundBlue: 41, backgroundOpacity: 0.5, isBorderRadius: false }
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
    // 用于监听navSetting的背景颜色是否改变
    // 如果改变则就将新颜色值所对应的span列表中的颜色值的isActive设置为ture
    // navBgcColorIsChange用于判断当前是否是颜色值发生改变
    const navBgcColorIsChange = ref(false)
    watch(navSetting,(value)=>{

        if(navBgcColorIsChange.value){
            for(let i=0;i<colorSpanList.value.length;i++){
                colorSpanList.value[i].isActive = false;
                if(colorSpanList.value[i].blue === value.backgroundBlue && colorSpanList.value[i].green === value.backgroundGreen && colorSpanList.value[i].red === value.backgroundRed){
                    colorSpanList.value[i].isActive = true;
                }
            }
            navBgcColorIsChange.value = false;
        }
    },{deep:true})

    // 用于控制显示设置界面
    const showSetting = ref(false)
    // 用于监听用户是否做了修改，如果修改了则在关闭设置时发送更新请求
    const searchSettingIsChange = ref(false)
    const webAppSettingIsChange = ref(false)
    const timeSettingIsChange = ref(false)
    const backgroundSettingIsChange = ref(false)
    const simplePatternSettingIsChange = ref(false)
    const navSettingIsChange = ref(false)

    watch(searchSetting,()=>{
        // 判断是否是在设置选项卡发生改变
        if(showSetting.value){
            searchSettingIsChange.value = true;
        }
    },{deep:true})
    watch(webAppSetting,()=>{
        if(showSetting.value){
            webAppSettingIsChange.value = true;
        }
    },{deep:true})
    watch(timeSetting,()=>{
        if(showSetting.value){
            timeSettingIsChange.value = true;
        }
    },{deep:true})
    watch(backgroundSetting,()=>{
        if(showSetting.value){
            backgroundSettingIsChange.value = true;
        }
    },{deep:true})
    watch(simplePatternSetting,()=>{
        if(showSetting.value){
            simplePatternSettingIsChange.value = true;
        }
    },{deep:true})
    watch(navSetting,()=>{
        if(showSetting.value){
            navSettingIsChange.value = true;
        }
    },{deep:true})

    // 控制显示设置界面
    const changeShowSetting = () => {
        showSetting.value = !showSetting.value;
        // 退出时重置选项数据
        if (showSetting.value === false) {
            changeSelect(0);
            // 退出设置时，如果用户修改了数据，则发送请求更新数据
            if(searchSettingIsChange.value){
                updateSearchSetting(searchSetting.value);
            }
            if(webAppSettingIsChange.value){
                updateWebAppSetting(webAppSetting.value);
            }
            if(timeSettingIsChange.value){
                updateTimeSetting(timeSetting.value);
            }
            if(backgroundSettingIsChange.value){
                updateBackgroundSetting(backgroundSetting.value);
            }
            if(simplePatternSettingIsChange.value){
                updateSimplePatternSetting(simplePatternSetting.value);
            }
            if(navSettingIsChange.value){
                updateNavSetting(navSetting.value);
            }
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
        webAppSetting.value.webAppSelectDefault = true;
        webAppSetting.value.webAppSelectRound = false;
        webAppSetting.value.webAppBorderRadius = 20;
    }
    const selectRound = () => {
        webAppSetting.value.webAppSelectDefault = false;
        webAppSetting.value.webAppSelectRound = true;
        webAppSetting.value.webAppBorderRadius = 50;
    }
    // 监听设置数据，如果webAppBorderRadius为50，则选中圆形，否则为方形
    watch(webAppSetting,(value)=>{
        if(value.webAppBorderRadius == 50){
            webAppSetting.value.webAppSelectDefault = false;
            webAppSetting.value.webAppSelectRound = true;
        }else{
            webAppSetting.value.webAppSelectDefault = true;
            webAppSetting.value.webAppSelectRound = false;
        }
    },{
        deep: true,
        immediate: true
    })

    // 背景选项卡
    const activeModifyBackground = () => {
        modifyBackground.value = true;
        selectBackground.value = false;
    }
    const activeSelectBackground = () => {
        modifyBackground.value = false;
        selectBackground.value = true;
    }
    // 控制背景选项卡开启关闭
    const switchBackgroundOption = () => {
        closeBackgroundOption.value = !closeBackgroundOption.value;
    }
    // 通过设置打开背景设置时选中进入时点击的选项
    // 进入自定义背景
    const enterModifyBackground = () => {
        activeModifyBackground();
        switchBackgroundOption();
    }
    // 进入选择背景
    const enterSelectBackground = () => {
        activeSelectBackground();
        switchBackgroundOption();
    }

    // 进入极简模式
    const enterSimplePattern = () => {
        simplePatternSetting.value.homePageNav = false;
        simplePatternSetting.value.homePageUrlApp = false;
        simplePatternSetting.value.placeholder = 50;
        simplePatternSetting.value.isSimplePattern = true;
        updateSimplePatternSetting(simplePatternSetting.value);
    }

    // 进入组件模式
    const enterComponent = () => {
        simplePatternSetting.value.homePageNav = true;
        simplePatternSetting.value.homePageUrlApp = true;
        simplePatternSetting.value.isSimplePattern = false;
        simplePatternSetting.value.placeholder = 0;
        updateSimplePatternSetting(simplePatternSetting.value);
    }

    // 重置设置选项卡
    const resetSearchSetting = () => {
        searchSetting.value = defaultSettingList.value[0];
    }
    const resetWebAppSetting = () => {
        searchSetting.value = defaultSettingList.value[1];
    }
    const resetTimeSetting = () => {
        timeSetting.value = defaultSettingList.value[2];
    }
    const resetNavSetting = () => {
        navSetting.value = defaultSettingList.value[5];
    }
    const resetAllSetting = () => {
        resetSearchSetting();
        resetWebAppSetting();
        resetTimeSetting();
        resetNavSetting();
    }

    // 提示框相关设置
    // 提示框背景颜色
    const tipsBgcColor = ref('')
    // 提示框高度用于控制提示框的移动
    const tipsTop = ref(-50)
    // 提示框提示信息
    const tips = ref("")
    // 提示框显示动画
    const showTips = (msg,color) => {
        tipsBgcColor.value = color.value;
        tips.value = msg.value;
        const interval1 = setInterval(() => {
            tipsTop.value += 15
            if (tipsTop.value >= 50) {
                const interval3 = setTimeout(()=> {
                    const interval2 = setInterval(() => {
                        tipsTop.value -= 15;
                        if (tipsTop.value <= -50) {
                            clearInterval(interval2);
                            tips.value = "";
                        }
                    },100)
                    clearInterval(interval3)
                },2000)
                clearInterval(interval1);
            }
        },100)
    }

    watch(simplePatternSetting, (val) => {
        if (val.isSimplePattern==true) {
            searchStore.searchListTop = 430;
        } else {
            searchStore.searchListTop = 380;
        }
    },{deep:true})

    return {
        showSetting,
        changeShowSetting,
        optionList,
        changeSelect,
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
        resetAllSetting,
        searchSetting,
        getAllSetting,
        updateSearchSetting,
        webAppSetting,
        bgcSize,
        updateWebAppSetting,
        timeSetting,
        updateTimeSetting,
        backgroundSetting,
        updateBackgroundSetting,
        simplePatternSetting,
        updateSimplePatternSetting,
        navSetting,
        updateNavSetting,
        modifyBackground,
        selectBackground,
        closeBackgroundOption,
        navBgcColorIsChange,
        tipsBgcColor,
        tipsTop,
        showTips,
        tips,
    }
})