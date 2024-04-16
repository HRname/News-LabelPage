<script setup>
import { useSettingStore } from '@/stores/settingStore';

const settingStore = useSettingStore();
</script>

<template>
    <div class="personal" v-show="settingStore.optionList[0].isSelect">
        <div class="headImg">
            <img src="@/assets/preview.jpg" alt="">
            <span>用户名</span>
        </div>
    </div>
</template>

<style scoped>
.personal {
    height: 100%;
    width: 350px;
}
.headImg{
    width: 330px;
    height: 120px;
    display: flex;
    align-items: center;
    line-height: 80px;
    background-color: rgba(28, 28, 30, 0.8);
    margin: 10px;
    border-radius: 10px;
}
.headImg img{
    width: 80px;
    height: 80px;
    border-radius: 50px;
    border:2px solid white;
    margin-left: 20px;
}
.headImg span{
    height: 80px;
    width: 100px;
    letter-spacing: 0.2em;
    margin-left: 20px;
    font-size: 24px;
    font-weight: 400;
    color: white;
}
</style>