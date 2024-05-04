<script setup>
import { useSearchStore } from '@/stores/searchStore';

const searchStore = useSearchStore();
</script>

<template>
    <div class="searchTips" v-show="searchStore.isShowSearchList" :style="{top:searchStore.searchListTop+'px'}">
        <ul>
            <li v-for="(item,index) in searchStore.searchList" :key="index" @click.stop="searchStore.changeSearchText(item)">
                <svg t="1714638381084" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4289" width="25" height="25"><path d="M776.3 467c0-84.1-32.8-163.2-92.3-222.7-59.4-59.5-138.5-92.3-222.7-92.3s-163.2 32.8-222.7 92.3-92.3 138.6-92.3 222.7 32.8 163.2 92.3 222.7S377.2 782 461.3 782s163.2-32.8 222.7-92.3c59.6-59.5 92.3-138.6 92.3-222.7z m-315 255c-140.6 0-255-114.4-255-255s114.4-255 255-255 255 114.4 255 255-114.4 255-255 255zM864.4 776.1l-97.5-97.5c-17.7-17.7-46.7-17.7-64.5 0l-19 19c-17.7 17.7-17.7 46.7 0 64.5l97.5 97.5c17.7 17.7 46.7 17.7 64.5 0l19-19c17.7-17.7 17.7-46.7 0-64.5z" fill="#bfbfbf" p-id="4290"></path></svg>
                <span>{{ item }}</span>
            </li>
        </ul>
    </div>
</template>

<style scoped>
.searchTips {
    position: absolute;
    left: 50%;
    z-index: 999;
    width: 600px;
    background-color: rgba(28,28,30,0.5);
    color: white;
    transform: translateX(-50%) translateY(-45%);
    border-radius: 10px;
}
.searchTips ul {
    display: flex;
    flex-direction: column;
    align-items: center;
}
.searchTips ul li {
    display: flex;
    align-items: center;
    width: 550px;
}
.searchTips ul li span {
    display: block;
    height: 30px;
    line-height: 30px;
    padding-left: 10px;
    font-size: 14px;
    user-select: none;
    cursor: pointer;
}
</style>