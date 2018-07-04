<template>
	<div class="order-wrap">
		<div class="order-item" style="margin-left:120px">
			<span class="label">选择产品 : </span>
			<div class="component-div">
				<type-selection :selections="productions"
				@on-change="getProuctionType" :color='true'
				></type-selection>
			</div>
		</div>
		<div class="order-item">
			<span class="label">选择开始日期 : </span>
			<div class="component-div">
				<date-picker v-model="startTime" @change="changeStartTime"></date-picker>
			</div>
		</div>
		<div class="order-item">
			<span class="label">选择结束日期 : </span>
			<div class="component-div">
				<date-picker v-model="endTime" @change="changeEndTime"></date-picker>
			</div>
		</div>
		<div class="order-item">
			<span class="label">关键字 : </span>
			<div class="component-div">
				<input class="query" type="text" v-model.lazy="query" >
			</div>
		</div>
		<div class="orderlist-details">
		 <table class="buy-dialog-table">
      	 	<tr>
      	 		<th>订单号</th>
      	 		<th>产品类型</th>
      	 		<th>购买数量</th>
      	 		<th>产品版本</th>
      	 		<th>有效时间</th>
      	 		<th>订单日期</th>
      	 		<th>总价</th>
      	 	</tr>
      	 	<tr v-for="item in orderLists">
      	 		<td>{{ item.orderId }}</td>
      	 		<td>{{ item.product }}</td>
      	 		<td>{{ item.buyNum }}</td>
      	 		<td>{{ item.version }}</td>
      	 		<td>{{ item.period }}</td>
      	 		<td>{{ item.date }}</td>
      	 		<td>{{ item.amount }}</td>
      	 	</tr>
      	 </table>
		</div>
	</div>
</template>

<script>
  import TypeSelection from '../components/base/selection'
  import DatePicker  from 'vue2-datepicker'
	export default{
		components:{
			TypeSelection,
			DatePicker 
		},
		data(){
			return{
				startTime:'',
				endTime:'',
				query:'',
				productType:0,
				color:'#fff',
				productions:[
				    {
				    	label:'数据统计',
				    	value:0
				    },
				    {
				    	label:'数据预测',
				    	value:1
				    },
				    {
				    	label:'流量分析',
				    	value:2
				    },
				    {
				    	label:'广告发布',
				    	value:3
				    }
				],
				orderLists:[]	
			}
		},
		watch:{
			query(){
				this.$http.post('/api/getOrderList',this.params())
				    .then((res)=>{
				    	this.orderLists = res.data.list
				    },(err)=>{

				    })
			}
		},
		methods:{
			changeStartTime(){
				this.$http.post('/api/getOrderList',this.params())
				    .then((res)=>{
				    	this.orderLists = res.data.list
				    })
			},
			changeEndTime(){
				this.$http.post('/api/getOrderList',this.params())
				    .then((res)=>{
				    	this.orderLists = res.data.list
				    })
			},
			getProuctionType(data){
				this.productType = data.value
				this.$http.post('/api/getOrderList',this.params())
				    .then((res)=>{
				    	this.orderLists = res.data.list
				    })
			},
			params(){
				return {
					productType : this.productType,
					startTime : this.startTime,
					endTime : this.endTime,
					query : this.query
				}
			}
		},
		mounted(){
			this.changeStartTime()
			console.log(this.$store)
		}
	}
</script>

<style>
    .order-wrap{
    	padding-top: 20px;
    }
    .order-item{
    	display: inline-block;
    }
	.label{
		display: inline-block;
		margin:10px;
	}
	.component-div{
		display: inline-block;
		position: relative;
	}
	.calendar{
    border: 2px solid #000;
    border-radius: 0.5em;
    padding: 0.5em;
	}
	.orderlist-details{
		width: 90%;
		margin:30px auto;
	}
   .buy-dialog-table{
    width: 100%;
    margin-bottom: 20px;
   }
   .buy-dialog-table td,
   .buy-dialog-table th{
    border: 1px solid #e3e3e3;
    text-align: center;
    padding:5px 0;
    background: #fff;
    line-height: 30px;
   }
   .buy-dialog-table th{
    background: #4fc08d;
    color: #fff;
    border: 1px solid #4fc08d
   }
   .query{
   	height:30px;
   	border:1px solid #ccc;
   	border-radius: 3px;
   	outline: none;
   	padding-left: 10px;
   }
</style>