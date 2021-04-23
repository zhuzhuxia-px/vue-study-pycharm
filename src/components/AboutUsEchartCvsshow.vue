<template>
  <div class="cvsall">
    <div class="cvsdetail">
      <!--输入框选择开始展示数据的起点 v-model双向数据绑定-->
      <input type="number" value="平均" min="1" v-model="msgid">
      <!--点击触发图表更新显示-->
      <button @click="redandwirtedate">查看数据图表</button>
      <li v-for="i in idlist">
        {{chartcvsmsg[i]}}:{{chartcvsmsg[msgid*21+i]}}
      </li>

    </div>
    <!--画图的盒子-->
    <div class="showcvs" id="showcvs">

    </div>
    <!--{{chartcvsmsg}}-->

  </div>
</template>

<script>
  // import a from '../../static/chartssjcvs/20210414-1.csv'
  export default {
    name: "AboutUsEchartCvsshow",
    data() {
      return {
        //自定空字符串准备接受数据
        chartsstr: '',
        //自定空列表准备接受数据
        chartcvsmsg: [],
        msgid: 1,
        // 数据21条为一组，写个数组方便找值
        idlist: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
        //自定时间列表，将会向echarts的option内X轴传值
        timedata: [],
        //自定数据列表，将会向echarts的option内Y轴传数据折线图1
        batterydata: [],
        //自定数据列表，将会向echarts的option内Y轴传数据折线图2
        sunbatterydata: [],
        winspeeddata:[],
        waterspeeddata:[],
        option: {
          color:['#33FF00','#FFFF00','#EEFCFF','#005FEE'],
          title: {
            //表格标题
            text: 'cvs表给的数据'
          },
          tooltip: {trigger: 'axis'},
          //表正上方解释图中线条形状对应的名称
          legend: {
            data: ['电池电压', '太阳能电压','风速','水流速度'],
            top:'6%'
          },
          //X轴上的数据
          xAxis: {
            data: []
          },
          yAxis: {},
          //图中点对应Y轴上的值，series[0]对应第一条折线图，series[1]对应第二条折线图
          series: [
            {
              name: '电池电压',
              type: 'line',
              data: []
            },
            {
              name: '太阳能电压',
              type: 'line',
              data: []
            },
            {
              name: '风速',
              type: 'line',
              data: []
            },
            {
              name: '水流速度',
              type: 'line',
              data: []
            }

          ]
        }
      }
    },
    methods: {
      getchartscvs() {
        // console.log('我准备执行' );
        //获取cvs文件地址，得到res内容
        this.$http.get('../../static/chartssjcvs/20210414-1.csv').then((res) => {
          // 替换cvs文件中的换行符
          this.chartsstr = res.body.replace(/\n/g, ',');
          //字符串文件已，分隔并转为数组
          this.chartcvsmsg = this.chartsstr.split(',')
        }, function (err) {
          console.log(err);
        })
      },
      //读CVS内数据，传向echarts中的option
      redandwirtedate() {
        //先清空数据，避免二次请求直接在后面加数据出现重复数据
        this.timedata = [];
        this.batterydata = [];
        this.sunbatterydata = [];
        this.winspeeddata=[];
        this.waterspeeddata=[];

        //push30条时间数据到x轴
        for (var itiao = 1; itiao < 30; itiao++) {
          this.timedata.push(this.chartcvsmsg[4 + (this.msgid - 1) * 21 + itiao * 21])
        }
        // console.log(this.timedata);
        //时间数据传入echarts的option的X轴,并反转数组右侧为最大值
        this.option.xAxis.data = this.timedata.reverse();
        // console.log(this.chartcvsmsg[this.msgid]);

        //传入电池电压数据
        for (var etiao = 1; etiao < 30; etiao++) {
          this.batterydata.push(this.chartcvsmsg[10 + (this.msgid - 1) * 21 + etiao * 21])
        }
        //电池数据传入echarts的option的对应点Y值,并反转数组右侧为最大值
        this.option.series[0].data = this.batterydata.reverse();

        //传入太阳能电池电压数据
        for (var setiao = 1; setiao < 30; setiao++) {
          this.sunbatterydata.push(this.chartcvsmsg[13 + (this.msgid - 1) * 21 + setiao * 21])
        }
        //太阳能电池数据传入echarts的option的对应点Y值,并反转数组右侧为最大值
        this.option.series[1].data = this.sunbatterydata.reverse();

        //风速数据传入echarts的option的对应点Y值,并反转数组右侧为最大值
        for (var wstiao = 1; wstiao < 30; wstiao++) {
          this.winspeeddata.push(this.chartcvsmsg[16 + (this.msgid - 1) * 21 + wstiao * 21])
        }
        //风速数据传入echarts的option的对应点Y值,并反转数组右侧为最大值
        this.option.series[2].data = this.winspeeddata.reverse();

        //水流速度数据传入echarts的option的对应点Y值,并反转数组右侧为最大值
        for (var wastiao = 1; wastiao < 30; wastiao++) {
          this.waterspeeddata.push(this.chartcvsmsg[19 + (this.msgid - 1) * 21 + wastiao * 21])
        }
        //水流速度数据传入echarts的option的对应点Y值,并反转数组右侧为最大值
        this.option.series[3].data = this.waterspeeddata.reverse();


        this.myEcharts1()
      },

      myEcharts1() {
        // 基于准备好的dom，初始化echarts实例
        var myChart1 = this.$echarts.init(document.getElementById('showcvs'));
        // 使用刚指定的配置项和数据显示图表。
        myChart1.setOption(this.option);

      },
    },
    mounted() {
      this.getchartscvs()
    }
  }
</script>

<style scoped>
  .cvsall {
    width: 800px;
    display: flex;
  }

  .cvsdetail {
    /*height:300px;*/
    width: 300px;
    background-color: deepskyblue;
    float: left;
  }
  input{
    margin-left: 20px;
    padding-left: 10px;
    margin-top: 10px;
  }
  button{
    margin-top: 10px;
    border-radius: 20px;
    /*border: none;*/
    outline: none;
  }
  li {
    padding-left: 20px;
    margin-bottom: 10px;
    font-size: 10px;
  }
  .showcvs {
    /*height:100%;*/
    /*height:300px;*/
    /*display: flex;*/
    width: 500px;
    background-color: skyblue;
    float: right;
  }
</style>
