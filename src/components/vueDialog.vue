<template>
	<div>
		<div class="dialog-wrap" v-if="isShow">
			<div class="dialog-cover" v-if="isShow" @click="closeMyself"></div>
			<div class="dialog-content" v-if="isShow">
				<p class="dialog-close" @click="closeMyself">x</p>
				<slot>empty</slot>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name:'vueDialog',
		props:{
			isShow:{
				type:Boolean,
				default:false
			}
		},
		data(){
			return {

			}
		},
		methods:{
			closeMyself(){
				this.$emit('on-close')
			}
		}
	}
</script>

<style scoped> 
  .dialog-wrap{
  	position:fixed;
  	width:100%;
  	height:100%;
  }
  .dialog-cover{
  	background:#000;
  	opacity:.3;
  	position:fixed;
    z-index:5;
    top:0;
    left:0;
    width:100%;
    height:100%;
  }
  .dialog-content{
     width:50%;
     position:fixed;
     top:20%;
     left:50%;
     margin-left:-25%;
     background:#fff;
     z-index:10;
     border:2px solid #464068;
     padding:2%;
     line-height:1.6;
     overflow:auto;
  }
  .dialog-close{
  	position:absolute;
  	right:10px;
  	top:5px;

  }
</style>	