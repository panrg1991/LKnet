<template>
	<div>
		<h1>用户管理</h1>
		<button @click="requestMsg" type="success">点击发送请求</button>
	</div>
	
</template>
<script>
import axios from 'axios'
export default {
  name: 'User',
  data () {
    return {
    
    }
  },
  methods:{
  	requestMsg:function(){
  		// alert(0)
  		axios.get('/lknetphp/test.json').then(function (res) {
                    
                    console.log(res.data.name);
                }).catch(function (err){
                    console.log('err')
                });
  	}
  }
}
</script>
