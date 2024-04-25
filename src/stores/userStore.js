import { defineStore } from "pinia";
import { ref } from "vue";
import { getLoginAPI } from "@/apis/user";
import { useSettingStore } from "@/stores/settingStore";
import { useRouter } from "vue-router";

export const useUserStore = defineStore("user",() => {
  const settingStore = useSettingStore()
  const router = useRouter()

  const user = ref({id:null,username:null,password:null,sex:null,userHeaderImg:null,signature:null,address:null})
  const defaultUser = ref({id:null,username:null,password:null,sex:null,userHeaderImg:null,signature:null,address:null})

  const username=ref("")
  const password=ref("")
  const isShowAlert = ref(false)

  const login = async (username, password) => {
    const res = await getLoginAPI({username, password})
    console.log(res.data)
    if (res.code === 1) {
      user.value = res.data
      router.push("/")
    }else{
      alert(res.msg)
    }
  }

  const verifyLogin = () => {
    if (user.value.username == null) {
      alert("请登录")
      router.push("/login")
    }else{
      settingStore.changeShowSetting()
    }
  }

  const outLogin = () => {
    user.value = defaultUser.value
    settingStore.changeShowSetting()
    isShowAlert.value = false
  }

  return {
    user,
    login,
    username,
    password,
    verifyLogin,
    outLogin,
    isShowAlert
  }
});