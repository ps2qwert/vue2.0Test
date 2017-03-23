<template>
  <div id="head">
	  <el-row :gutter="20"  type="flex" align="middle" class="head_wrap">
		  <el-col :span="4">
		  	<div class="grid-content">
		  		<i class="el-icon-arrow-left back" @click = "back"></i>
		  	</div>
		  </el-col>
		  <el-col :span="16">
		  	<div class="grid-content" id="title">
				{{title}}
		  	</div>
		  </el-col>
		  <el-col :span="4">
		  	<div class="grid-content">
		  	</div>
		  </el-col>
	</el-row>
  </div>
</template>

<script>


export default {
  props: {
    title: {
      type: String
    }
  },
  data () {
    return {

    }
  },
  methods : {
  	back : function(){
  		this.$router.go(-1)
  	}
  },
  created (){

  }
}
</script>

<style>
#head{
	background: #03a9f4;
	padding: 3% 0 3% 0;
	color: #fff; 
	margin-bottom: 20px
}
.head_wrap{
	margin: 0 !important
}
#title{
	text-align: center; 
	font-size: 18px
}
.back{
	padding-left: 2%;
}
.grid-content{min-height : auto!important}
.el-row{margin: 0}
</style>
