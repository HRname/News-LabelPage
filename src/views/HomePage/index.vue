<script setup>
import SearchBox from './components/SearchBox.vue'
import LocalTime from './components/LocalTime.vue'
import CategoryList from './components/CategoryNav.vue'
</script>

<template>
    <!-- 左侧导航 -->
    <CategoryList></CategoryList>
    <!-- 占位元素 -->
    <div class="placeholder"></div>
    <!-- 时间 -->
    <LocalTime></LocalTime>
    <!-- 搜索框 -->
    <SearchBox></SearchBox>
    <!-- 右侧设置 -->

    <!-- 二级路由出口视图 -->
    <RouterView />
</template>

<style scoped>
.placeholder{
    height: 100px;
}
</style>