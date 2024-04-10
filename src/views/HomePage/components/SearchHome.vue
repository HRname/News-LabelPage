<script setup>
    import WebUrlAppList from './WebUrlAppList.vue'
    import { useAppUrlStore } from '@/stores/appurlStore';
    import {ref} from 'vue';

    const urlList = ref([])
    const appUrlStore = useAppUrlStore()
    urlList.value = appUrlStore.homeUrlList
</script>

<template>
    <WebUrlAppList :urlList="urlList"></WebUrlAppList>
</template>

<style scoped>

</style>