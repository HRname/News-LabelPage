import { defineStore } from "pinia";
import { ref } from "vue";

export const usePictureStore = defineStore('picture',() =>{
    const pictureList = ref([
        { id:1, name:"山湖", src:"/src/assets/image/001.jpg"},
        { id:2, name:"自然", src:"/src/assets/image/002.jpg"},
        { id:3, name:"星河", src:"/src/assets/image/003.jpg"},
        { id:4, name:"池塘", src:"/src/assets/image/004.jpg"},
        { id:5, name:"翠湖", src:"/src/assets/image/005.jpg"},
        { id:6, name:"自然黄昏", src:"/src/assets/image/006.jpg"},
        { id:7, name:"池塘聚落", src:"/src/assets/image/007.jpg"},
        { id:8, name:"暮色", src:"/src/assets/image/008.jpg"},
        { id:9, name:"桂林山水", src:"/src/assets/image/009.jpg"}
    ]);

    return {
        pictureList
    }
})