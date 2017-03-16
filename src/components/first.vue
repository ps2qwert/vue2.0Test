<template>
  <div id="first">
    <h1>{{author}}</h1>
    <ul>
    	<li v-for = "article in articles" @click = 'goDetail(article.url)'>
		<el-row :gutter="20" >
		  <el-col :span="6">
		  	<div class="grid-content ">
		  		<img :src = "article.firstImg">
		  	</div>
		  </el-col>
		  <el-col :span="18">
		  	<div class="grid-content">
		  		<h3>{{article.title}}</h3>
		  		<p>公众号：{{article.source}}</p>
		  	</div>

		  </el-col>
		</el-row>
    	</li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      author: '微信精选',
      articles : []
    }
  },
  methods : {
  	goDetail(obj){
  		debugger;
  		window.location.href = obj
  	}
  },
  created (){
  	var self = this
  	debugger;
	this.$http.get('http://127.0.0.1:9000/test', {
		params: {
		  key: '45c5a8c1087989149f8fd3704cb522bf',
		  ps : 20,
		  pno : 1
		},
	}).then(function (response) {
		console.log(response.data)
		self.articles = response.data.result.list
	}).catch(function (error) {
		console.log(error);
	});
  }
}
</script>

<style>
/*@import "element-ui/lib/theme-default/index.css";*/


#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

h1, h2{
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  width: 100%
}

a {
  color: #42b983;
}

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
  text-align: left;
}
.grid-content h3{
  margin:0 0;
  font-weight: normal;
  font-size: 16px;	
}
.grid-content p{
	margin: 4px 0 0 0;
	font-size: 14px;
	color: #999
}
.grid-content img{
	width: 100%;
  max-height: 76px
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}

</style>
