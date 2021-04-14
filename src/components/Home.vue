<template>
    <div>
    <v-banner></v-banner>
    <v-BannerElement></v-BannerElement>

      <p>hh</p>
    </div>
</template>

<script>
import Banner from "./Banner.vue"
import BannerElement from "./BannerElement.vue"

    export default {
        name: "home",
        data(){
          return{
            homeMsg:'我是Home组件的内容',
            activeIndex: '1',
            activeIndex2: '1'
          }
        },
        methods: {
        handleSelect(key, keyPath) {
          console.log(key, keyPath);
           }
        },
        components:{
          'v-banner':Banner,
          'v-BannerElement':BannerElement
        }
    }
</script>

<style scoped>

</style>
