<script setup>
import { ref, watch } from 'vue'
import { useSettingStore } from '@/stores/settingStore';
import { useSearchStore } from '@/stores/searchStore';

const settingStore = useSettingStore()
const searchStore = useSearchStore()
const activeBgc = ref(false)
const defaultBgc = ref(true)

const changeActiveBgc = () => {
    activeBgc.value = true
    defaultBgc.value = false
}
const changeDefaultBgc = () => {
    activeBgc.value = false
    defaultBgc.value = true
}

// watch(searchStore.searchText, async (val) => {
//     if (val === '') {
//         searchStore.searchList.splice(0, searchStore.searchList.length)
//         return
//     }
//     var script = document.createElement("script");
//     script.src = "https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd=" + val + "&cb=handleResponse";
//     document.body.appendChild(script);

//     searchStore.searchList.splice(0, searchStore.searchList.length)
//     setTimeout(() => {
//         for(let i = 0; i < 9; i++) {
//             searchStore.searchList.push(tipList[i])
//         }
//     }, 200)
// })
</script>

<template>
<div class="Search" :style="{ marginBottom:settingStore.searchSetting.searchBottomMargin + 'px'}">
        <form 
            action="https://www.bing.com/search" 
            method="get" 
            target="_blank" 
            @mouseenter="changeActiveBgc" 
            @mouseleave="changeDefaultBgc" 
            :class="{ activeBgc: activeBgc, defaultBgc: defaultBgc }"
            :style="{ height: settingStore.searchSetting.searchHeight+'px', opacity: settingStore.searchSetting.searchOpacity ,borderRadius:settingStore.searchSetting.searchBorderRadius + 'px' }"
        >

            <div class="png" :class="{ activeBgc: activeBgc, defaultBgc: defaultBgc }" :style="{ height: settingStore.searchSetting.searchHeight + 'px' }">
                <img src="https://files.codelife.cc/itab/search/bing.svg" alt="">
            </div>

            <input id="search" type="search" v-model="searchStore.searchText" @click.stop="" @focus.stop="searchStore.showSearchList" placeholder="请输入搜索内容" name="q" :class="{activeBgc: activeBgc, defaultBgc: defaultBgc}" :style="{ height: settingStore.searchSetting.searchHeight + 'px' }">

            <button class="submit" type="submit" :class="{activeBgc: activeBgc, defaultBgc: defaultBgc}" :style="{ height: settingStore.searchSetting.searchHeight + 'px' }">
                <svg data-v-4baba1fe="" 
                    xmlns="http://www.w3.org/2000/svg" 
                    xmlns:xlink="http://www.w3.org/1999/xlink" 
                    viewBox="0 0 24 24"
                >
                <g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="10" cy="10" r="6"></circle>
                    <path d="M21 21l-6-6"></path>
                </g>
                </svg>
            </button>
        </form>
    </div>
</template>

<style scoped>
.Search{
    width: 600px;
    height: 100px;
    margin:0 auto;
    z-index: 0;
    /* margin-bottom: 60px; */
}
.Search form{
    margin:0 auto;
    /* height: 44px; */
    width: 600px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    user-select: none;
    overflow: hidden;
}
.Search input{
    outline: none;
    border: none;
    margin: 0 auto;
    font-size: 14px;
    /* height: 44px; */
    width: 522px;
    color: white;
}
.submit{
    /* height: 40px; */
    width: 40px;
    padding-right: 3px;
    border: none;
    margin: 0 auto;
    color: white;
    /* background-color: #333; */
}
.png{
    /* height: 44px; */
    width: 44px;
    user-select: none;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    /* background-color: #333; */
}
img{
    display: inline-block;
    height: 22px;
    width: 22px;
    user-select: none;
}
.activeBgc{
    background-color: #171427;
}
.defaultBgc{
    background-color: #282441;
}
</style>