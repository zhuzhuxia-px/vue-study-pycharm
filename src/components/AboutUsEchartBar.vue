<template>
    <div>
      <br>
      采用双向数据绑定实时画图
      <br>
      <!--<button @click="showdata">显示option里的数据</button>-->
      <!--<button @click="showcharts">点击生成图表</button>-->
      <br>
      <ul>
        <li v-for="(i,ikey) in option.xAxis.data">
          <div class="cpname">{{option.xAxis.data[ikey]}}</div>
          <div class="zwf">:</div>
          <input type="text" class="inputsl" v-model="option.series[0].data[ikey]" v-on:input="changedata">
        </li>
      </ul>
      <div id="charts1">

      </div>

    </div>
</template>

<script>
    export default {
        name: "echart",
        data(){
          return{
            msgs:'哈哈哈',
            option :{
              title: {
                text: '实时更改数据'
              },
              tooltip: {},
              legend: {
                data:['销量']
              },
              xAxis: {
                data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
              },
              yAxis: {},
              series: [{
                name: '销量',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20]
              }]
            }
          }
        },
        methods:{
          myEcharts(){
            // 基于准备好的dom，初始化echarts实例
            var myChart = this.$echarts.init(document.getElementById('charts1'));

            // 指定图表的配置项和数据
            // var option = {
            //   title: {
            //     text: 'ECharts 入门示例'
            //   },
            //   tooltip: {},
            //   legend: {
            //     data:['销量']
            //   },
            //   xAxis: {
            //     data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
            //   },
            //   yAxis: {},
            //   series: [{
            //     name: '销量',
            //     type: 'bar',
            //     data: [5, 20, 36, 10, 10, 20]
            //   }]
            // };

            // 使用刚指定的配置项和数据显示图表。
            myChart.setOption(this.option);
            },
          showdata(){
            alert(this.option.title.text)
          },
          // showcharts(){
          //   this.myEcharts()
          // },
          changedata(){
            this.myEcharts()

          }
        },
          mounted() {
           // setInterval(function(){this.myEcharts()},3000);
           // setInterval(function(){alert("Hello")},3000);
            this.myEcharts()
          },

    }
</script>

<style scoped>
#charts1{
  margin: 0 auto;
  margin-top: 15px;
  width: 400px;
  height: 300px;
  background: skyblue;
}
.cpname{
  width: 100px;
  display: inline-block;
  text-align-last: justify;
  /*text-align: justify;*/
}
  .zwf{
    display: inline-block;
    text-align: center;
    width: 30px;
  }
  .inputsl{
    /*输入框字间距*/
    /*letter-spacing:10px;*/
    padding-left: 10px;
    background-color: pink;
  }
</style>
