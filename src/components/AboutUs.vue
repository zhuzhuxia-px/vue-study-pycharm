<template>
    <div>
      我是关于我们
      <v-aboutuscvs></v-aboutuscvs>
      <hr>
      <v-aboutus></v-aboutus>
    </div>
</template>

<script>
    import aboutus from './AboutUsEchartBar.vue'
    import aboutuscvs from './AboutUsEchartCvsshow.vue'

    export default {
        name: "AboutUs",
        components:{
          'v-aboutus':aboutus,
          'v-aboutuscvs':aboutuscvs
        }
    }
</script>

<style scoped>

</style>
