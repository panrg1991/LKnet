<template>
	 <div class="container mainDiv">
      <ul class="list-unstyled clearfix">
         <li  v-for="(item,index) in machineData">
            <div  @click="showFootbar" :title="item.Mid" class="col-xs-12  col-sm-6 moudleDiv">
              <div class="S_left">
                   <p class="num">{{item.jtbh}}</p>
                     <img :src="item.src" class='img-responsive '  />
                    <p id='state' :class="item.color">{{item.state}}
                      <i :class="item.icon"></i>
                    </p>
              </div>
              <div class="S_right">
                  <p class='productName'>产品名称：{{item.cpmc}}</p>
                  <p class='plan'>生产计划：{{item.schedule}}</p>
                  <p class='progre' id="progressBar">
                      <span :style="{'width':item.schedule1}"></span>
                  </p>
                  <p class='good'><i class='icon-ok'></i>良品:{{item.good}}&nbsp;&nbsp;<i class='icon-remove'></i>不良品:{{item.bad}}
                  </p>
                  <p class='times'><i class='icon-time'></i>&nbsp;&nbsp;{{item.data_time}} s / 件</p>
                  <p class='duration'>开机时长：{{item.kjsj}} 分钟</p>
                </div>                       
            </div>                    
         </li>                      
      </ul>                
	 </div>
</template>
<script>
	import axios from 'axios'
  import router from '../router'
 


export default {
  name: 'All',
  data() {
    return {
      machineData:{}
    }
  },
  methods:{
      	load:function(){
        		   var self = this
               axios.get('/lknetphp/main.php').then(function (res) {
                  self.machineData=res.data.data;                              	
                            }).catch(function (err){
                                console.log('err')
                            });
                },
        showFootbar:function(){
           router.replace({
           path: 'State',
        })
       }                 
    },
  computed:{
   
            },
  mounted () {
    this.load();
    },
  components:{
       
     }
}
</script>
<style scoped>
  .mainDiv{
    margin-left: 2%;
    width: 93%;
    margin-top: 10%;
    padding-left: 8%;
  }
  .moudleDiv{
    margin-bottom: 7.5rem;
  }
  .moudleDiv>div{
    display: inline-block;
  }
  .moudleDiv>div .num{
    margin: 0 0 0 -1.667rem;
    font-weight: 600;
    font-size: 15px;
  }
  .moudleDiv>div.S_left img{
    vertical-align: middle;
    margin-right: 1.25rem;
  }
  #state{
    color: #fff;
    width: 13.75rem;
  }
  .state1 {
    background: green;
  }

.state2 {
    background: #0A86E5;
  }
.state3 {
    background: orange;
  }

.state4 {
    background: grey;
  }
.state5 {
    background: red;
  }
.moudleDiv>div.S_right{
   width: 13.75rem;
   height: 13.75rem;
   position: relative;
   top:0.25rem;
}
.moudleDiv>div.S_right p{
   padding-left: 0.166rem;
   margin-bottom: 0.416rem;
   text-align: left;
}
.moudleDiv>div.S_right .icon-ok{
  color:green;
}
.moudleDiv>div.S_right .icon-remove{
  color:red;
}
.moudleDiv>div.S_right p.progre{
    background: #959898;
    overflow: hidden;
    height: 1rem;
    padding: 0;
    line-height: 1rem;
    width: 80%;
    border-radius: 12px;
}
.moudleDiv>div.S_right p.progre span{
    height: 12rem;
    display: inline-block;
    background: -webkit-gradient(linear, 0 0, 100% 0, from(#52AA05), to(#7EF705));
}
  /*手机端*/
@media screen and (max-width: 767px){
  .mainDiv {
    padding-left: 0;
    margin-left: 2%;
    width: 100%;
    margin-top: 1%;
  }
  .moudleDiv{
    margin-bottom: 2.083rem;
    border-bottom: 1px solid #eee;
    padding-right:0; 
  }
  .moudleDiv>div.S_left img{
    margin-right: 0.8333rem;
  }
  .moudleDiv>div.S_right{
    width: 12.75rem;
    height: 10rem;
    font-size: 13px;
    margin-bottom: 2.916rem;
  }

}


@media screen and (width: 414px){
  .moudleDiv{
     padding-left: 8%;
  }
}
@media screen and (width: 375px){
  .moudleDiv{
     padding-left: 3%;
  }
}
</style>