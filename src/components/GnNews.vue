<template>
    <div>
      <!--<el-button type="primary" round @click="GnNewsBt">请求新闻</el-button>-->
      哈哈哈哈好
      <br>
      <h1>{{GnNewsdetails.title}}</h1>
      <br>
      <div class="neirong" v-html="GnNewsdetails.content">{{GnNewsdetails.content}}</div>

    </div>
</template>

<script>

    export default {
        name: "GnNews",
        data(){
          return{
            GnNewsdetails:[]
          }
        },
        methods:{
            GnNewsdetail(newsDetailsAid){
              var api = 'http://www.phonegap100.com/appapi.php?a=getPortalArticle&aid='+newsDetailsAid

              this.$http.get(api).then(function (response) {
                console.log(response);
                this.GnNewsdetails=response.body.result[0]
                // this.GnNewsdetails = response

              },function (err) {
                console.log(err)
              })
            }
        },
        mounted() {
          var newsDetailsAid = this.$route.params.hhh;
          // console.log(newsDetailsAid+'哈哈哈哈好')
          this.GnNewsdetail(newsDetailsAid);

        }
    }
</script>

<style scoped>
.neirong{
  line-height: 30px;
  color: red;
}
</style>
