<template>
  <div class="analysis-wrap">
  	<div class="selection">
  		<h3 class="title">流量分析</h3>
	  	<p class="des">是指在获得网站访问量基本数据的情况下对有关数据进行统计、分析，从中发现用户访问网站的规律，并将这些规律与网络营销策略等相结合，从而发现目前网络营销活动中可能存在的问题，并为进一步修正或重新制定网络营销策略提供依据。</p>
	    <div class="buy-control">
	    	<div class="buyNum">
	    		<span class="label">购买数量 : </span>
	    		<div class="select-div">
	    			<vue-counter :max=20 
            @on-change="onParamChange('buyNum', $event)"
            ></vue-counter>
	    		</div>
	    	</div>
	    	<div class="productType">
	    		<span class="label"> 产品类型  : </span>
	    		<div class="select-div">
	    			<vue-selection :selections="productTypes"
             @on-change="onParamChange('buyType', $event)"
            ></vue-selection>
	    		</div>
	    	</div>
	    	<div class="time">
	    		<span class="label">有效时间 : </span>
	    		<div class="select-div">
	    			 <vue-chooser :selections="times"
             @on-change="onParamChange('period', $event)"
             ></vue-chooser>
	    		</div>
	    	</div>
        <div class="version">
          <span class="label">产品版本 : </span>
          <div class="select-div">
             <multiply-chooser :selections="productionVersion"
             @on-change="onParamChange('versions', $event)"
             ></multiply-chooser>
          </div>
        </div>
	    	<div class="all-price">
	    		<span class="label">总价 : </span>
	    		<div class="select-div">
	    			<span class="label">{{ price }}</span>
	    		</div>
	    	</div>
	    	<div><button class="btn" @click="showPayDialog">立即购买</button></div>
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
      <pay-dialog :is-show="isShowPayDialog" @on-close="hidePayDialog">
      	 <table class="buy-dialog-table">
      	 	<tr>
      	 		<th>购买数量</th>
      	 		<th>产品类型</th>
      	 		<th>有效时间</th>
      	 		<th>产品版本</th>
      	 		<th>总价</th>
      	 	</tr>
      	 	<tr>
      	 		<td>{{ buyNum }}</td>
      	 		<td>{{ buyType.label }}</td>
      	 		<td>{{ period.label }}</td>
      	 		<td>
      	 			<span v-for="item in versions">
      	 				{{ item.label }}
      	 			</span>
      	 		</td>
      	 		<td>
      	 			{{ price }}
      	 		</td>
      	 	</tr>
      	 </table>
      	 <h3 class="pay-title">请选择支付方式</h3>
      	 <pay-chooser @on-change="showPayType"></pay-chooser>
      	 <button class="btn" @click="sendPayData">确认购买</button>
      </pay-dialog>
      <check-dialog :is-show-check-dialog="showCheckDialog" 
        :currentOrder="currentOrder"
        @close-checkdialog="showCheckDialog = false"
       ></check-dialog>
  </div>
</template>

<script>

import VueSelection from '../../components/base/selection'
import VueCounter from '../../components/base/counter'
import MultiplyChooser from '../../components/base/multiply-chooser'
import VueChooser from '../../components/base/chooser'
import PayDialog from '../../components/base/vueDialog'
import PayChooser from '../../components/base/pay-chooser'
import CheckDialog from '../../components/base/checkOrder'
export default {
  name: 'analysis',
  components:{
    VueSelection,
    VueCounter,
    MultiplyChooser,
    VueChooser,
    PayDialog,
    PayChooser,
    CheckDialog
  },
  data(){
  	return {
  		buyNum:0,
  		buyType:{},
  		versions:[],
  		period:{},
        price:0,
        payType:0,
        currentOrder:null,
        isShowPayDialog:false,
        showCheckDialog:false,
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
  		],
      times:[
        {
          label:'半年',
          value:0
        },
        {
          label:'一年',
          value:1
        },
        {
          label:'三年',
          value:2
        }
      ],
      productionVersion:[
        {
          label:'客户版',
          value:0
        },
        {
          label:'代理商版',
          value:1
        },
        {
          label:'专家版',
          value:2
        }
      ]
  	}
  },
  methods:{
    onParamChange(attr , value){
      this[attr] = value
      this.getPrice ()
    },
    getPrice () {
      let buyVersionArray = _.map(this.versions, (item) =>{
        return item.value
      })
      let passParams = {
        buyNumber: this.buyNum,
        buyType:this.buyType.value,
        period: this.period.value,
        version:buyVersionArray.join(',')
      }
      this.$http.post('/api/getPrice', passParams)
          .then((res)=>{
            let data = res.data
            this.price = data.amount
          })
    },
    showPayDialog(){
    	this.isShowPayDialog = true
    },
    hidePayDialog(){
    	this.isShowPayDialog = false
    },
    showPayType(value){
    	this.payType = value 
    },
    sendPayData(){
    	let buyVersionArray = _.map(this.versions, (item) =>{
    		return item.value
    	})

    	let passParams = {
    		buyNumber : this.buyNum,
    		buyType : this.buyType.value,
    		version : buyVersionArray.join(','),
    		period : this.period.value,
    		payType : this.payType
    	}

    	this.$http.post('/api/createOrder',passParams)
    	    .then((res)=>{
    	    	this.currentOrder = res.data.orderId
    	    	this.showCheckDialog = true
    	    	this.isShowPayDialog = false
    	    })
    }
  },
  mounted(){
    this.buyNum = 1
    this.versions = [this.productionVersion[0]]
    this.buyType = this.productTypes[0]
    this.period = this.times[0]
    this.getPrice()
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
     .buy-dialog-table{
    width: 100%;
    margin-bottom: 20px;
   }
   .buy-dialog-table td,
   .buy-dialog-table th{
    border: 1px solid #e3e3e3;
    text-align: center;
    padding:5px 0;
   }
   .buy-dialog-table th{
    background: #4fc08d;
    color: #fff;
    border: 1px solid #4fc08d
   }
   .pay-title{
   	font-size: 16px;
   	font-weight:bold;
   }
</style>