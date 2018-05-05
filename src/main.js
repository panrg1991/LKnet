// The Vue build version to load with the `import` command
import Vue from 'vue'
import App from './App'
import router from './router'
import $ from 'jquery'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@/assets/css/font-awesome.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'


//highcharts的引入
import Highcharts from 'highcharts';
import axios from 'axios'
 


Vue.config.productionTip = false

Vue.use(Highcharts)

/* eslint-disable no-new */
var vm= new Vue({
  el: '#app',
  render: h => h(App),
  router,
  template: '<App/>',
  methods:{
    moreChart() {
        var options = this.getMoreOptions(this.type);
        if (this.chart) {
            this.chart.destroy();
        };
    // 初始化 Highcharts 图表
    this.chart = new Highcharts.Chart('highcharts-more', options);
    }
  },
   mounted: function () {
     
    }
})
