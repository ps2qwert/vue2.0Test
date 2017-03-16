<template>
  <div id="bottomNav">
	  <el-row :gutter="20">
		  <el-col :span="6">
		  	<div class="grid-content">
		  		<router-link to="/">微信精选</router-link>
		  	</div>
		  </el-col>
		  <el-col :span="6">
		  	<div class="grid-content">
				<router-link to="/movie">电影</router-link> 		
		  	</div>
		  </el-col>
		  <el-col :span="6">
		  	<div class="grid-content">
		  		<router-link to="/movie">跳转第二页</router-link>
		  	</div>
		  </el-col>
		  <el-col :span="6">
		  	<div class="grid-content">
		  		<router-link to="/movie">跳转第二页</router-link>
		  	</div>
		  </el-col>
	</el-row>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  methods : {

  },
  created (){

  }
}
</script>

<style>
  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>
