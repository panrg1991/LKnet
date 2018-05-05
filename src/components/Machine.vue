<template>
	<div class="charts">
            <x-chart :id="id" :option="option"></x-chart>
        </div>
</template>
<script>
 import XChart from './chart.vue'
export default {
  name: 'Machine',
  data () {
     return {
                id: 'bing',
                option: {
                               chart: {
            type:'column'//指定图表的类型，默认是折线图（line）
            },
            credits: {
              enabled:false
            },//去掉地址
            title: {
                text: '我的第一个图表' //指定图表标题
            },
            colors: ['#058DC7', '#50B432', '#ED561B', '#DDDF00',
                    '#24CBE5'  ],
            xAxis: {
                    categories: ['1号', '2号', '3号','3号','3号'] //指定x轴分组
                },
            yAxis: {
                    title: {
                    text: '最近七天', //指定y轴的标题

                },
                },
            plotOptions: {
                    column: {
                    colorByPoint:true
                        },
                    },

            series: [{ //指定数据列
                    name: '小明',
                    data: [{
                        y:7889,
                        color:"red"}, 10000, 9000,10000,6000] //数据
                }]
                }
            }
     },
   components: {
            XChart
        }
        
}
</script>