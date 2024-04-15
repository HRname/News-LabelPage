<script setup>
    import { ref,defineProps } from 'vue'
    import { useAppUrlStore } from '@/stores/appurlStore'
    import { useSettingStore } from '@/stores/settingStore';

    defineProps({
        x:{
            type:Number,
            default:0
        },
        y:{
            type:Number,
            default:0
        },
        deleteWebAppIndex:{
            type:Number,
            default:0
        }
    })

    const appUrlStore = useAppUrlStore()
    const settingStore = useSettingStore()
</script>

<template>
    <ul :style="{top : y+'px', left: x+'px'}">
        <li class="placeholderLi"></li>
        <li @click="appUrlStore.deleteUrlApp(deleteWebAppIndex)">删除图标</li>
        <li @click="appUrlStore.showUrlApp(deleteWebAppIndex)">编辑图标</li>
        <li @click="settingStore.changeShowSetting()">设置</li>
    </ul>
    
</template>

<style scoped>
ul{
    position:absolute;
    height: 200px;
    width: 140px;
    background-color: #171427;
    opacity: 0.9;
    border-radius: 10px;
}
.placeholderLi{
    height: 20px;
}
li{
    height: 40px;
    width: 140px;
    color: white;
    user-select: none;
    cursor:pointer;
    padding-left: 10px;
}
</style>