<script setup>
    import { ref,defineProps } from 'vue'
    import { useAppUrlStore } from '@/stores/appurlStore'
    import { useUserStore } from '@/stores/userStore';

    defineProps({
        x:{
            type:Number,
            default:0
        },
        y:{
            type:Number,
            default:0
        }
    })

    const appUrlStore = useAppUrlStore()
    const userStore = useUserStore()
</script>

<template>
    <ul :style="{top : y+'px', left: x+'px'}">
        <li class="placeholderLi"></li>
        <li @click="appUrlStore.changeShowAddForm()">添加图标</li>
        <li @click="userStore.verifyLogin()">设置</li>
    </ul>
    
</template>

<style scoped>
ul{
    position:absolute;
    height: 200px;
    width: 140px;
    background-color: rgba(14, 17, 27, 0.9);
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