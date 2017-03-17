<template>
  <div id="bottomNav">
	  <el-row style="margin-bottom:10px">
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
		  		<router-link to="/movie">头条</router-link>
		  	</div>
		  </el-col>
		  <el-col :span="6">
		  	<div class="grid-content">
		  		<router-link to="/movie">信息</router-link>
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
  #bottomNav{
    position: fixed;
    bottom: 0;
    width: 100%;
    box-sizing: border-box;
    left: 0;
    background: #fff;
    padding-top: 10px;
  }
  #bottomNav a{text-align: center; display: block; text-decoration: none;}
  .el-row {
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
