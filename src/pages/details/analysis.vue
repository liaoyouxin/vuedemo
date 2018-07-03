<template>
  <div class="analysis-wrap">
  	<div class="selection">
  		<h3 class="title">流量分析</h3>
	  	<p class="des">是指在获得网站访问量基本数据的情况下对有关数据进行统计、分析，从中发现用户访问网站的规律，并将这些规律与网络营销策略等相结合，从而发现目前网络营销活动中可能存在的问题，并为进一步修正或重新制定网络营销策略提供依据。</p>
	    <div class="buy-control">
	    	<div class="buyNum">
	    		<span class="label">购买数量 : </span>
	    		<div class="select-div">
	    			<vue-counter :max=20></vue-counter>
	    		</div>
	    	</div>
	    	<div class="productType">
	    		<span class="label"> 产品类型  : </span>
	    		<div class="select-div">
	    			<vue-selection :selections="productTypes"></vue-selection>
	    		</div>
	    	</div>
	    	<div class="time">
	    		<span class="label">有效时间 : </span>
	    		<div class="select-div">
	    			<span class="label">一年</span>
	    		</div>
	    	</div>
	    	<div class="all-price">
	    		<span class="label">总价 : </span>
	    		<div class="select-div">
	    			<span class="label">500</span>
	    		</div>
	    	</div>
	    	<div><button class="btn">立即购买</button></div>
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

import VueSelection from '../../components/selection'
import VueCounter from '../../components/counter'
export default {
  name: 'analysis',
  components:{
    VueSelection,
    VueCounter
  },
  data(){
  	return {
  		buyNum:0,
  		buyType:{},
  		versions:[],
  		period:{},
  		productTypes:[
	  		{
	  			label:'入门版',
	  			value:0
	  		},
	  		{
	  			label:'中级版',
	  			value:1
	  		},
	  		{
	  			label:'高级版',
	  			value:2
	  		}
  		]
  	}
  },
  methods:{

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