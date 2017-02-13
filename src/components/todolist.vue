<template>
	<div id="todolist">
		<div id="tasks">
			<p v-bind:id="id"></p>
			<div id="list-toolbar">
				<h1 class="title">待完成</h1>
			</div>
			<div id="tasks-scroll">
				<div class="addTask">
					<span><i class="fa fa-plus"></i></span><input type="text" v-model="newItem" @keyup.13="addItem" />
				</div>
				<div class="task-list">
					<ul>
						<li v-for="item in items" :class="{finished:item.isfinished}" v-if="!item.isfinished" @dbclick="">
							<label><input type="checkbox" @click="toggleFinished" v-model="item.isfinished"/></label>
							<span>{{item.plan}}</span>
						</li>
					</ul>
				</div>
				<div class="task-list inbox">
					<a @click="toggleFinishedList" class="showBtn">显示已完成任务</a>
					<transition name="fade" v-if="showFinishedList">
						<ul>
							<li>
								<p v-if="showDefault()">暂无完成任务</p>
							</li>
							<li v-for="item in items" :class="{finished:item.isfinished}" v-if="item.isfinished"><label><input type="checkbox" @click="toggleFinished" v-model="item.isfinished"/></label> {{item.plan}}
							</li>
						</ul>
					</transition>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import storelist from '../data/storelist'
	import findel from '../modules/findElem'
	import store from '../store/store-global'
	export default {
		name: 'todolist',
		data() {
			return {
				allitems: storelist.fetch(),
				newItem: "",
				name: "",
				id: "",
				showFinishedList: false,
				isActive: false,
				items: []
			};
		},
		watch: {
			allitems: {
				handler: function(allitems) {
					storelist.save(allitems)
				},
				deep: true
			}
		},
		mounted: function() {
			this.allitems.forEach(
				(item) => {
					if(item.id == store.state.cid) {
						this.items.push(item);
					}
				}
			);
			console.log("清单：当前是否已登录:" + (store.state.isLogin ? " 是 " : " 否 ") + " ,当前id为 " + store.state.cid)

		},
		methods: {
			toggleFinished: function(item) {
				item.isfinished = !item.isfinished
			},
			toggleFinishedList: function() {
				this.showFinishedList = !this.showFinishedList
			},
			showDefault: function() {
				var len = findel.findElem(this.items, "isfinished", true);
				if(len < 0) {
					return true;
				} else {
					return false;
				}
			},
			addItem: function() {
				if(this.newItem.trim() == "") {
					return;
				}
				if(!store.state.cid) {
					alert("请先登录") //此处为显示登录框
					return
				}
				this.allitems.push({
					id: store.state.cid,
					plan: this.newItem,
					isfinished: false
				})
				this.newItem = ""
			}
		}
	}
</script>

<style scoped>
	@import '../assets/css/font-awesome/font-awesome.min.css';
	@import '../assets/css/bootstrap.min.css';
	@import "../assets/css/main.css";
	.fade-enter-active,
	.fade-leave-active {
		transition: opacity .5s
	}
	
	.fade-enter,
	.fade-leave-active {
		opacity: 0
	}
	
	.task-list li {
		word-break: break-all;
	}
	
	.active {
		background: green;
	}
</style>