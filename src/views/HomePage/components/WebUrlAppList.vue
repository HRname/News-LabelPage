<script setup>
    import WebUrlApp from './WebUrlApp.vue';
    import AddUrlList from '@/components/ChangeUrlList/AddUrlList.vue';
    import DeletUrlList from '@/components/ChangeUrlList/DeletUrlList.vue';
    import { useAppUrlStore } from '@/stores/appurlStore';
    import { defineProps, ref } from 'vue'
    import { useSettingStore } from '@/stores/settingStore';

    defineProps({
        urlList: {
            type: Array,
            default: ()=>{}
        }
    })

    const showAddOrder = ref(false)
    const showDelOrder = ref(false)
    const x = ref(0)
    const y = ref(0)
    const deleteWebAppIndex = ref(0)
    const appUrlStore = useAppUrlStore()

    // 阻止右键默认菜单
    const handleContextMenu = (event) => {
        event.preventDefault()
    }
    // 右键添加菜单
    const clickAddHandel = (event) => {
        if (event.button === 2) {
            x.value = event.layerX
            y.value = event.layerY
        }
        showAddOrder.value = !showAddOrder.value
    }
    // 隐藏右键菜单
    const clickHidden = () => {
        if (showAddOrder.value) {
            showAddOrder.value = false
        }
        if (showDelOrder.value) {
            showDelOrder.value = false
        }
    }
    // 右键删除菜单
    const clickDelHandel = (index,e) => {
        if (e.button === 2) {
            x.value = e.layerX
            y.value = e.layerY
        }
        deleteWebAppIndex.value = index
        showDelOrder.value = !showDelOrder.value
    }

    const settingStore = useSettingStore()
</script>

<template>
    <ul class="webUrlAppList"
        @contextmenu="handleContextMenu"
        @contextmenu.prevent.stop="clickAddHandel"
        @click="clickHidden"
    >
        <li class="webUrlApp" v-for="(item,index) in urlList" :key="item.id" :style="{ height:settingStore.settingList[1].webAppHeight+'px', width:settingStore.settingList[1].webAppWidth+'px'}">
            <WebUrlApp :webUrlApp = "item" @contextmenu.prevent.stop="clickDelHandel(index,$event)">
            </WebUrlApp>
        </li>
        <AddUrlList v-show="showAddOrder" :x="x" :y="y"></AddUrlList>
        <DeletUrlList v-show="showDelOrder" :x="x" :y="y" :deleteWebAppIndex="deleteWebAppIndex"></DeletUrlList>
    </ul>
    
</template>

<style scoped>
.webUrlAppList{
    height: 500px;
    width: 1200px;
    margin: 0 auto;
    user-select: none;
}
.webUrlApp{
    /* width: 12%;
    height: 100px; */
    text-align: center;
    display: inline-block;
    vertical-align: top;/* li元素对齐方式 */
}
</style>