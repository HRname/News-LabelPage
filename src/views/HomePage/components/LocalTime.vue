<script setup>
import { ref, onMounted } from 'vue'
import { useSettingStore } from '@/stores/settingStore';

const hour = ref(0)
const minutes = ref(0)
const year = ref(0)
const month = ref(0)
const day = ref(0)
const week = ref('')
const weeks = ref(['星期日','星期一','星期二','星期三','星期四','星期五','星期六'])
// 转换24小时制
const timeList = ref([0,1,2,3,4,5,6,7,8,9,10,11,12,1,2,3,4,5,6,7,8,9,10,11])
const once = ref(true)

const settingStore = useSettingStore()

const timeId = setInterval(() => {
    const now = new Date()
    if(settingStore.settingList[2].timeTypeTwentyeFour){
        hour.value = now.getHours()
    }else{
        hour.value = timeList.value[now.getHours()]
    }
    minutes.value = now.getMinutes()
    // 为了节省性能，只执行一次
    if(once.value){
        year.value = now.getFullYear()
        month.value = now.getMonth() + 1
        day.value = now.getDate()
        week.value = weeks.value[now.getDay()]
        once.value = false
    }

    if(parseInt(hour.value) < 10){
        hour.value = "0" + hour.value
    }
    if(parseInt(minutes.value) < 10){
        minutes.value = "0" + minutes.value
    }
},1000)

onMounted(() => timeId)
</script>

<template>
    <div class="LocalTime" v-show="settingStore.settingList[2].isShow" :style="{ color: settingStore.settingList[2].timeFontColor }">
        <time v-show="settingStore.settingList[2].isShowHourMinutes" :class="{ timeFontWeight:settingStore.settingList[2].timeFontWeight}">{{ hour }}:{{ minutes }}</time>
        <div :style="{ fontSize: settingStore.settingList[2].timeFontSize + 'px' }">
            <span v-show="settingStore.settingList[2].isShowYear">{{ year }}年</span>
            <span v-show="settingStore.settingList[2].isShowMonthDay">{{ month }}月{{ day }}日</span>
            <span v-show="settingStore.settingList[2].isShowWeek">{{ week }}</span>
        </div>
    </div>
</template>

<style scoped>
.LocalTime{
    height: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
}
time{
    display: block;
    text-align: center;
    font-size: 74px;
    user-select: none;
    /* 设置时间文本无法被选中 */
}
.LocalTime div{
    width: 185px;
    display: flex;
    justify-content: space-around;
}
.timeFontWeight{
    font-weight: 600;
}
span{
    user-select: none;
}
</style>