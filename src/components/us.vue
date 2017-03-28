<template>
  <div id="movie"   >
    <head-nav :title = 'author'></head-nav>
    <ul  v-loading="loading">
    	<li v-for = "article in articles" @click = 'goDetail(article.subject.id)'>
		<el-row :gutter="20" >
		  <el-col :span="6">
		  	<div class="grid-content ">
		  		<img :src = "article.subject.images.small">
		  	</div>
		  </el-col>
		  <el-col :span="18">
		  	<div class="grid-content">
		  		<h3>{{article.subject.title}}</h3>
<!-- 		  		<p>
		  			主演：
		  			<span v-for = "(value,key) in article.subject.casts">
		  				{{value.name}}
		  			</span>
		  		</p> -->
		  		<p>
		  			类型：
		  			<span v-for = "(value,key) in article.subject.genres">
		  				{{value}}
		  			</span>
		  		</p>
		  		<p>
		  			票房：{{article.box / 10000}}万
		  		</p>
		  		<p>
		  			豆瓣评分：<span style="color: #fea54c; font-size:20px">{{article.subject.rating.average}}</span>
		  		</p>
		  	</div>
		  </el-col>
		</el-row>
    	</li>
    </ul>

<!--  	<pulse-loader :loading = "loading" v-if = 'loading'></pulse-loader>
 -->  
 </div>



</template>

<script>
import headNav from '../components/headNav.vue'
import pulseLoader from 'vue-spinner/src/PulseLoader.vue'
export default {
  data () {
    return {
      author: '北美票房榜',
      articles : [],
      loading : true,
    }
  },
  watch : {
  	'$route' : function(){
  		debugger;
  		var self = this;
  		self.loading = true;
  		self.getData().then(function(){
  			self.loading = false
  		})
  	}
  },
  methods : {
  	getData : function(){
  		var self = this
		this.$http.get('http://203.195.199.174:9000/us_box', {
			params: {
			  count : 20
			},
		}).then(function (response) {
			self.articles = response.data.subjects
			self.loading = false
		}).catch(function (error) {
			console.log(error);
		});
  	},
  	goDetail(id){
  		this.$router.push({name : 'movieDetail',params : {movieId : id}})
  	}
  },
  created (){
  	var self = this
	self.getData()
  },
  components : {
    	pulseLoader,
    	headNav 
  }
}
</script>

<style>
/*@import "element-ui/lib/theme-default/index.css";*/

.v-spinner{
	text-align: center;
}
#movie h1{
	text-align: center;
}
#movie>ul{
	margin: 0 8px;
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



.el-row {
  margin-bottom: 20px;
  width: 100%;
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
  max-height: 108px
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}

</style>
