<template>
	<div class="chooser-wrap">
		<ul class="chooser-list">
			<li v-for="(item, index) in selections" 
			:class="{active: !checkActive(index)}" 
			@click="chooseMe(index)">
				{{ item.label }}
			</li>
		</ul>
	</div>
</template>

<script>
 import _ from 'loadsh'
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
				nowIndexs:[0]
			}
		},
		methods:{
			chooseMe(index){
				if(this.nowIndexs.indexOf(index) === -1){
					this.nowIndexs.push(index)
				}else{
					this.nowIndexs = _.remove(this.nowIndexs,(idx)=>{
						return idx !== index
					})
				}
			    let nowObjectArray = _.map(this.nowIndexs,(idx)=>{
			       return this.selections[idx]
			    })
				this.$emit('on-change',nowObjectArray)
			},
			checkActive(index){
				return this.nowIndexs.indexOf(index) === -1
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