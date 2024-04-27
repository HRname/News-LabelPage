<script setup>
import { useAppUrlStore } from '@/stores/appurlStore';

const appUrlStore = useAppUrlStore();
const selectColor = (index) => {
    for(let i = 0; i < appUrlStore.colorSpanList.length; i++ ){
        appUrlStore.colorSpanList[i].isActive = false;
    }
    appUrlStore.colorSpanList[index].isActive = true
    appUrlStore.bgcColor = appUrlStore.colorSpanList[index].color
}
</script>

<template>
    <div class="shelterFrom">
        <form action="" target="iframe">
            <div class="changeUrlAppForm">
                <div class="header">
                    <span>添加网址</span>
                </div>
                <span class="lineBetween"></span>
                <div class="formBody">
                    <div class="webname">
                        <span>网站名称：</span>
                        <input type="text" v-model="appUrlStore.name" placeholder="请输入网站名称">
                    </div>
                    <div class="weburl">
                        <span>网站网址：</span>
                        <input type="text" v-model="appUrlStore.url" placeholder="https://www">
                    </div>
                    <div class="webAppBgcColor">
                        <span>网站背景颜色：</span>
                        <div class="checkboxColor">
                            <span v-for="(item , index) in appUrlStore.colorSpanList" :key="item.id" :style="{ backgroundColor: item.color }" :class="{ colorSpanActive: item.isActive }" @click="selectColor(index)"></span>
                        </div>
                    </div>
                    <slot></slot>
                </div>
                <div class="close">
                    <span @click="appUrlStore.hideAllForm">×</span>
                </div>
            </div>
        </form>
        <iframe id="iframe" name="iframe"></iframe>
    </div>
    
</template>

<style scoped>
.shelterFrom{
    width: 100%;
    height: 100%;
    position: fixed;
    background-color: rgba(28,24,41,0.1);
    z-index: 98;
}
form{
    width: 800px;
    height: 500px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    background-color: black;
    border-radius: 15px;
}

.changeUrlAppForm{
    width: 100%;
    height: 100%;
    display: flex;
}
.header{
    height: 100%;
    width: 20%;
    display: flex;
    justify-content: space-around;
}
.header span{
    margin-top: 20px;
    display: block;
    height: 10%;
    width: 80%;
    text-align: center;
    line-height: 50px;
    color: rgb(77, 170, 252);
    background-color: rgb(28, 28, 30);
    border-radius: 10px;
}
.lineBetween{
    display: block;
    height: 100%;
    width: 2px;
    background-color: #fff;
}
.formBody{
    width: 80%;
    height: 80%;
    margin: 40px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    border-radius: 10px;
    background-color: rgb(28, 28, 30);
}
.webAppBgcColor{
    display: flex;
    align-items: center;
}
.webAppBgcColor span{
    display: block;
    width: 120px;
    font-size: 16px;
}
.checkboxColor{
    height: 60px;
    width: 400px;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
}
.checkboxColor span{
    display: inline-block;
    height: 20px;
    width: 20px;
    margin: 3px;
    border-radius: 50%;
    cursor: pointer;
}
.colorSpanActive{
    border: 2px solid #ccc;
}

input{
    height: 44px;
    width: 400px;
    border:none;
    border-radius: 10px;
    font-size: 18px;
    background-color: #fff;
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