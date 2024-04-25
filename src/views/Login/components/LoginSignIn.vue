<script setup>
import { useUserStore } from '@/stores/userStore';

const userStore = useUserStore();
</script>

<template>
    <form class="loginSignIn" action="/searchHome" method="post">
        <div class="title">
            <h1>News LabelPage</h1>
            <h1>Login</h1>
        </div>
        <div class="loginForm">
            <div class="username">
                <span>用户名：</span>
                <div class="usernameInput">
                    <input type="text" name="username" placeholder="请输入用户名" v-model="userStore.username">
                    <span></span>
                </div>
            </div>
            <div class="password">
                <span>密码：</span>
                <div class="passwordInput">
                    <input type="password" name="password" placeholder="请输入密码" v-model="userStore.password">
                    <span></span>
                </div>
            </div>
        </div>
        <div class="getButton">
            <button type="button" @click="userStore.login(userStore.username,userStore.password)">登录</button>
        </div>
    </form>
</template>

<style scoped>
.loginSignIn {
    width: 450px;
    height: 600px;
    background-color: rgb(28, 28, 30, 0.7);
    border-radius: 10px;
    margin: 8% auto;
    display: flex;
    flex-direction: column;
}
.title {
    height: 25%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    text-align: center;
    background: linear-gradient(to right, rgb(239,202,195) 0%,rgb(232,123,197) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    user-select: none;
}
.title h1 {
    font-size: 32px;
    font-weight: 600;
}

.loginForm {
    height: 40%;
    width: 80%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    user-select: none;
    color: #fff;
}

.username{
    width: 100%;
    display: flex;
    justify-content: space-around;
}
.username>span {
    display: block;
    font-size: 20px;
    height: 30px;
    line-height: 30px;
    width: 80px;
    background: linear-gradient(to right, rgb(239,202,195) 0%,rgb(232,123,197) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}
.usernameInput{
    height: 30px;
    width: 220px;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.usernameInput>input{
    height: 28px;
    border: none;
    background-color: rgba(28, 28, 30, 0);
    color: #fff;
    font-size: 20px;
    width: 100%;
    outline: none;
}
.usernameInput>span{
    background-color: #fff;
    width: 100%;
    height: 2px;
}


.password{
    width: 100%;
    display: flex;
    justify-content: space-around;
}
.password>span{
    display: block;
    font-size: 20px;
    height: 30px;
    line-height: 30px;
    width: 80px;
    background: linear-gradient(to right, rgb(239,202,195) 0%,rgb(232,123,197) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}
.passwordInput{
    height: 30px;
    width: 220px;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.passwordInput>input{
    height: 28px;
    border: none;
    background-color: rgba(28, 28, 30, 0);
    color: #fff;
    font-size: 20px;
    width: 100%;
    outline: none;
}
.passwordInput>span{
    background-color: #fff;
    width: 100%;
    height: 2px;
}

.getButton{
    width: 100%;
    height: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.getButton>button{
    width: 100px;
    height: 40px;
    user-select: none;
    cursor: pointer;
    border: none;
    border-radius: 5px;
    color: white;
    font-size: 16px;
    background: linear-gradient(to right, rgb(239,202,195) 0%,rgb(232,123,197) 100%);;
}
input:-webkit-autofill {
  transition: background-color 5000s ease-in-out 0s;
  -webkit-text-fill-color: #fff;
}
</style>