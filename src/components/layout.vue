<template>
  <div>
    <div class="app-head">
      <div class="app-head-inner">
          <img src="../assets/logo.png" alt="logo" class="app-head-logo">
          <div class="head-nav">
            <ul class="nav-list">
              <li>登录</li>
              <li class="nav-pile">|</li>
              <li>注册</li>
              <li class="nav-pile">|</li>
              <li>关于</li>
            </ul>
          </div>
      </div>
    </div>
    <div class="app-content">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
    <div class="app-foot">
      <p>© 2018 vueshop </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'layout',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
/*css reset*/
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
}

/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section {
    display: block;
}

body {
    line-height: 1;
}

ol, ul {
    list-style: none;
}

blockquote, q {
    quotes: none;
}

blockquote:before, blockquote:after,
q:before, q:after {
    content: '';
    content: none;
}

table {
    border-collapse: collapse;
    border-spacing: 0;
}
html {
    font-size: 62.5%;
    color: #222;
}

::selection {
    background-color: #b3d4fc;
    text-shadow: none;
}

ul {
    margin: 0;
    padding: 0;
}

li {
    list-style: none;
}
.clearfix:before,
.clearfix:after {
    content: " ";
    display: table;
}

.clearfix:after {
    clear: both;
}
/* ===============
   自定义页面样式
   =============== */
body {
    background: #f0f2f5;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    font-size: 14px;
    color: #444;
}

a {
    color: #666;
    text-decoration: none;
}
.app-head{
  background: #363636;
  color: #b2b2b2;
  height: 60px;
  line-height: 60px;
  width: 100%;
}
.app-head-inner{
  width: 1200px;
  margin: 0 auto;
}
.head-logo{
  float: left;
}
.app-head-inner img{
  width: 40px;
  margin-top: 10px;
}
.head-nav{
  float: right;
}
.head-nav ul{
  overflow: hidden;
}
.head-nav li{
  cursor: pointer;
  float: left;
}
.nav-pile{
  padding: 0 10px;
}
.app-foot{
  text-align: center;
  height: 60px;
  width: 100%;
  line-height: 60px;
  background: #e3e4e8;
  clear: both;
  margin-top: 30px;
}
.container{
  width: 1200px;
  margin:0 auto;
}
.index-hot{
  background:url(../assets/images/hot.gif) no-repeat;
  display:inline-block;
  width: 30px;
  height: 20px;
}
</style>
