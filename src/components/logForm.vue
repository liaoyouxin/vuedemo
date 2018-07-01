<template>
	<div class="log-form">
		<div class="g-form">
			<div class="g-form-line">
				<span class="g-form-label">账号 ： </span>
			    <input class="g-form-input" 
			           v-model="username"
			           placeholder="请输入用户名" >
			    <span class="error">{{userErrors.errorText}}</span>
			</div>
			<div class="g-form-line">
				<span class="g-form-label">密码 ： </span>
			    <input class="g-form-input" 
			           v-model="password"
			           placeholder="请输入密码" >
			    <span class="error">{{passwordErrors.errorText}}</span>
			</div>
			
		</div>
		<div class="g-form-line">
			<button @click="onLogin">登录</button>
		</div>
		<span v-if="errorText">部分选项未通过</span>
	</div>
</template>

<script type="text/javascript">
	export default{
		name:'logform',
		data(){
			return{
				username:'',
				password:'',
				errorText:false,
				userFlag:false,
				pwdFlag:false
			}
		},
		computed:{
			userErrors(){
				let status,errorText
				if(!/@/g.test(this.username)){
					status = false
					errorText = '不包含@'
				}else{
					status = true
					errorText = ''
				}
				if(!this.userFlag){
					errorText=''
					this.userFlag=true
				}
				return{
					status,
					errorText
				}
			},
			passwordErrors(){
				let status,errorText
				if(!/^\w{1,6}$/g.test(this.password)){
					status = false
					errorText = "密码长度1到6位"
				}else{
					status = true
					errorText
				}
				if(!this.pwdFlag){
					errorText=''
					this.pwdFlag=true
				}
				return{
					status,
					errorText
				}
			}
		},
		methods:{
			onLogin () {
				if(this.userErrors.status || this.passwordErrors.status){
					this.errorText=false
					this.$http.get('api/login')
					 .then((res)=>{
					 	this.$emit('has-login',res.data)
					 },(err)=>{
					 	console.log(err)
					 })

				}else{
					this.errorText=true
				}
			}
		}
	}
</script>

<style scoped>
	.g-form-line{
		margin:10px;
	}
	.error{
		color:red
	}
	
</style>