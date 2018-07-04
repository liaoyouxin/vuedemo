<template>
	<div class="slide-show" @mouseover="clearInv" @mouseout="runInv">
		<div class="slide-img">
			<a :href="slides[nowIndex].href">
				<transition name="slide-trans">
					<img v-if="isShow" :src="slides[nowIndex].src">
				</transition>
				<transition name="slide-trans-old">
					<img v-if="!isShow" :src="slides[nowIndex].src">
				</transition>
			</a>
		</div>
		<div class="slide-info">
			<h2>{{ slides[nowIndex].title }}</h2>
			<ul class="slide-pages">
				<li @click="goto(prevIndex)">&lt;</li>
				<li v-for="(item,index) in slides"
				    @click="goto(index)"
				    :class="{ on: index === nowIndex}"
				>
					{{ index+1 }}
				</li>
				<li @click="goto(nextIndex)">&gt;</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default{
       name:'slide',
       props:{
       	 slides:{
       	 	type:Array,
       	 	default:[]
       	 },
       	 inv:{
       	 	type:Number,
       	 	default:2000
       	 }
       },
       data(){
       	return{
       		nowIndex:0,
       		isShow:true
       	}
       },
       methods:{
       	goto(index){
       		this.isShow=false
       		setTimeout( ()=>{
       			this.isShow=true
				this.nowIndex = index
				this.$emit('onchange',0.5)
       		},10)
       		
       	},
       	runInv(){
       		this.invId = setInterval( ()=>{
       			this.goto(this.nextIndex)
       		},this.inv)
       	},
       	clearInv(){
       		clearInterval(this.invId)
       	}
       },
       computed:{
       	 prevIndex (){
       	 	if(this.nowIndex === 0 ){
       	 		return this.slides.length-1
       	 	}else{
       	 		return this.nowIndex-1
       	 	}
       	 },
       	 nextIndex (){
       	 	if(this.nowIndex === this.slides.length-1){
       	 		return 0
       	 	}else{
       	 		return this.nowIndex+1
       	 	}
       	 }
       },
       mounted(){
       	 this.runInv()
       }
	}
</script>

<style scoped>
   .slide-show{
	    position:relative;
	    width:820px;
	    height:300px;
	    overflow:hidden;
   }
  
   .slide-img img{
    position:absolute;
    width:820px;
    height:300px;
   }
   .slide-info{
    width:100%;
    height:30px;
    background:rgba(0,0,0,.5);
    position:absolute;
    bottom:0;
    left:0;
   }
   h2{
    float:left;
    line-height:30px;
    color:#fff;
    text-indent:10px;
    width:600px;
   }
   .slide-pages{
    float:right;
    max-width:220px;
   }
   .slide-pages li{
    float:left;
    width:30px;
    text-align:center;
    line-height:30px;
    color:#fff;
    cursor:pointer;
   }
   .slide-pages a{
    color:#fff;
   }
   .on{
    background:#04BB7F;
   }
   .slide-trans-enter-active{
     transition: all .5s;
   }
   .slide-trans-enter{
    transform:translateX(820px)
   }
   .slide-trans-old-leave-active{

    transition: all .5s;
    transform:translateX(-820px)

   }
</style>