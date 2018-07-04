<template>
	<div class="pay-chooser">
		<ul>
			<li v-for="(item, index) in pays" :key="index" 
			:class="{active: index === nowIndex}" @click="chooseMe(index)">
				<img :src="item.src" :alt="item.name">
			</li>
		</ul>
	</div>
</template>

<script>
	export default{
		name:'paychoose',
		data(){
			return{
				nowIndex:0,
				pays:[
				   {
				   	name:'支付宝',
				   	value:0,
				   	src:require('../../assets/images/alipay.png')
				   },
				   {
				   	name:'微信',
				   	value:1,
				   	src:require('../../assets/images/wechat.png')
				   }
				]
			}
		},
		methods:{
			chooseMe(index){
				this.nowIndex = index
				this.$emit('on-change',this.pays[index].value)
			}
		}
	}
</script>

<style scoped>
	.pay-chooser li{
		display: inline-block;
		margin: 10px;
		padding-top: 5px;
		border:1px solid #e3e3e3;
	}
	.pay-chooser li img{
		width:120px;
		height: 26px;
	}
	.pay-chooser .active{
		border-color: #04BB7F
	}
</style>