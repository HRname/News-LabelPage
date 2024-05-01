import { defineStore } from "pinia";
import { ref } from "vue";
import { getLoginAPI } from "@/apis/user";
import { postUserAPI } from "@/apis/user";
import { deleteUserAPI } from "@/apis/user";
import { useSettingStore } from "@/stores/settingStore";
import { useRouter } from "vue-router";
import { useAppUrlStore } from "./appurlStore";

export const useUserStore = defineStore("user",() => {
  const settingStore = useSettingStore()
  const router = useRouter()
  const appurlStore = useAppUrlStore()
  const user = ref({id:null,username:null,password:null,sex:1,userHeaderImg:null,signature:null,address:null})
  const defaultUser = ref({id:null,username:null,password:null,sex:1,userHeaderImg:null,signature:null,address:null})

  // 登录信息
  const username=ref("")
  const password=ref("")
  // 警告弹框信息
  const isShowAlert = ref(false)
  const warnings = ref("")
  // 操作数,1代表当前为点击了退出登录,2代表点击了销毁账户
  const operationNum = ref(0);

  const login = async (username, password) => {
    const res = await getLoginAPI({username, password})
    const msg = ref(res.msg)
    const color = ref('')
    if(res.data == null){
      color.value = '#FF0000'
      settingStore.showTips(msg,color)
      return
    }

    if (res.code === 1) {
      msg.value = "登录成功"
      color.value = '#77FF00'
      settingStore.showTips(msg,color)
      user.value = res.data
      appurlStore.setWebAppList(user.value.id)
      settingStore.getAllSetting(user.value.id)
    }
  }

  const verifyLogin = () => {
    if (user.value.username == null) {
      warnings.value = "请先登录"
      operationNum.value = 3
      isShowAlert.value = true
    }else{
      settingStore.changeShowSetting()
    }
  }

  const outLogin = () => {
    user.value = defaultUser.value
    settingStore.changeShowSetting()
    isShowAlert.value = false
  }

  const toUser = () => {
    if(user.value.username == null){
      alert("请先登录")
      router.push('/login')
    }else{
      router.push("/user")
    }
    settingStore.changeShowSetting()
  }

  const modifyUser = async (user) => {
    const res = await postUserAPI(user)
    if(res.code === 0){
      alert("修改失败")
    }
  }

  const deleteUser = async () => {
    const res = await deleteUserAPI(user.value.id)
    if(res.code === 0){
      alert("删除失败")
    }else if(res.code === 1){
      user.value = defaultUser.value
      isShowAlert.value = false
      router.push("/")
    }
  }

  const toLogin = () => {
    router.push("/login")
    isShowAlert.value = false
  }

  return {
    user,
    login,
    username,
    password,
    verifyLogin,
    outLogin,
    isShowAlert,
    toUser,
    modifyUser,
    deleteUser,
    warnings,
    operationNum,
    toLogin
  }
});