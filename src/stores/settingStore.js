import { defineStore } from "pinia";
import { ref } from "vue";

export const useSettingStore = defineStore("setting",() => {
    const showSetting = ref(false)

    const changeShowSetting = () => {
        showSetting.value = !showSetting.value;
    }

    return {
        showSetting,
        changeShowSetting
    }
})