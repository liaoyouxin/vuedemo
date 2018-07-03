<template>
	<div class="counter-wrap">
		<div class="counter-btn" @click="minus"> - </div>
		<div class="counter-show">
		     <input type="text" v-model="number" @keyup="fixNumber">
	    </div>
		<div class="counter-btn" @click="add"> + </div>
	</div>
</template>

<script>
	export default{
		name:'counter',
		props:{
			max:{
				type:Number,
				default:5
			},
			min:{
				type:Number,
				default:1
			}
		},
		data(){
			return{
				number:this.min
			}
		},
		watch:{
			number(){
				this.$emit('on-change',this.number)
			}
		},
		methods:{
			minus(){
				if(this.number <= this.min){
					return
				}
				this.number = this.number-1
			},
			add(){
				if(this.number >= this.max){
					return
				}
				this.number = this.number+1
			},
			fixNumber(){
				let fix
				if(typeof this.number === 'string'){
					fix = Number(this.number.replace(/\D/g,''))
				}else{
					fix = this.number
				}
				if(fix > this.max){
					fix=this.max
				}
				if(fix<this.min){
					fix = this.min
				}
				this.number = fix
			}
		}
	}
</script>

<style>
	.counter-wrap div{
		display: inline-block;
		float: left;
	}
	.counter-btn{
		padding:8px 12px;
		background: #e4e4e4;
		cursor: pointer;
	}
	.counter-show input{
	 text-align: center;
     width: 40px;
     height: 26px;
     outline: none;
     border: 1px solid #e4e4e4;
	}
</style>