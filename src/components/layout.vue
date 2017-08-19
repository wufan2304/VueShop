<template>
  <div class="container">
    <div class="layout-header">
      <img src="../assets/logo.png" class="shop-logo">
      <div class="header-nav">
        <ul class="header-links">
          <li>|</li>
          <li>退出</li>
          <li>|</li>
          <li>登陆</li>
          <li>|</li>
          <li>注册</li>
          <li>|</li>
          <li>关于</li>
        </ul>
      </div>
    </div>
    <div class="layout-content">
      <router-view></router-view>
    </div>
    <div class="layout-footer">the website was made by wufan</div>
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
<style lang="sass">
/* css reset */
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
time, mark, audio, video
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;

/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section
	display: block;

body
	line-height: 1;

ol, ul
	list-style: none;

blockquote, q
	quotes: none;

blockquote:before, blockquote:after,
q:before, q:after
	content: '';
	content: none;

table
	border-collapse: collapse;
	border-spacing: 0;

/* 全局字体设置 */
html,
body
  font-family: "Arial","Microsoft YaHei","黑体","宋体",sans-serif;
  font-size: 16px;
  height: 100%;
.container
  height: 100%;
  width: 100%;
  .layout-header
    // position: fixed;
    // top: 0;
    background: #363636;
    color: #b2b2b2;
    height: 90px;
    width: 100%;
    line-height: 90px;
    .shop-logo
      width: 50px;
      height: 50px;
      float: left;
      margin: 20px ;
    .header-nav
      float: right;
      .header-links
      ul
        margin: 0 5px;
        overflow: hidden;
        li
          display: inline-block;
          margin: 0 5px;

  .layout-content
    // margin-top: 90px;
    min-height: calc(100% - 180px);

    // margin-bottom: 90px;

  .layout-footer
    height: 90px;
    background: #e3e4e8;
    text-align: center;
    line-height: 80px;
    // position: fixed;
    // bottom: 0;
    width: 100%;

</style>
