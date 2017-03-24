<template>
  <div id="reveal">
	  <el-tabs v-model="activeName" @tab-click="handleClick" type="card">
	    <el-tab-pane label="正在热映" name="first">正在热映</el-tab-pane>
	    <el-tab-pane label="即将上映" name="second">即将上映</el-tab-pane>
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

.search_wrap{
    margin: 0 2%;
    box-sizing: border-box;
    width: 96%;
}
.search_list{
	margin: 0 8px;
}
.search_list li {
    border-bottom: 1px solid #F2F2F2;
    overflow: hidden;
}
.search_list li a {
    display: block;
    overflow: hidden;
}
.search_list img {
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
</style>
