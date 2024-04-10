<script setup>
import { useAppUrlStore } from '@/stores/appurlStore';
import { ref } from 'vue';

const appUrlStore = useAppUrlStore();
</script>

<template>
    <div class="shelterFrom">
        <form action="" target="iframe">
            <div class="close">
                <span @click="appUrlStore.changeShowAddForm">×</span>
            </div>
            <br><br>
            <div>
                <span>网站名称：</span>
                <input type="text" v-model="appUrlStore.name">
            </div>
            <br>
            <div>
                <span>网站网址：</span>
                <input type="text" v-model="appUrlStore.url">
            </div>
            <br><br>
            <input type="submit" value="添加网站" class="submit" @click="appUrlStore.addUrlApp()">
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
.submit{
    width: 100px;
    height: 40px;
    font-size: 16px;
    background-color: #fff;
}
input[type=submit]{
    cursor:pointer;
}
.close{
    height: 30px;
    font-size: 25px;
    color: white;
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