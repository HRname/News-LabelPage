<script setup>
import WebUrlAppList from './WebUrlAppList.vue'
import { useAppUrlStore } from '@/stores/appurlStore'
import { ref } from 'vue';

const appUrlStore = useAppUrlStore()
const urlList = ref([])
urlList.value = appUrlStore.workUrlList
</script>

<template>
    <WebUrlAppList :urlList="urlList"></WebUrlAppList>
</template>

<style scoped>

</style>