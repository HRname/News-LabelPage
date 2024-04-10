<script setup>
import { ref } from 'vue'

const searchText = ref('')
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
</script>

<template>
<div class="Search">
        <form 
            action="https://www.bing.com/search" 
            method="get" 
            target="_blank" 
            @mouseenter="changeActiveBgc" 
            @mouseleave="changeDefaultBgc" 
            :class="{activeBgc: activeBgc, defaultBgc: defaultBgc}"
        >

            <div class="png" :class="{activeBgc: activeBgc, defaultBgc: defaultBgc}">
                <img src="https://files.codelife.cc/itab/search/bing.svg" alt="">
            </div>

            <input type="search" v-model="searchText" placeholder="请输入搜索内容" name="q" :class="{activeBgc: activeBgc, defaultBgc: defaultBgc}">

            <button class="submit" type="submit" :class="{activeBgc: activeBgc, defaultBgc: defaultBgc}">
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
    margin:0 auto;
    margin-bottom: 60px;
    overflow: hidden;
    border-radius: 30px;
}
.Search form{
    margin:0 auto;
    height: 44px;
    width: 600px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    user-select: none;
}
.Search input{
    outline: none;
    border: none;
    margin: 0 auto;
    height: 44px;
    width: 522px;
    color: white;
}
.submit{
    height: 40px;
    width: 40px;
    padding-right: 3px;
    border: none;
    margin: 0 auto;
    color: white;
    /* background-color: #333; */
    border-radius: 15px;
}
.png{
    height: 44px;
    width: 44px;
    user-select: none;
    /* background-color: #333; */
}
img{
    margin-top: 11px;
    margin-left: 11px;
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