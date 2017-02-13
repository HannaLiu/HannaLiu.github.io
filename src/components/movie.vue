<template>
	<div id="movie">
		<ul class="movieList">
			<li v-for="(movie,index) in movies">
				<img v-bind:src="movie.images.small" />
				<p class="title">{{movie.title}}</p>
				<input type="button" value="加入清单" @click="addtolist(index)" v-if="!movie.existlist" />
				<input type="button" value="移出清单" @click="deletelist(index)" v-else="movie.existlist" />
			</li>
		</ul>
	</div>
</template>

<script>
	import storemovie from '../data/storemovie'
	import storelist from '../data/storelist'
	import store from '../store/store-global'
	import findel from '../modules/findElem'
	export default {
		name: 'movie',
		data() {
			return {
				title: "",
				movies: storemovie.fetch(),
				lists: storelist.fetch(),
				items: []
			};
		},
		watch: {
			lists: {
				handler: function(lists) {
					storelist.save(lists)
				},
				deep: true
			}
		},
		mounted: function() {
			console.log("电影页：当前是否已登录:" + (store.state.isLogin ? " 是 " : " 否 ") + " ,当前id为 " + store.state.cid)

			this.$http.jsonp('https://api.douban.com/v2/movie/top250?count=10').then(function(response) {
				this.movies = response.data.subjects
				storemovie.save(this.movies)
			}, function(response) {
				console.log(response)
			})		
		},
		methods: {
			addtolist: function(index) {
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
				var existlist = findel.findElem(currlist, "plan", this.movies[index].title);	
				if(existlist!=-1){
					alert("已结在列表中")
					return
				}
				this.lists.push({
					id: store.state.cid,
					plan: this.movies[index].title,
					isfinished: false
				})
				alert("添加成功")
			},
			deletelist: function() {

			}
		}
	}
</script>

<style scoped>
	li {
		display: inline-block;
		border: 1px solid #ccc;
		width: 100px;
		padding: 15px 10px;
		text-align: center;
		margin: 20px;
	}
	
	.title {
		white-space: nowrap;
		text-overflow: ellipsis;
		overflow: hidden;
	}
</style>