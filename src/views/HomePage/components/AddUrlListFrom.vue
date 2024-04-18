<script setup>
import { useAppUrlStore } from '@/stores/appurlStore';
import { ref } from 'vue';

const appUrlStore = useAppUrlStore();
</script>

<template>
    <div class="shelterFrom">
        <form action="" target="iframe">
            <div class="close">
                <span @click="appUrlStore.hideAllForm">×</span>
            </div>
            <br><br>
            <div>
                <span>网站名称：</span>
                <input type="text" v-model="appUrlStore.name" placeholder="请输入网站名称">
            </div>
            <br>
            <div>
                <span>网站网址：</span>
                <input type="text" v-model="appUrlStore.url" placeholder="https://www">
            </div>
            <br><br>
            <slot></slot>
        </form>
        <iframe id="iframe" name="iframe"></iframe>
    </div>
    
</template>

<style scoped>
.shelterFrom{
    width: 100%;
    height: 100%;
    position: fixed;
    background-color: rgba(28,24,41,0.5);
    z-index: 98;
}
form{
    width: 800px;
    height: 300px;
    position: absolute;
    top: 30%;
    left: 25%;
    background-color:#171427;
    border-radius: 15px;
    text-align: center;
}
input{
    height: 44px;
    width: 400px;
    border:none;
    border-radius: 10px;
    font-size: 18px;
    background-color: #aaa;
}
span{
    color: #fff;
    user-select: none;
}
.close{
    height: 30px;
    font-size: 25px;
    color: white;
    font-family: "宋体";
    user-select: none;
    text-align: right;
    border: none;
    border-radius: 10px;
}
.close span{
    cursor:pointer
}
iframe{
    display: none;
}
</style>