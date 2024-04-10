import { defineStore } from "pinia";
import { useRouter } from "vue-router";
import { ref } from "vue";

export const useAppUrlStore = defineStore("appurl", () => {
    const router = useRouter();
    const homeUrlList = ref([])
    const workUrlList = ref([
        {id: 1, webName:'百度', url: 'https://www.baidu.com', domainNameImg: 'https://www.baidu.com/favicon.ico'},
        {id: 2, webName:'github', url: 'https://github.com', domainNameImg: 'https://www.github.com/favicon.ico'},
        {id: 3, webName:'LeetCode', url: 'https://leetcode.cn', domainNameImg: 'https://www.leetcode.cn/favicon.ico'},
        {id: 4, webName:'BootCDN', url: 'https://www.bootcdn.cn', domainNameImg: 'https://www.bootcdn.cn/favicon.ico'},
        {id: 5, webName:'哔哩哔哩', url: 'https://www.bilibili.com', domainNameImg: 'https://www.bilibili.com/favicon.ico'},
        {id: 6, webName:'阿里矢量图标库', url: 'https://www.iconfont.cn', domainNameImg: 'https://www.iconfont.cn/favicon.ico'}
    ])
    const collectUrlList = ref([])
    const playUrlList = ref([])
    const toolUrlList = ref([])

    // 用于绑定表单数据
    const name = ref('')
    const url = ref('')

    // 显示隐藏添加表单
    const showAddForm = ref(false)
    const changeShowAddForm = () => {
        showAddForm.value = !showAddForm.value;
    }

    // 新增网站
    const addUrlApp = () => {
        // 构建网站图标对象
        const buildUrlApp = {
            id: 0,
            webName:name.value,
            url: url.value,
            domainNameImg: url.value + '/favicon.ico'
        }
        // 判断当前位于哪个页面
        const path = router.currentRoute.value.path
        if(path === '/searchHome'){
            buildUrlAppId(homeUrlList,buildUrlApp)
            homeUrlList.value.push(buildUrlApp)
        }else if(path === '/searchWork'){
            buildUrlAppId(workUrlList,buildUrlApp)
            workUrlList.value.push(buildUrlApp)
        }else if(path === '/searchCollect'){
            buildUrlAppId(collectUrlList,buildUrlApp)
            collectUrlList.value.push(buildUrlApp)
        }else if(path === '/searchPlay'){
            buildUrlAppId(playUrlList,buildUrlApp)
            playUrlList.value.push(buildUrlApp)
        }else if(path === '/searchTool'){
            buildUrlAppId(toolUrlList,buildUrlApp)
            toolUrlList.value.push(buildUrlApp)
        }
        console.log(buildUrlApp)
        // 添加完成隐藏添加菜单
        changeShowAddForm()
        // 清空菜单数据
        name.value = ''
        url.value = ''
    }
    // 构建网站id
    const buildUrlAppId = (UrlList,buildUrlApp) => {
        if(UrlList.value.length === 0){
            buildUrlApp.id = 1
        }else{
            const lastValue = UrlList.value[UrlList.value.length -1]
            buildUrlApp.id = lastValue.id + 1
        }
    }

    // 删除网站图标
    const deleteUrlApp = (index) => {
        const path = router.currentRoute.value.path
        if(path === '/searchHome'){
            homeUrlList.value.splice(index,1)
        }else if(path === '/searchWork'){
            workUrlList.value.splice(index,1)
        }else if(path === '/searchCollect'){
            collectUrlList.value.splice(index,1)
        }else if(path === '/searchPlay'){
            playUrlList.value.splice(index,1)
        }else if(path === '/searchTool'){
            toolUrlList.value.splice(index,1)
        }
    }

    return {
        homeUrlList,
        workUrlList,
        collectUrlList,
        playUrlList,
        toolUrlList,
        showAddForm,
        changeShowAddForm,
        addUrlApp,
        name,
        url,
        deleteUrlApp
    }
});