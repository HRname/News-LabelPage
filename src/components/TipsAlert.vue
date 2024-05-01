<script setup>
import { useSettingStore } from "@/stores/settingStore";

const settingStore = useSettingStore()
</script>

<template>
    <div class="tipsAlert" :style="{backgroundColor: settingStore.tipsBgcColor,top:settingStore.tipsTop+'px'}">
        {{ settingStore.tips }}
    </div>
</template>

<style scoped>
.tipsAlert{
    position: absolute;
    left: 50%;
    height: 50px;
    width: 300px;
    border-radius: 10px;
    transform: translate(-50%, -10%);
    color: #fff;
    font-size: 14px;
    user-select: none;
    opacity: 0.8;
    z-index: 100;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: space-around;
}
</style>