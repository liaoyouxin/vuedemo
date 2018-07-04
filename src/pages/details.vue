<template>
  <div class="details-wrap">
      <div class="details-left">
         <img :src="productIcon" class="details-logo">
         <ul class="details-nav">
           <router-link v-for="(item,index) in productTypeList"
               :to="{ path: item.path }" :key="index" tag="li"
               active-class="active"> 
              {{ item.name }}
           </router-link>
         </ul>
      </div>
      <div class="details-right">
        <keep-alive>
           <router-view></router-view>
        </keep-alive>
      </div>
  </div>
</template>

<script>

export default {
  name: 'detail',
  components:{
    
  },
  data(){
    return{
      productTypeList:[
        {
          name:'数据统计',
          path:'count',
          active:true,
          typeLogo:require('../assets/images/earth.png')
        },
        {
          name:'数据预测',
          path:'forecast',
          active:false,
          typeLogo:require('../assets/images/car.png')
        },
        {
          name:'流量分析',
          path:'analysis',
          active:false,
          typeLogo:require('../assets/images/loud.png')
        },
        {
          name:'广告发布',
          path:'publish',
          active:false,
          typeLogo:require('../assets/images/mounter.png')
        }
      ],
      imgMap:{
        '/details/count':require('../assets/images/earth.png'),
        '/details/forecast':require('../assets/images/car.png'),
        '/details/analysis':require('../assets/images/loud.png'),
        '/details/publish':require('../assets/images/mounter.png')
      }
    }
  },
  computed:{
    productIcon(){
      return this.imgMap[this.$route.path]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
   .details-wrap{
    width: 1090px;
    margin:30px auto;
   }
   .details-wrap div{
    float: left;
    margin-bottom: 20px;
   }
   .details-logo{
    width: 100px;
    height: 100px;
    margin-left:50px;
    margin-top: 10px;
    margin-bottom: 10px;
   }
   .details-left{
    width: 200px;
     background:#fff;
   }
   .details-nav{
    padding-bottom: 20px;
   }
   .active{
    background: #04BB7F;
    color: #fff;
   }
   .details-nav li{
    height: 40px;
    line-height: 40px;
    text-indent: 15px;
    cursor: pointer;
   }
   .details-nav li:hover{
     background: #04BB7F;
    color: #fff;
   }
   .details-right{
    width: 850px;
    margin-left: 40px;
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
</style>
