<template>
	<div class="container">
		<div id="navBa" class="navbar navbar-inverse navbar-fixed-bottom  footBarNav ">
      <div class="ulFather">
        <ul class="nav navbar-nav nav-tabs " id="link">
                <li  @click="active(item)" :class="{active:inss==item.path}" v-for="(item,index) in footNavLists"  class="text-center">
                  <router-link  :to="item.path">{{item.text}}</router-link>
                </li>                
            </ul>
      </div>
			
		</div>
	</div>
	
</template>
<script>
	export default {
  name: 'FootBar',
  data () {
    return {
    	   footNavLists:[
                    {
                        text:"机台状态",
                        path :"State",           
                    },
                    {
                        text:"生产计划",
                        path:"Plan",                
                    },
                    {
                        text:"生产统计",
                        path:"Count",                  
                    },
                    {
                        text:"生产记录",
                        path:"Record",              
                    },
                    {
                        text:"模具管理",
                        path:"Mould",                
                    },
                    {
                        text:"报警记录",
                        path:"warning",                  
                    }
                ],
                inss:0

    }
  },
  methods:{
  	active:function(item){
      // console.log(item.path);
     this.inss=item.path
      }
  },
  watch:{
    '$route' (to,from){
     this.inss=to.name;
    }
  },
  created (){
    
  },
  mounted: function () {
  this.inss=this.$router.history.current.name;
}
}
</script>
<style scoped>
	.footBarNav{
		border: 0;
	}
.footBarNav .nav {
    padding: 0 1.1rem;
}
.footBarNav .nav > li > a {
    padding: 1.28rem 3.8rem;
    font-size: 1.5rem;
}
.ulFather{
    width: 70%;
    margin: 0 auto;
}
.navbar{
  min-height: 40px;
}
.nav-tabs,.nav-tabs>li>a {
  border: 0;
  border-radius:0;
}
.nav-tabs>li.active>a, .nav-tabs>li.active>a:hover, .nav-tabs>li.active>a:focus{
  border: 0;
}
.navbar-inverse .navbar-nav>.active>a{
    color: #fff;
   background-color: #DE062F;
}
@media screen and (max-width: 780px) {
    .footBarNav .nav > li > a {
    padding:0.9375rem 0.435rem;
    font-size: 1.3rem;
    }
    .ulFather{
    width: 100%;
    }
    .nav-tabs{
      border: 0
    }
    .navbar-nav {
     margin: 0 0; 
    }
    .footBarNav .nav {
    padding: 0 0
    }
    .nav-tabs>li>a{
    margin-right: 0;
    }
   
}
@media screen and (width: 414px){
  .ulFather{
    margin-left: 5%;
    }
}
</style>