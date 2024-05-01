<script setup>
import LoginSignIn from './components/LoginSignIn.vue';
</script>

<template>
    <div class="background1"></div>
    <div class="background2"></div>
    <div class="block1"></div>
    <div class="block2"></div>
    <div class="block3"></div>
    <div class="block4"></div>
    <div class="login">
        <LoginSignIn></LoginSignIn>
    </div>
</template>

<style scoped>
.background1 {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: linear-gradient(to bottom , #009688 0%, #ff80b2 100%);
    filter: blur(10px);
    z-index: -99;
}
.block1 {
    position: absolute;
    top: 20%;
    left: 30%;
    height: 100px;
    width: 100px;
    background-color: #fff;
    opacity: 0.5;
    z-index: 1;
    user-select: none;
    border-radius: 5px;
    box-shadow: 5px 5px 5px 5px rgba(28, 28, 30, 0.5);
}
.block2 {
    position: absolute;
    top: 40%;
    left: 64%;
    height: 100px;
    width: 100px;
    background-color: #fff;
    opacity: 0.5;
    z-index: 1;
    user-select: none;
    border-radius: 5px;
    box-shadow: 5px 5px 5px 5px rgba(28, 28, 30, 0.5);
}
.block3 {
    position: absolute;
    top: 60%;
    left: 30%;
    height: 100px;
    width: 100px;
    background-color: #fff;
    opacity: 0.5;
    z-index: 1;
    user-select: none;
    border-radius: 5px;
    box-shadow: 5px 5px 5px 5px rgba(28, 28, 30, 0.5);
}
.block4 {
    position: absolute;
    top: 75%;
    left: 64%;
    height: 100px;
    width: 100px;
    background-color: #fff;
    opacity: 0.5;
    z-index: 1;
    user-select: none;
    border-radius: 5px;
    box-shadow: 5px 5px 5px 5px rgba(28, 28, 30, 0.5);
}
</style>