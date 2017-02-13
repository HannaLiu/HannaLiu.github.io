<template>
	<div id="login">
		<div class="mask">
			<input type="text" name="" id="" value="" placeholder="请输入您的名字" v-model="name" v-on:focus="clearMsg" @keyup.13="login" />
			<input type="password" name="" id="" value="" placeholder="请输入您的密码" v-model="pwd" v-on:focus="clearMsg" @keyup.13="login" />
			<span class="message">{{msg}}</span>
			<input type="button" name="" id="" value="登录" @click="login" />
		</div>
	</div>
</template>

<script>
	import storeuser from '../data/storeuser'
	import md5 from 'md5'
	import findel from '../modules/findElem'
	import store from '../store/store-global'
	import storeCurr from '../data/storeusercurr'
	
	export default {
		name: 'todolist',
		data() {
			return {
				name: "",
				pwd: "",
				msg: "",
				cid: "",
				users: storeuser.fetch(),
				user: storeCurr.fetch()
			};
		},
		
		methods: {
			login: function() {
				if(this.name.trim() == "") {
					this.msg = "请输入用户名"
					return;
				}
				if(this.pwd.trim() == "") {
					this.msg = "请输入密码"
					return;
				}
				var exist = findel.findElem(this.users, "name", this.name);
				var existpwd = findel.findElem(this.users, "pwd", md5(this.pwd));
				if(exist !== existpwd) {
					this.msg = "用户名或密码错误"
					return;
				}				
				if(exist == existpwd ) {
					alert("登录成功")
				}
				this.user = []
				this.user.push({
					cid: this.users[exist]["id"],
					islogin: true
				})
				storeCurr.save(this.user)
				store.commit('login');
				console.log("当前是否已登录:" + (store.state.isLogin ? " 是 " : " 否 ") + " ,当前id为 " + store.state.cid)
				this.name = "";
				this.pwd = "";
			},
			clearMsg: function() {
				this.msg = ""
			}
		}
	}
</script>

<style scoped>
	.mask{width: 100%; height: 100%;position: absolute;top: 5%; left: 20%;}
</style>