<template>
    <div>
      <h1>{{userMsg}}</h1>
    </div>
</template>

<script>
    export default {
        name: "User",
        data(){
          return{
            userMsg:'我是User组件的内容'
          }
        }
    }
</script>

<style scoped>

</style>
