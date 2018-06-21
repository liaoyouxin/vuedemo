<template>
  <div class="index-wrap">
    <div class="index-left">
        <div class="index-left-block">
          <h2 class="index-type-title index-h">全部产品</h2>
          <template v-for="(product,index) in productList">
            <h3 class="index-good-type index-h">{{ product.title }}</h3>
            <ul class="index-good-list">
               <li v-for="item in product.list">
                  <a :href="item.url">{{ item.name }}</a>
                  <span v-if="item.hot" class="index-hot"></span>
               </li>
            </ul>
            <div class="hr" v-if="!product.last"></div>
          </template>
        </div>
        <div class="index-left-block lastest-news">
          <h2 class="index-type-title index-h">最新消息</h2>
          <ul class="newsList">
              <li v-for="item in newsList">
                <a :href="item.url">{{ item.title }}</a>
                 <span v-if="item.hot" class="index-hot"></span>
              </li>
          </ul>
        </div>
    </div>
    <div class="index-right">
       <div class="index-board-list">
         <div class="index-board-item"
              v-for="(item,index) in boardList"
              :class="[{'line-last': index%2!=0},
              'index-board-'+item.id]"
         >  
           <div class="index-board-item-inner">
               <h2 class="index-board-h">{{item.title}}</h2>
               <p class="index-board-description">{{item.description}}</p>
               <div class="index-board-button">
                 <a href="" class="button">立即购买</a>
               </div>
           </div>
         </div>
       </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'index',
  created:function(){
    this.$http.get('/api/newsList')
    .then(function(res){
      this.newsList=res.data
    },function(err){
      console.log(err)
    })
  },
  data () {
    return {
      productList:{
        pc:{
          title:'PC产品',
          last:false,
          list:[
            { name:'数据统计',url:'http://starcraft.com',hot:true },
            { name:'数据预测',url:'http://starcraft.com',hot:true },
            { name:'流量分析',url:'http://starcraft.com' },
            { name:'广告发布',url:'http://starcraft.com' }
          ]
        },
        app:{
          title:'app应用',
          last:true,
          list:[
            { name:'91助手',url:'http://starcraft.com',hot:true },
            { name:'产品助手',url:'http://starcraft.com' },
            { name:'智能地图',url:'http://starcraft.com' },
            { name:'团队语音',url:'http://starcraft.com' }
          ]
        }
      },
      newsList:[],
      boardList:[
            { 
              title:'开放产品',
              description:'开放产品是一款开放产品',
              saleout:false,
              id:'car'
            },
             { 
              title:'开放产品',
              description:'开放产品是一款开放产品',
              saleout:false,
              id:'loud'
            },
             { 
              title:'开放产品',
              description:'开放产品是一款开放产品',
              saleout:true,
              id:'earth'
            },
             { 
              title:'开放产品',
              description:'开放产品是一款开放产品',
              saleout:false,
              id:'mounter'
            }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .index-wrap{
    width: 1090px;
    margin: 30px auto;
  }
  .index-wrap>div{
    float: left;
  }
  .index-left{
    width: 250px;
    text-indent: 25px;
  }
  .index-left-block{
    width: 100%;
    height: 400px;
    background:#fff;
  }
  .lastest-news{
    margin-top: 20px;
    height: 380px;
  }
  .index-h{
    text-indent: 15px;
    font-weight: bold;
  }
  .index-type-title{
    background: #04BB7F;
    height: 40px;
    line-height:40px;
    color:#fff;
  }
  .index-good-type{
    font-weight: bold;
    height: 40px;
    line-height:40px;
  }
  .hr{
    margin-top: 10px;
    width: 100%;
    height: 1px;
    background:#ccc;
  }
  .index-left li{
   line-height: 30px;
  }
  .index-right{
    width: 820px;
    height: 800px;
    margin-bottom: 30px;
    margin-left: 20px;
  }
  .newsList{
    margin-top:10px;
  }
  .index-board-item{
    width: 400px;
    height: 140px;
    background:#fff;
    float: left;
    margin-top: 20px;
  }
  .line-last{
    margin-left: 20px;
  }
  .index-board-item-inner{
    height: 100%;
    text-indent: 160px;
  }
  .index-board-car .index-board-item-inner{
    background: url(../assets/images/earth.png) no-repeat ;
    background-size: 140px 140px;
  }
  .index-board-loud .index-board-item-inner{
    background: url(../assets/images/earth.png) no-repeat ;
    background-size: 140px 140px;
  }
  .index-board-earth .index-board-item-inner{
    background: url(../assets/images/earth.png) no-repeat ;
    background-size: 140px 140px;
  }
  .index-board-mounter .index-board-item-inner{
    background: url(../assets/images/earth.png) no-repeat ;
    background-size: 140px 140px;
  }
  .index-board-h{
    font-size: 16px;
    font-weight: bold;
    padding-top: 20px;
  }
  .index-board-description{
    padding-top: 10px;
  }
  .index-board-button{
    padding-top: 20px;
  }
  .button {
    background: #04BB7F;
    color: #fff;
    padding:6px 8px;
  }
</style>
