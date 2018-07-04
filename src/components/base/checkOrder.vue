<template>
	<div class="checkorder">
		<this-dialog :is-show="isShowCheckDialog" @on-close="checkStatus">
			请检查你的支付状态！
			<div class="button" @click="checkStatus">
				支付成功
			</div>
			<div class="button" @click="checkStatus">
				支付失败
			</div>
		</this-dialog>
		<this-dialog :is-show="isShowSuccessDialog" @on-close="toOrderList">
			购买成功！
		</this-dialog>
		<this-dialog :is-show="isShowFailDialog" @on-close="dialogClose('isShowFailDialog')">
			购买失败！
		</this-dialog>
	</div>
</template>

<script>
    import ThisDialog from './vueDialog'

	export default{
		name:'checkorder',
		props:{
			isShowCheckDialog:{
				type:Boolean,
				default:false
			},
			currentOrder:{

			}
		},
		components:{
			ThisDialog
		},
		data(){
			return{
				isShowSuccessDialog:false,
				isShowFailDialog:false
			}
		},
		methods:{
			checkStatus(){
				this.$http.post('/api/checkOrder',this.currentOrder)
				.then((res)=>{
				    this.$emit('close-checkdialog')
					if(res.data.status == "ok"){
						this.isShowSuccessDialog = true
					}else{
						this.isShowFailDialog = true
					}
				})
			},
			dialogClose(attr){
				this[attr] = false
			},
			toOrderList(){
				this.$router.push({path:'/orderList'})
			}
		}
	}
</script>

<style scoped>
	.button{
		display: inline-block;
		padding: 5px 10px;
		background: #04BB7F;
		color: #fff;
		cursor: pointer;
	}
	.button:last-child{
		background: red
	}
</style>