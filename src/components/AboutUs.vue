<template>
    <div>
      我是关于我们
      <v-aboutus></v-aboutus>
    </div>
</template>

<script>
    import aboutus from './AboutUsEchartBar.vue'

    export default {
        name: "AboutUs",
        components:{'v-aboutus':aboutus}
    }
</script>

<style scoped>

</style>
