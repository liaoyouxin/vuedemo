import Vue from 'vue'

const state = {  //存放数据
	orderList:[],
	params:{}
}

const getters = { 
    getOrderList: state => state.orderList
}

const actions = {
	fetchOrderList({commit,state}){
		Vue.http.post('/api/getOrderList',state.params)
		   .then((res)=>{
		   	commit('updateOrderList',res.data.list)
		   },(err)=>{
		   	console.log(err)
		   })
	}
}

const mutations = {
    updateOrderList (state,orderList){
    	state.orderList = orderList
    },
    updateParams(state,{key,val}){
    	state.params[key] = val
    }
}

export default{
	state,
	getters,
	actions,
	mutations
}