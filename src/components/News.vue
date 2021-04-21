<template>
    <div>
      <h1>{{newsMsg}}</h1>
      <!--<v-gnNews></v-gnNews>-->
      <ul>
        <li v-for="(gnNew,gnNewkey) in GnNewsList">
          <router-link :to="'/gnnews/'+gnNew.aid">
            {{gnNewkey}}..{{gnNew.title}}
          </router-link>
          <br>
        </li>
      </ul>
    </div>
</template>

<script>
  // import GnNews from "./GnNews.vue"

    export default {
        name: "News",
        data(){
          return{
            newsMsg:'我是News组件的内容',
            GnNewsList:[],
          }
        },
       methods:{
          GnNewsBt(){
              var GnNewsUrl='http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=1';
              this.$http.get(GnNewsUrl).then(function (response) {
                // console.log(response.body);
                this.GnNewsList=response.body.result;
                // console.log(this.GnNewsList);
              },function (err) {
                console.log(err)
              })
            }
       },
        mounted() {
          this.GnNewsBt();
        }
        // components:{
        //   'v-gnNews':GnNews
        // }
    }
</script>

<style scoped>
ul li{
  line-height: 30px;
}
</style>
