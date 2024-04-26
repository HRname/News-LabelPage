<script setup>
import { useUserStore } from '@/stores/userStore';

const userStore = useUserStore();
</script>

<template>
    <div class="shelter" v-show="userStore.isShowAlert"></div>
    <div class="determineAlert" v-show="userStore.isShowAlert">
        <slot name="title"></slot>
        <div>
            <button @click="userStore.isShowAlert = false">取消</button>
            <slot name="submit"></slot>
        </div>
    </div>
</template>

<style scoped>
.determineAlert {
    width: 20%;
    height: 25%;
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translate(-50%, -10%);
    background-color: rgba(28, 28, 30, 0.9);
    border-radius: 10px;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    z-index: 100;
}
.shelter {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: rgba(28, 28, 30,0.5);
    z-index: 100;
}
.determineAlert div {
    display: flex;
    width: 80%;
    height: 100px;
    align-items: center;
    justify-content: space-around;
}
.determineAlert button {
    border: none;
    height: 40px;
    width: 70px;
    border-radius: 10px;
    color: white;
    background: linear-gradient(to right, rgb(77, 170, 252) 0%,rgb(24, 144, 255) 100%);
    user-select: none;
    cursor: pointer;
}
</style>