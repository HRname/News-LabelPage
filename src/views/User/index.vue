<script setup>
import { useUserStore } from '@/stores/userStore';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const userStore = useUserStore();
const selectWriteUser = ref(true);
const selectAccount = ref(false);
const optionColor = ref('rgb(77, 170, 252)');
const user = userStore.user;
const router = useRouter();

const clickWriteUser = () => {
    selectWriteUser.value = true;
    selectAccount.value = false;
}
const clickAccount = () => {
    selectWriteUser.value = false;
    selectAccount.value = true;
}

const getImgFullPath = (event) => {
    const uploadFullPath = event.target.files[0];
    const file = uploadFullPath;
    user.userHeaderImg = URL.createObjectURL(file)
}

const modifyUser = () => {
    if (user.username == null && user.password == null) {
        alert('用户名和密码不能为空');
    }else if(user.userHeaderImg == ""){
        user.userHeaderImg = "/src/assets/preview.jpg"
    }else{
        userStore.modifyUser(user);
        userStore.user = user;
        router.push('/');
    }
}

const showAlert = () => {
    userStore.operationNum = 2;
    userStore.warnings = "确定要注销当前账户吗？"
    userStore.isShowAlert = true;
}
</script>

<template>
    <div class="writeUser">
        <div class="writeOption">
            <button @click="clickWriteUser()" :style="{ color: selectWriteUser ? optionColor : 'white'}">填写个人信息</button>
            <button @click="clickAccount()" :style="{ color: selectAccount ? optionColor : 'white'}">账号设置</button>
        </div>
        <span class="lineBetween"></span>
        <div class="getForm" v-show="selectWriteUser">
            <div class="username">
                <span>用户名：</span>
                <input type="text" name="username" placeholder="请输入用户名" v-model="user.username">
            </div>
            <div class="password">
                <span>密码：</span>
                <input type="password" name="password" placeholder="请输入密码" v-model="user.password">
            </div>
            <div class="usersex">
                <span>性别：</span>
                <div>
                    <div>
                        <input type="radio" name="sex" v-model="user.sex" value="1">
                        <span>男</span>
                    </div>
                    <div>
                        <input type="radio" name="sex" v-model="user.sex" value="2">
                        <span>女</span>
                    </div>
                </div>
            </div>
            <div class="userHeaderImg">
                <span>上传头像</span>
                <!-- <input type="file" name="userHeaderImg" id="uploadFullPath" class="uploadImg" @input="getImgFullPath"> -->
                <input class="uploadImg" ref="uploadFullPath" type="file" name="userHeaderImg" @change="getImgFullPath">
            </div>
            <div class="userAddress">
                <span>住址：</span>
                <input type="text" name="address" v-model="user.address">
            </div>
            <div class="userSignature">
                <span>个性签名：</span>
                <textarea name="signature" v-model="user.signature"></textarea>
            </div>
            <div class="submit">
                <button @click="$router.push('/')">返回</button>
                <button @click="modifyUser()">提交修改</button>
            </div>
        </div>
        <div class="account" v-show="selectAccount">
            <div>
                <span @click="showAlert()">注销当前账户</span>
            </div>
        </div>
    </div>
</template>

<style scoped>
.writeUser {
    height: 100%;
    width: 100%;
    background-color: black;
    display: flex;
}
.writeOption {
    height: 30%;
    width: 15%;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-evenly;
}
.writeOption button {
    padding: 0;
    height: 50px;
    width: 80%;
    border: none;
    background-color: rgba(28, 28, 30);
    border-radius: 15px;
    user-select: none;
    font-size: 15px;
    cursor: pointer;
}
.lineBetween {
    height: 100%;
    width: 2px;
    background-color: #fff;
    border-radius: 50%;
}
.getForm {
    height: 80%;
    width: 80%;
    margin: 2%;
    background-color: rgba(28, 28, 30);
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
}
.getForm>div {
    position: relative;
    height: 10%;
    width: 30%;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
}
.getForm>div>span{
    display: block;
    user-select: none;
    width: 100px;
    height: 50px;
    line-height: 50px;
    background: linear-gradient(to right, rgb(77, 170, 252) 0%,rgb(24, 144, 255) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.username input{
    width: 150px;
    height: 25px;
}
.password input{
    width: 150px;
    height: 25px;
}

.usersex>div{
    width: 150px;
    height: 25px;
    display: flex;
}
.usersex>div>div{
    width: 75px;
    display: flex;
    align-items: center;
}
.usersex>div>div>input{
    height: 16px;
    width: 16px;
    cursor: pointer;
}
.usersex>div>div>span{
    user-select: none;
    background: linear-gradient(to right, rgb(77, 170, 252) 0%,rgb(24, 144, 255) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.userHeaderImg{
    user-select: none;
}
.userHeaderImg>span{
    user-select: none;
    text-align: center;
    border:1px solid white;
    border-radius: 10px;
}
.userAddress input{
    width: 150px;
    height: 25px;
    font-size: 14px;
}
.userSignature textarea{
    width: 150px;
    height: 80px;
    font-size: 14px;
}
.submit button{
    padding: 0;
    border: none;
    user-select: none;
    cursor: pointer;
    color: white;
    border-radius: 10px;
    height: 40px;
    width: 100px;
    background: linear-gradient(to right, rgb(77, 170, 252) 0%,rgb(24, 144, 255) 100%);
}

.uploadImg {
    opacity: 0;
    height: 50px;
    width: 100px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    user-select: none;
    cursor: pointer;
}

.account{
    width: 80%;
    height: 80%;
}
.account>div{
    height: 10%;
    width: 10%;
    margin: 10px;
    display: flex;
    align-items: center;
    justify-content: space-around;
}
.account>div>span{
    display: block;
    text-align: center;
    height: 80%;
    width: 100%;
    line-height: 350%;
    user-select: none;
    cursor: pointer;
    border-radius: 10px;
    background-color: rgba(28, 28, 30);
    color: red;
}
</style>