<script setup>
    defineProps({
        webUrlApp: {
            type:Object,
            default: ()=>{}
        }
    })
</script>

<template>
    <a :href="webUrlApp.url" target="_blank">
        <img :src="webUrlApp.domainNameImg" alt="">
        <span>{{ webUrlApp.webName }}</span>
    </a>
</template>

<style scoped>
img{
    height: 55px;
    width: 55px;
    margin: 0;
    padding: 0;
    background-color: #fff;
    border-radius: 10px;
    border: 1px solid black;
}
span{
    height: 55px;
    width: 55px;
    flex-shrink: 1;
    display: block;
}
a{
    height: 66px;
    width: 55px;
    display: inline-block;
    text-decoration: none;
    color:white;
    text-align: center;
    user-select: none;
    font-size: 12px;
}
</style>