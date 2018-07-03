<template>
	<div class="chooser-wrap">
		<ul class="chooser-list">
			<li v-for="(item, index) in selections" 
			:class="{active: index === nowIndex}" 
			@click="chooseMe(index)">
				{{ item.label }}
			</li>
		</ul>
	</div>
</template>

<script>
	export default{
		name:'chooser',
		props:{
			selections:{
				type:Array,
				default:[{
					label:'test',
					value:0
				}]
			}
		},
		data(){
			return{
				nowIndex:0
			}
		},
		methods:{
			chooseMe(index){
				this.nowIndex = index
				this.$emit('product-type',index)
			}
		}
	}
</script>

<style scoped>
	.chooser-list li{
		float: left;
		padding:5px 15px;
		border:1px solid #e4e4e4;
		background: #fff;
		cursor: pointer;
		margin-left: 10px;
	}
	.chooser-list li:first-child{
		margin-left: 0
	}
	.chooser-list li:hover{
		background: #04BB7F;
		color: #fff;
	}
	.chooser-list .active{
		background: #04BB7F;
		color: #fff;
	}
</style>