<template>
	<div class="container">
		   <h4>用户列表</h4>
    <button class="addUser pull-right" @click="addUser">增加用户</button>
    <div id="aler" class="table-responsive">
        <table class="table table-bordered table-hover table-striped">
            <tr>
                <th>用户账号</th>
                <th>用户密码</th>
                <th style="display: none">用户ID</th>
                <th>用户姓名</th>
                <th>用户权限</th>
                <th>所在部门</th>
                <th>操作</th>
            </tr>
            <tr v-for="x in userList">
                <td>{{x.username}}</td>
                <td>{{x.password}}</td>
                <td style="display: none">{{x.id}}</td>
                <td>{{x.Users}}</td>
                <td>{{x.access}}</td>
                <td>{{x.Department}}</td>
                <td>
                    <span class="xiugai" @click="xiuUser">修改</span>
                    <span class="shanchu" @click="delUser">删除</span>
                </td>
            </tr>
        </table>
      </div>
	</div>
	
</template>
<script>
import axios from 'axios'
export default {
  name: 'User',
  data () {
    return {
     userList:{}
    }
  },
  methods:{
  	load:function(){
      var self = this
  		axios.get('/lknetphp/user.php').then(function (res) {   
                    console.log(res.data.data);                 
                    self.userList=res.data.data;
                    console.log(self.userList)
                }).catch(function (err){
                    console.log('err')
                });
  	},
    addUser:function(){
      alert(0)
    },
    xiuUser:function(){
      alert(1)
    },
    delUser:function(){
      alert(2)
    }

  },
  mounted(){
    this.load();
  }
}
</script>
