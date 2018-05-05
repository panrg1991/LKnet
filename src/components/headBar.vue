<template>
  <div>
   <nav id="navBa" class="navbar navbar-inverse navbar-fixed-top title" >
    <div class="container-fluid">
        <div v-show="isPhone" class="logoPhone">
                <img @click="reload"  src="assets/images/LK%20Logo1.png" alt="">
        </div>
        <div  class="navbar-header menuBtn pull-right">
            <button type="button" class="navbar-toggle"  id="Btn" aria-expanded="false" @click="toggleDiv"   aria-controls="navbar">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
        </div>
        <div id="navbar" class="navbar-collapse">
            <ul class="nav navbar-nav navbar-left" id="link">
              <li   @click="active(item)" :class="{active:inss==item.path}" v-for="(item,index) in navLists"  class="text-center "><router-link  :to="item.path">{{item.text}}</router-link></li>
            </ul>
            <div v-show="isMac"  class="logo">
                    <img class="logoImg" @click="reload" src="assets/images/LK%20Logo1.png" alt="">
            </div>
        </div>
    </div>
</nav>
    </div>
</template>
<script>
import router from '../router'

  export default {
    name: 'HeadBar',
    data() {
      return {
        navLists:[
                    {
                        text:"所有机台",
                        path :"All",
                        num:0                   
                    },
                    {
                        text:"用户管理",
                        path:"User"                     
                    },
                    {
                        text:"班次管理",
                        path:"Shift"                        
                    },
                    {
                        text:"机台管理",
                        path:"Machine"                     
                    }
                ],
                inss:0,
                screenWidth: document.body.clientWidth,
                isPhone:false,
                isMac:false,
             
      };
    },
    methods: {
     active:function(item){
      this.inss=item.path;
      },
      //点击切换导航
      toggleDiv:function(){
        $('#navbar').slideToggle();
      },
      reload:function() {
        router.replace({
          path: 'All',
        })
        this.inss=this.$router.history.current.name;
     },
     changeImg:function(){
      this.inss=this.$router.history.current.name;
       const that = this;
        that.screenWidth = document.body.clientWidth
        if(that.screenWidth <780){
       that.isPhone=true;
       that.isMac=false;

     }
     else{
       that.isPhone=false;
       that.isMac=true;
     }
    }   
    },
    watch:{
    '$route' (to,from){
     this.inss=to.name;
    // console.log(this.screenWidth);
     //屏幕小于780时点击选项可收
     if(this.screenWidth <780){
       $('#navbar').slideUp();
     }
    }
   

  },
   mounted() {
    this.changeImg();
   }
  }
</script>


<style scoped>

 .logo{
    float: right;
    margin-right: 10%;
    cursor: pointer;
  }
 .logoImg{
    margin: 2px;
    max-width: 119px;
    max-height: 46px;
 } 
 #link > li > a{
  font-size: 1.5rem;
   padding: 15px 30px;
 }
.navbar-inverse .navbar-nav>.active>a, .navbar-inverse .navbar-nav>.active>a:hover, .navbar-inverse .navbar-nav>.active>a:focus {
   color: #fff;
   background-color: #DE062F;
   
} 
.logoPhone{
  display: inline-block;
}
.logoPhone img{
    /*margin: 2px;*/
    margin: 0.2em 0.2em 0.2em -15em;
    max-width: 119px;
    max-height: 46px;
}
.menuBtn{
  /*float: right;*/
}
.navbar-collapse{
  display: block;
}
@media screen and (max-width: 780px) {
  .navbar-collapse{
  display: none;
}
}
  
</style>
