import Vue from 'vue'
import Router from 'vue-router'
import layout from '@/components/layout'
import indexPage from '@/pages/index'
import details from '@/pages/details'
import analysis from '@/pages/details/analysis'
import count from '@/pages/details/count'
import forecast from '@/pages/details/forecast'
import publish from '@/pages/details/publish'
import orderlist from '@/pages/orderlist'
import orderlistvuex from '@/pages/orderlist-vuex'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      component:indexPage
    },
    {
    	path:'/orderlist',
    	component:orderlist
    },
    {
      path:'/orderlistvuex',
      component:orderlistvuex
    },
    {
    	path:'/details',
    	component:details,
    	redirect:'/details/count', //指定跳转地址
    	children:[
            {
		      path: 'analysis',
		      component:analysis
		    },
		    {
		      path: 'count',
		      component:count
		    },
		    {
		      path: 'forecast',
		      component:forecast
		    },
		    {
		      path: 'publish',
		      component:publish
		    },
    	]
    }
  ]
})
