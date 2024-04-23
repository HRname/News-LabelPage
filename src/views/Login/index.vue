<script setup>
import LoginSignIn from './components/LoginSignIn.vue';
</script>

<template>
    <div class="loginBackground"></div>
    <div class="login">
        <LoginSignIn></LoginSignIn>
    </div>
</template>

<style scoped>
.loginBackground {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-image: url('@/assets/登陆背景.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    z-index: -99;
}
</style>