<template>
  <div id="app">
    <v-head></v-head>
    <router-view/>
    <!--<img src="./assets/bn1.jpg" alt="">-->
  </div>
</template>

<script>
  import Head from "./components/Head.vue";
export default {
  name: 'App'
  ,
  components:{
          "v-head":Head
         }
}
</script>

<style>
#app {
  /*text-align: center;*/
  background-color: papayawhip;
  width: 800px;
  margin: 0 auto;
}

</style>
