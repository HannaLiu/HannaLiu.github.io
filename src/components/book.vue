<template>
	<div id="book">
		<input type="text" v-model="bookname" @focus="clearMsg"/>
		<span>{{msg}}</span>
		<input type="button" class="btn btn-default" value="查找图书" @click="searchBook"/>
		<ul>
			<li v-for="(book,index) in books">
				<img v-bind:src="book.images.small" />
				<p class="title">{{book.title}}</p>
				<input type="button" value="加入清单" @click="addtolist(index)"/>
			</li>
		</ul>
	</div>
</template>

<script>
	import store from '../store/store-global'
	import storelist from '../data/storelist'
	import storebook from '../data/storebook'
	import storeCurr from '../data/storeusercurr'
	import findel from '../modules/findElem'
	export default {
		name: 'book',
		data() {
			return {
				bookname:"",
				msg:"",
				books:storebook.fetch(),
				lists:storelist.fetch(),
			};
		},
		mounted:function(){
			console.log("书籍页：当前是否已登录:" + (store.state.isLogin ? " 是 " : " 否 ") + " ,当前id为 " + store.state.cid)
		},
		watch:{
			lists: {
				handler: function(lists) {
					storelist.save(lists)
				},
				deep: true
			}
		},
		methods:{
			searchBook:function(){
				if(this.bookname.trim() == "") {
					this.msg="请输入书名关键字"
					return;
				}
				this.$http.jsonp('https://api.douban.com/v2/book/search',
					{
			        params: {
			          q:this.bookname,
			          count:10
			        }
			      }).then(function(response){				
					this.books = response.data.books	
					storebook.save(this.books)
				},function(response){
					console.log(response)
				})
			},
			addtolist:function(index){
				if(!store.state.cid) {
					alert("请先登录") //此处为显示登录框
					return
				}
				var currlist=[]
				this.lists.forEach(
					(list) => {
						if(list.id == store.state.cid) {
							currlist.push(list)	
						}
					}
				);				
				var existlist = findel.findElem(currlist, "plan", this.books[index].title);	
				if(existlist!=-1){
					alert("已结在列表中")
					return
				}
				this.lists.push({
					id: store.state.cid,
					plan: this.books[index].title,
					isfinished: false
				})
				alert("添加成功")
			},
			clearMsg:function(){
				this.msg=""
			}
		}
	}
</script>


<style scoped>

	li{display: inline-block;border: 1px solid #ccc;width:100px;padding:15px 10px;text-align:center;margin: 20px;}
	.title{white-space: nowrap;text-overflow: ellipsis;overflow: hidden;}
</style>