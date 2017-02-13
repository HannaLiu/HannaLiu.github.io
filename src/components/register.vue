<template>
	<div id="register">
		<div>
			<input type="text" id="name" placeholder="请输入您的用户名" v-model="newName" v-on:focus="clearMsg" @keyup.13="addUser"/>
			<input type="password" id="pwd" placeholder="请输入您的密码" v-model="newPwd" v-on:focus="clearMsg" @keyup.13="addUser"/>
			<input type="password" id="checkpwd" placeholder="请确认您的密码" ref="checkPwd" v-on:focus="clearMsg" @keyup.13="addUser"/>
			<span class="message" ref="msg">{{msg}}</span>
			<input type="button" name="" id="" value="注册" @click="addUser"/>
		</div>
	</div>
</template>

<script>
	import storeuser from '../data/storeuser'
	import md5 from 'md5'
	import findel from '../modules/findElem'
	
	export default {
		name: 'register',
		data() {
			return {
				newName: "",
				newPwd: "",
				msg:"",				
				id:"",
				users: storeuser.fetch()
			};
		},
		watch: {
			users: {
				handler: function(users) {
					storeuser.save(users)
				},
				deep: true				
			}
		},
		methods: {			
			addUser: function() {						    			
				if(this.newName.trim() == "") {
					this.msg="请输入用户名"
					return;
				}			
				var exist=findel.findElem(this.users,"name",this.newName);
				if(exist != -1) {
					this.msg="该用户名已被注册"
					return;
				}	
				if(this.newPwd.trim() == "") {
					this.msg="请输入密码"
					return;
				}
				if(this.$refs.checkPwd.value.trim() == "") {
					this.msg="请确认密码"
					return;
				}
				if(this.newPwd !== this.$refs.checkPwd.value){
					this.msg="两次密码不一致"
					return;
				}
				this.id="vl_" + new Date().getTime()+ Math.floor(Math.random()*100)
				this.users.push({
					id: this.id,
					name: this.newName,
					pwd: md5(this.newPwd),
				})
				alert("注册成功")
				this.newName = ""
				this.newPwd = ""
				this.$refs.checkPwd.value=""				
			},
			clearMsg:function(){
				this.msg=""
			}
		}
		
	}
</script>

<style scoped>
	
</style>