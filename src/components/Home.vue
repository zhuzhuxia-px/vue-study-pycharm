<template>
    <div>
    <v-banner></v-banner>
      <p>hh</p>
    </div>
</template>

<script>
import Banner from "./Banner.vue"
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
          'v-banner':Banner
        }
    }
</script>

<style scoped>

</style>
