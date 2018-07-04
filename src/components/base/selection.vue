<template>
	<div class="selection-componet">
		<div :class="[{'selection-show':!color},{'color':color}]" @click="isDrop = !isDrop">
			<span>{{ selections[nowIndex].label }}</span>
			<div class="arrow"></div>
		</div>
		<div :class="[{'selection-list':true},{'selection-list-color':color}]" v-if="isDrop">
			<ul>
				<li v-for="(item, index) in selections"
				    @click="chooseSelection(index)"
				>
					{{ item.label }}
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default{
		name:'selection',
		props:{
			selections:{
				type:Array,
				default:[{
					label:'test',
					value:0
				}]
			},
			color:{
				type:Boolean,
				default:false
			}
		},
		data(){
			return{
				nowIndex:0,
				isDrop:false
			}
		},
		methods:{
			chooseSelection(index){
				this.nowIndex = index
				this.isDrop = false
				this.$emit('on-change',this.selections[this.nowIndex])
			}
		}
	}
</script>

<style scoped> 
    .selection-component{
    	position: relative;
    	display: inline-block;
    }
    .selection-show{
    	padding:0 20px 0 10px;
    	display: inline-block;
    	background: #f1f1f1;
    	border: 1px solid #ccc;
    	border-radius: 3px;
    	position: relative;
    	cursor: pointer;
    	line-height: 25px;
    }
    .color{
    	padding:4px 25px 4px 15px;
    	display: inline-block;
    	background: #fff;
    	border: 1px solid #ccc;
    	border-radius: 3px;
    	position: relative;
    	cursor: pointer;
    	line-height: 25px;
    }
     .arrow{
    	display: inline-block;
    	border-left: 4px solid transparent;
    	border-right: 4px solid transparent;
    	border-top: 5px solid #666;
    	width: 0;
    	height: 0;
    	margin-top: -1px;
    	margin-left: 6px;
    	margin-right: -14px;
    	vertical-align: middle;
    }
	.selection-list{
		display: inline-block;
		position: absolute;
		left: 0;
		top: 25px;
		width: 100%;
		background: #fff;
		border-top: 1px solid #e3e3e3;
		border-bottom: 1px solid #e3e3e3;
		z-index: 5
	}
	.selection-list-color{
		top: 38px;
	}
	.selection-list li{
	  padding: 5px;
	  border-left: 1px solid #e3e3e3;
	  border-right: 1px solid #e3e3e3;
	  cursor: pointer;
	  background: #fff;
	  white-space: nowrap;
	  overflow: hidden;
	  text-overflow: ellipsis;
	}
	.selection-list li:hover{
		background: #e3e3e3
	}
    
</style>