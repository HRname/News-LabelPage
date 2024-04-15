import { defineStore } from "pinia";
import { ref,onMounted,watch } from "vue";

export const useSettingStore = defineStore("setting",() => {
    const optionList = ref([
        {id: 1, name: '个人中心',isSelect: true},
        {id: 2, name: '选项',isSelect: false},
        {id: 3, name: '选项',isSelect: false},
        {id: 4, name: '选项',isSelect: false},
        {id: 5, name: '选项',isSelect: false},
        {id: 6, name: '选项',isSelect: false},
        {id: 7, name: '选项',isSelect: false}
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

    return {
        showSetting,
        changeShowSetting,
        optionList,
        changeSelect
    }
})