import Vue from 'vue';
import Vuex from 'vuex';

import storeCurr from '../data/storeusercurr'

Vue.use(Vuex);

const store = new Vuex.Store({
	state: {
		cid:storeCurr.fetch()==""?"":storeCurr.fetch()[0].cid,
		isLogin:storeCurr.fetch()==""?"":storeCurr.fetch()[0].islogin
	},
	strict:true,
	mutations: {
		login(state) {
			state.cid = storeCurr.fetch()[0].cid,
			state.isLogin = storeCurr.fetch()[0].islogin
		},
		singout(state) {
			state.cid = "",
			state.isLogin = false
		}
	}
})

module.exports = store