<script setup>
import { useSettingStore } from '@/stores/settingStore';
import { useUserStore } from '@/stores/userStore';

const settingStore = useSettingStore();
const userStore = useUserStore();
</script>

<template>
    <div class="personal" v-show="settingStore.optionList[0].isSelect">
        <div class="headImg">
            <img :src="userStore.user.userHeaderImg" alt="">
            <span>{{ userStore.user.username == null ? '用户名' : userStore.user.username }}</span>
        </div>
        <div class="userOption">
            <span>填写个人账号资料</span>
            <span class="outLogin" @click="userStore.isShowAlert = true">退出登录</span>
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

.userOption{
    width: 330px;
    height: 200px;
    background-color: rgba(28, 28, 30, 0.8);
    margin: 10px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
}
.userOption span{
    height: 50px;
    width: 300px;
    line-height: 50px;
    border-radius: 10px;
    background-color: black;
    user-select: none;
    cursor: pointer;
}
.userOption span:nth-child(1){
    color:rgb(77, 170, 252);
}
.outLogin{
    color: red;
}

</style>