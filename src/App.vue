<template>
  <div id="app">
   <header>
     <headBar></headBar>
   </header>
  <main>
      <router-view ></router-view>
  </main>
  <footer v-show='isShow'>
    <footBar></footBar>
  </footer>
    </div>
</template>

<script>

import axios from 'axios'
import router from './router'
import HeadBar from '@/components/headBar'
import FootBar from '@/components/footBar'
  export default {
    name: 'App',
    data() {
      return {
        isShow:true,
        machineId:1
      }
    },
    methods: {
      
      
     
    },
    watch:{
    '$route' (to,from){
      if(to.name == 'User' || to.name == 'Shift' || to.name == 'All' ||to.name == 'Machine'){
        this.isShow=false;
      }else{
        this.isShow=true;
      }
   
    }
  },
     components:{
      "headBar":HeadBar,
      "footBar":FootBar
     },
   mounted:function(){
    var nameState=this.$router.history.current.name; 
    if(nameState == 'User' || nameState == 'Shift' || nameState=='All' ||  nameState=='Machine'){
       this.isShow=false;
    }else{
       this.isShow=true;
    }
   }  
  }
</script>


<style >

body{

  margin: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
main{
  margin-top:60px;
}
footer{
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
 /* min-height: 50px;*/
}     
</style>
