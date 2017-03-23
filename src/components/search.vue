<template>
  <div id="search" >
  	<head-nav :title = 'title'></head-nav>
	<el-input
	  size="large"
	  placeholder="请输入影片名称"
	  icon="search"
	  v-model="searchVal"
	  :on-icon-click="search" class="search_wrap">
	</el-input>

	<div class="">
		<ul class="search_list">
		  <li v-for = 'search in searchList' @click="goDetail(search.id)">
		    <div >
		      <img :src="search.images.small">
		      <div class="subject-info">
		        <span class="subject-title">{{search.title}}</span>
		        <p class="rating">
		              <span>看过人数：{{search.collect_count}}</span>
		        </p>
		      </div>
		    </div>
		  </li>
		</ul>
	</div>
  </div>

</template>

<script>
import headNav from '../components/headNav.vue'
export default {
  data () {
    return {
    	title : '搜索',
      searchVal: '',
      searchList : [],
      loading : true,
    }
  },
  watch : {
  	'$route' : function(){
  		debugger;
  		var self = this;
  		self.loading = true;
  	},
  	searchVal : function(val){
  		var self = this
  		self.search() 
  	}
  },
  methods : {
  	search : function(){
  		var self = this
		this.$http.get('http://127.0.0.1:9000/movieSearch', {
			params: {
				q : self.searchVal 
			},
		}).then(function (response) {
			self.searchList = response.data.subjects
		}).catch(function (error) {
			console.log(error);
		});  	
  	},
  	goDetail:function(id){
  		this.$router.push({name : 'movieDetail',params : {movieId : id}})
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
