<script setup>
import { ref, onMounted } from 'vue'

const hour = ref(0)
const minutes = ref(0)

const timeId = setInterval(() => {
    const now = new Date()
    hour.value = now.getHours()
    minutes.value = now.getMinutes()
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
    <div class="LocalTime">
        <time>{{ hour }}:{{ minutes }}</time>
    </div>
</template>

<style scoped>
.LocalTime{
    height: 100px;
}
time{
    display: block;
    color: white;
    text-align: center;
    font-size: 74px;
    font-family: "黑体";
    user-select: none;
    /* 设置时间文本无法被选中 */
}
</style>