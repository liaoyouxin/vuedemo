<template>
  <div class="forecast-wrap">
      <div class="selection">
      	<h2 class="title">数据预测</h2>
      	<p class="des">历史资料、科学实验、检验、统计等所获得的和用于科学研究、技术设计、查证、决策等的数值加以统计为解决方案做前期准备。</p>
      	<div class="buy-control">
      		<div class="buynum">
      			<span class="label">购买数量 : </span>
      			<div class="select-div">
      				<vue-counter :max=10></vue-counter>
      			</div>
      		</div>
      		<div class="type">
      			<span class="label">选择媒介 : </span>
      			<div class="select-div">
      				<multiply-chooser :selections="medias"></multiply-chooser>
      			</div>
      		</div>
      		<div class="time">
      			<span class="label">有效时间 : </span>
      			<div class="select-div">
      				<span class="label">一年</span>
      			</div>
      		</div>
      		<div class="price">
      			<span class="label">总价 : </span>
      			<div class="select-div">
      				<span class="label">500</span>
      			</div>
      		</div>
      		<div>
      			<button class="btn">立即购买</button>
      		</div>
      	</div>
      </div>
      <div class="product-description">
      	<h2 class="title">产品说明</h2>
        <p class="productdes">
        	大数据预测是大数据最核心的应用，大数据预测将传统意义预测”拓展到“现测”。大数据预测的优势体现在它把一个非常困难的预测问题，转化为一个相对简单的描述问题，而这是传统小数据集根本无法企及的转化为一个相对简单的描述问题，而这是传统小数据集根本无法企及的。<br>
        	大数据预测是大数据最核心的应用，大数据预测将传统意义预测”拓展到“现测”。大数据预测的优势体现在它把一个非常困转化为一个相对简单的描述问题，而这是传统小数据集根本无法企及的转化为一个相对简单的描述问题，而这是传统小数据集根本无法企及的难的预测问题，转化为一个相对简单的描述问题，而这是传统小数据集根本无法企及的。<br>
        	大数据预测是大数据最核心的应用，大数据预测将传统意义预测”拓展到“现测”。大数据预测的优势体现在它把一个非常困难的预测问题，转化为一个相对简单的描述问题，而这是传统小数据集根本无法企及的。
        </p>
      </div>
  </div>
</template>

<script>
import MultiplyChooser from '../../components/multiply-chooser'
import VueCounter from '../../components/counter'

export default {
  name: 'forecast',
  components:{
    MultiplyChooser,
    VueCounter
  },
  data(){
  	return{
  		medias:[
  		   {
  		   	label:'纸质报告',
  		   	value:0
  		   },
  		   {
  		   	label:'PDF',
  		   	value:1
  		   },
  		   {
  		   	label:'页面报告',
  		   	value:2
  		   },
  		   {
  		   	label:'邮件',
  		   	value:3
  		   }
  		],
  		areas:[
           {
  		   	label:'天津',
  		   	value:0
  		   },
  		   {
  		   	label:'北京',
  		   	value:1
  		   },
  		   {
  		   	label:'广州',
  		   	value:2
  		   }
  		]
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .selection{
   	background: #fff;
   	width:810px;
   	padding: 20px;
   }
   .title{
   	font-size: 18px;
   	font-weight:bold;
   	margin-bottom: 20px;
   }
   .des{
   	background: #f1f1f1;
   	padding:8px;
   	line-height: 1.5;
   	margin-bottom: 20px;
   }
   .buy-control>div{
   	margin-top: 10px; 
   	width: 100%;
   	height: 30px;
   }
   .label{
   	width: 80px;
   	line-height: 26px;
   	display: inline-block;
   	float: left;
   }
   .select-div{
   	float: left;
   	position: relative;
   	margin-left: 10px;
   }
   .btn{
   	background: #04BB7F;
   	border: none;
   	padding:5px 8px;
   	color: #fff;
   }
   .product-description{
    background:#fff;
    margin-top:20px;
    padding:15px 20px;
   }
   .productdes{
   line-height:1.6
}
</style>