<template>
  <el-carousel :interval="4000" type="card" height="200px" class="el-carousel-top">
    <el-carousel-item v-for="(item,keyitem) in imgSrcList" :key="item" >
      <!--<h3 class="medium">{{ item }}</h3>-->
      <img :src="item" alt="">
    </el-carousel-item>
  </el-carousel>
</template>

<script>
  export default {
    data(){
      return{
        // interval:1000,
        imgSrcList:[
          './../static/bannerphoto/bn1.jpg',
          './../static/bannerphoto/bn2.jpg',
          './../static/bannerphoto/bn3.jpg',
          './../static/bannerphoto/bn4.jpg'
        ]
      }
    },
    mounted() {
      setInterval('',)
    }
  }
</script>

<style scoped>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
    text-align: center;
  }
  .el-carousel-top {
    margin-top: -1px;
  }

  /*.el-carousel__item:nth-child(2n) {*/
    /*background-color: #99a9bf;*/
  /*}*/

  /*.el-carousel__item:nth-child(2n+1) {*/
    /*background-color: #d3dce6;*/
  /*}*/
</style>
