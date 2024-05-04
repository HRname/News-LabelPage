import { defineStore } from "pinia";
import { ref,watch } from "vue";

export const useSearchStore = defineStore("search",() => {
    const searchList = ref([]);
    const searchText = ref("");
    const isShowSearchList = ref(false);
    const searchListTop = ref(380);

    const changeSearchText = (item) => {
        searchText.value = item;
    }

    document.addEventListener("click", (e) => {
        isShowSearchList.value = false;
    })

    const showSearchList = () => {
        isShowSearchList.value = true;
    }   

    watch(searchText, (val) => {
        if (val === '') {
            isShowSearchList.value = false;
            searchList.value.splice(0, searchList.value.length)
            return
        }

        var script = document.createElement("script");
        script.src = "https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd=" + val + "&cb=handleResponse";
        document.body.appendChild(script);
    
        searchList.value.splice(0, searchList.value.length)
        
        setTimeout(() => {
            if(tipList.length > 9){
                tipList.splice(9, tipList.length - 1)
                for(let i = 0; i < 9; i++) {
                    searchList.value.push(tipList[i])
                }
            }else{
                for(let i = 0; i < 9; i++) {
                    searchList.value.push(tipList[i])
                }
            }
            isShowSearchList.value = true;
        }, 200);
        document.body.removeChild(script);
    })

    return {
        searchList,
        searchText,
        changeSearchText,
        showSearchList,
        isShowSearchList,
        searchListTop
    }
});