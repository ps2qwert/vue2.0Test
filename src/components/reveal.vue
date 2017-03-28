<template>
  <div id="reveal">
	  <el-tabs v-model="activeName" @tab-click="handleClick" type="card">
	    <el-tab-pane label="正在热映" name="first">
		<div class="">
			接口未开放，敬请期待……
		</div>
	    </el-tab-pane>
	    <el-tab-pane label="即将上映" name="second">
	    		接口未开放，敬请期待……
	    </el-tab-pane>
	  </el-tabs>

  </div>

</template>

<script>
import headNav from '../components/headNav.vue'
export default {
  data () {
    return {
    	activeName: 'second'
    }
  },
  watch : {

  },
  methods : {
      handleClick(tab, event) {
        console.log(tab, event);
      },
      revealData(){

      },
      soonData(){
      	
      }
  },
  created (){

  },
  components : {
    	headNav 
  }
}
</script>

<style>
.el-tabs__nav {
    white-space: nowrap;
    position: relative;
    transition: transform .3s;
    text-align: center;
    float: none;
}
#reveal{
	padding-top: 4%
}
.el-tabs__header{
	border: none;
}
.search_wrap{
    margin: 0 2%;
    box-sizing: border-box;
    width: 96%;
}
.reveal_list{
	margin: 0 8px;
}
.reveal_list li {
    border-bottom: 1px solid #F2F2F2;
    overflow: hidden;
}
.reveal_list li a {
    display: block;
    overflow: hidden;
}
.reveal_list img {
    float: left;
    padding: 10px 0px;
    width: 40px;
}
.subject-info {
    display: block;
    padding: 10px 0;
    overflow: hidden;
}
.subject-title {
    display: block;
    padding-left: 10px;
    font-size: 17px;
    color: #494949;
}
.rating {
    padding-left: 10px;
    -webkit-margin-after: 0px;
    -webkit-margin-before: 3px;
}
.rating span {
    color: #aaa;
    font-size: 12px;
    height: 14px;
    vertical-align: middle;
}
.el-tabs__content{
	margin: 0 10px
}
.el-tabs--card>.el-tabs__header .el-tabs__item:first-child{
	border-radius: 70px 0 0 70px !important;
}
.el-tabs--card>.el-tabs__header .el-tabs__item{
    border: 1px solid #20a0ff;
    color: #20a0ff;	
    border-radius: 0 70px 70px 0 !important;
}
.el-tabs--card>.el-tabs__header .el-tabs__item.is-active{
    border: 1px solid #20a0ff;
    background: #20a0ff;
    color: #fff;	
}
</style>
