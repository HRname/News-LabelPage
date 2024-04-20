import { defineStore } from "pinia";
import { useRouter } from "vue-router";
import { ref } from "vue";

export const useAppUrlStore = defineStore("appurl", () => {
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

    const router = useRouter();

    // 保存操作索引用于在数据回显之后修改数据
    const operationIndex = ref(-1)

    // 用于绑定表单数据
    const name = ref('')
    const url = ref('')

    // 显示隐藏添加表单
    const showAddForm = ref(false)
    const changeShowAddForm = () => {
        showAddForm.value = !showAddForm.value;
        // 存储路由信息
        if(showAddForm.value){
            changeRouterPath()
        }else{
            routerPath.value = ''
        }
    }

    // 显示隐藏修改表单
    const showChangeForm = ref(false)
    const changeShowChangeForm = () => {
        showChangeForm.value = !showChangeForm.value;
        // 存储路由信息
        if(showChangeForm.value){
            changeRouterPath()
        }else{
            routerPath.value = ''
        }
    }

    // 隐藏所有表单
    const hideAllForm = () => {
        showAddForm.value = false;
        showChangeForm.value = false;
        url.value = ''
        name.value = ''
        routerPath.value = ''
    }

    // 保存当前路由地址
    const routerPath = ref('')
    const changeRouterPath = () => {
        routerPath.value = router.currentRoute.value.path
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
        const path = routerPath.value
        console.log(path)
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
        changeRouterPath()
        const path = routerPath.value
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
        routerPath.value = ''
    }

    // 编辑网站图标
    const showUrlApp = (index) =>{
        // 显示修改表单
        changeShowChangeForm()
        // 数据回显
        const path = routerPath.value
        if(path === '/searchHome'){
            name.value = homeUrlList.value[index].webName
            url.value = homeUrlList.value[index].url
        }else if(path === '/searchWork'){
            name.value = workUrlList.value[index].webName
            url.value = workUrlList.value[index].url
        }else if(path === '/searchCollect'){
            name.value = collectUrlList.value[index].webName
            url.value = collectUrlList.value[index].url
        }else if(path === '/searchPlay'){
            name.value = playUrlList.value[index].webName
            url.value = playUrlList.value[index].url
        }else if(path === '/searchTool'){
            name.value = toolUrlList.value[index].webName
            url.value = toolUrlList.value[index].url
        }
        // 保存操作索引
        operationIndex.value = index
    }

    // 修改网站图标
    const changeUrlApp = (index) => {
        const buildUrlApp = {
            id: 0,
            webName:name.value,
            url: url.value,
            domainNameImg: url.value + '/favicon.ico'
        }
        const path = routerPath.value
        if(path === '/searchHome'){
            buildUrlApp.id = homeUrlList.value[index].id
            homeUrlList.value.splice(index,1,buildUrlApp)
        }else if(path === '/searchWork'){
            buildUrlApp.id = workUrlList.value[index].id
            workUrlList.value.splice(index,1,buildUrlApp)
        }else if(path === '/searchCollect'){
            buildUrlApp.id = collectUrlList.value[index].id
            collectUrlList.value.splice(index,1,buildUrlApp)
        }else if(path === '/searchPlay'){
            buildUrlApp.id = playUrlList.value[index].id
            playUrlList.value.splice(index,1,buildUrlApp)
        }else if(path === '/searchTool'){
            buildUrlApp.id = toolUrlList.value[index].id
            toolUrlList.value.splice(index,1,buildUrlApp)
        }
        // 重置操作索引
        operationIndex.value = -1
        // 隐藏修改表单
        changeShowChangeForm()
        // 清空表单数据
        name.value = ''
        url.value = ''
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
        deleteUrlApp,
        showUrlApp,
        changeShowAddForm,
        showChangeForm,
        hideAllForm,
        changeUrlApp,
        operationIndex
    }
});