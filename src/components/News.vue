<template>
    <div>
      <h1>{{newsMsg}}</h1>
    </div>
</template>

<script>
    export default {
        name: "News",
        data(){
          return{
            newsMsg:'我是News组件的内容'
          }
        }
    }
</script>

<style scoped>

</style>
