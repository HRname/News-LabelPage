import { defineStore } from "pinia";
import { ref,onMounted,watch } from "vue";

export const useSettingStore = defineStore("setting",() => {
    const optionList = ref([
        {id: 1, name: '个人中心',isSelect: true},
        {id: 2, name: '搜索框',isSelect: false},
        {id: 3, name: '图标',isSelect: false},
        {id: 4, name: '选项',isSelect: false},
        {id: 5, name: '选项',isSelect: false},
        {id: 6, name: '选项',isSelect: false},
        {id: 7, name: '选项',isSelect: false}
    ])

    const settingList = ref([
        {id: 1, name: 'searchSetting', searchHeight: 44, searchBottomMargin: 30, searchBorderRadius:30, searchOpacity: 0.9},
        {id: 2, name: 'webAppSetting', webAppHeight: 100, webAppWidth: 100, webAppSize: 55, webAppOpacity: 0.9, webAppBorderRadius: 20, webAppFontSize: 12, webAppSelectDefault: true, webAppSelectRound: false},
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

    return {
        showSetting,
        changeShowSetting,
        optionList,
        changeSelect,
        settingList,
        selectDefault,
        selectRound
    }
})