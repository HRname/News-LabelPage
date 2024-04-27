import { defineStore } from "pinia";
import { useRouter } from "vue-router";
import { getAllWebAppAPI } from "@/apis/webApp";
import { useUserStore } from "./userStore";
import { addWebApp } from "@/apis/webApp";
import { ref, watch } from "vue";

export const useAppUrlStore = defineStore("appurl", () => {
    const userStore = useUserStore()
    const webAppUrlList = ref([])
    // 登录后获取用户关于webApp的初始化数据
    const setWebAppList =async (userId) => {
        const res = await getAllWebAppAPI(userId)
        webAppUrlList.value = res.data

        const homeTSUrlList = ref([])
        const workTSUrlList = ref([])
        const collectTSUrlList = ref([])
        const playTSUrlList = ref([])
        const toolTSUrlList = ref([])

        for(let i = 0;i < webAppUrlList.value.length;i++){
            if(webAppUrlList.value[i].zoneName == "homeUrl"){
                homeTSUrlList.value.push(webAppUrlList.value[i])
            }else if(webAppUrlList.value[i].zoneName == "workUrl"){
                workTSUrlList.value.push(webAppUrlList.value[i])
            }else if(webAppUrlList.value[i].zoneName == "collectUrl"){
                collectTSUrlList.value.push(webAppUrlList.value[i])
            }else if(webAppUrlList.value[i].zoneName == "playUrl"){
                playTSUrlList.value.push(webAppUrlList.value[i])
            }else if(webAppUrlList.value[i].zoneName == "toolUrl"){
                toolTSUrlList.value.push(webAppUrlList.value[i])
            }
        }
        
        homeUrlList.value = homeTSUrlList.value
        workUrlList.value = workTSUrlList.value
        collectUrlList.value = collectTSUrlList.value
        playUrlList.value = playTSUrlList.value
        toolUrlList.value = toolTSUrlList.value
        router.push("/")
    }
    const homeUrlList = ref([])
    const workUrlList = ref([
        {id: 1, webName:'百度', url: 'https://www.baidu.com', domainNameImg: 'https://www.baidu.com/favicon.ico',bgcColor:'white'},
        {id: 2, webName:'github', url: 'https://github.com', domainNameImg: 'https://www.github.com/favicon.ico',bgcColor:'white'},
        {id: 3, webName:'LeetCode', url: 'https://leetcode.cn', domainNameImg: 'https://www.leetcode.cn/favicon.ico',bgcColor:'white'},
        {id: 4, webName:'BootCDN', url: 'https://www.bootcdn.cn', domainNameImg: 'https://www.bootcdn.cn/favicon.ico',bgcColor:'white'},
        {id: 5, webName:'哔哩哔哩', url: 'https://www.bilibili.com', domainNameImg: 'https://www.bilibili.com/favicon.ico',bgcColor:'violet'},
        {id: 6, webName:'阿里矢量图标库', url: 'https://www.iconfont.cn', domainNameImg: 'https://www.iconfont.cn/favicon.ico',bgcColor:'cyan'}
    ])
    const collectUrlList = ref([])
    const playUrlList = ref([])
    const toolUrlList = ref([])

    const colorSpanList = ref([
        { id: 1, color: 'white', isActive: false},
        { id: 2, color: 'blue', isActive: false },
        { id: 3, color: 'green', isActive: false },
        { id: 4, color: 'red', isActive: false },
        { id: 5, color: 'yellow', isActive: false },
        { id: 6, color: 'purple', isActive: false },
        { id: 7, color: 'orange', isActive: false },
        { id: 8, color: 'brown', isActive: false },
        { id: 9, color: 'black', isActive: false },
        { id: 10, color: 'gray', isActive: false },
        { id: 11, color: 'pink', isActive: false },
        { id: 12, color: 'cyan', isActive: false },
        { id: 13, color: 'lime', isActive: false },
        { id: 14, color: 'teal', isActive: false },
        { id: 15, color: 'violet', isActive: false },
        { id: 16, color: 'skyblue', isActive: false },
    ])

    const router = useRouter();

    // 保存操作索引用于在数据回显之后修改数据
    const operationIndex = ref(-1)

    // 用于绑定表单数据
    const name = ref('')
    const url = ref('')
    const bgcColor = ref('white')

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
        bgcColor.value = ''
    }

    // 保存当前路由地址
    const routerPath = ref('')
    const changeRouterPath = () => {
        routerPath.value = router.currentRoute.value.path
    }

    // 新增网站
    const addUrlApp = async () => {
        // 构建网站图标对象
        const buildUrlApp = {
            userId: userStore.user.id,
            zoneName: '',
            webName:name.value,
            url: url.value,
            domainNameImg: url.value + '/favicon.ico',
            bgcColor: bgcColor.value
        }
        // 判断当前位于哪个页面
        const path = routerPath.value
        if(path === '/searchHome'){
            buildUrlApp.zoneName = 'homeUrl'
            const res = await addWebApp(buildUrlApp)
            homeUrlList.value.push(res.data)
        }else if(path === '/searchWork'){
            buildUrlApp.zoneName = 'workUrl'
            const res = await addWebApp(buildUrlApp)
            homeUrlList.value.push(res.data)
        }else if(path === '/searchCollect'){
            buildUrlApp.zoneName = 'collectUrl'
            const res = await addWebApp(buildUrlApp)
            homeUrlList.value.push(res.data)
        }else if(path === '/searchPlay'){
            buildUrlApp.zoneName = 'playUrl'
            const res = await addWebApp(buildUrlApp)
            homeUrlList.value.push(res.data)
        }else if(path === '/searchTool'){
            buildUrlApp.zoneName = 'toolUrl'
            const res = await addWebApp(buildUrlApp)
            homeUrlList.value.push(res.data)
        }

        // 添加完成隐藏添加菜单
        changeShowAddForm()
        // 重置颜色选取
        for(let i=0;i<colorSpanList.value.length;i++){
            colorSpanList.value[i].isActive = false
        }
        // 清空菜单数据
        name.value = ''
        url.value = ''
        bgcColor.value = 'white'
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
            bgcColor.value = homeUrlList.value[index].bgcColor
        }else if(path === '/searchWork'){
            name.value = workUrlList.value[index].webName
            url.value = workUrlList.value[index].url
            bgcColor.value = workUrlList.value[index].bgcColor
        }else if(path === '/searchCollect'){
            name.value = collectUrlList.value[index].webName
            url.value = collectUrlList.value[index].url
            bgcColor.value = collectUrlList.value[index].bgcColor
        }else if(path === '/searchPlay'){
            name.value = playUrlList.value[index].webName
            url.value = playUrlList.value[index].url
            bgcColor.value = playUrlList.value[index].bgcColor
        }else if(path === '/searchTool'){
            name.value = toolUrlList.value[index].webName
            url.value = toolUrlList.value[index].url
            bgcColor.value = toolUrlList.value[index].bgcColor
        }
        for(let i=0;i<colorSpanList.value.length;i++){
            if(bgcColor.value === colorSpanList.value[i].color){
                colorSpanList.value[i].isActive = true
            }
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
            domainNameImg: url.value + '/favicon.ico',
            bgcColor: bgcColor.value
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

        for(let i=0;i<colorSpanList.value.length;i++){
            colorSpanList.value[i].isActive = false
        }
        // 清空表单数据
        name.value = ''
        url.value = ''
        bgcColor.value = 'white'
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
        bgcColor,
        deleteUrlApp,
        showUrlApp,
        changeShowAddForm,
        showChangeForm,
        hideAllForm,
        changeUrlApp,
        operationIndex,
        changeShowChangeForm,
        colorSpanList,
        webAppUrlList,
        setWebAppList
    }
});