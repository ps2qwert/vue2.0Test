<template>
  <div id="movieDetails">
	<h1 class="title">{{movie.title}}</h1>
	<section class="subject-info"> 
	 <div class="right"> 
	  <a href=""> <img :src="movie.images.small" alt="" class="cover" /> </a> 
	 </div> 
	 <div class="left"> 
	  <p class="rating"> <span>评分:</span> <strong>{{movie.rating.average}}</strong> <span>{{movie.ratings_count}}人评价</span> </p> 
	  <p class="meta">
		  <span v-for = "(value,key) in movie.genres"> / {{value}}</span>
		  <span v-for = "(value,key) in movie.directors">/ {{value.name}}(导演)</span> 
		  <span v-for = "(value,key) in movie.casts">/ {{value.name}}</span> / {{movie.year}}年上映 
	  </p> 
	  <a :href="movie.share_url" class="open-app" rel="nofollow">去豆瓣查看详细资料</a> 
	 </div> 
	</section>
	<section class="subject-intro"> 
	 <h2>{{movie.title}}的剧情简介</h2> 
	 <div class="bd" style="position: static;"> 
	  <p data-clamp="5" data-content="">{{movie.summary}}</p> 
	 </div> 
	</section>	
  </div>
</template>

<script>
export default {
  data () {
    return {
      movie : {
      	rating:{
      		average:"000"
      	},
      	images : {
      		small : 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCADcANwDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD1+iiipAKKKKACiiigAooooAKKKKAFpKO1FABS0lFAC0lFFABRRRQAUtJRQAUUUUAFLSUUAFFFFABS0lFABRRRQAUUUUAFFFLQAlFFFABRRS0AJRS0lABRRS0AFJRRQAUUUUAFFLSUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUtJQAUUUUAFFFFABRRRQAUUUUALSUUUAFFFGKACiiigAooo7UAFFFFABRRRQAtFJRQAUUUUAFLRSUALSUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABS0lLQAlFFFABRRS0AJRS0lABRRRQAUUUUAFFFFABS0lFABRRRQAUUUtACUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUtACUUUUAFFFFABRS0lABRRRQAUUUUAFFFFABRmiigAooooAKKKKACiiigAooooAKXNJRQAUUUUAFLSUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUALSUUUAFFFFAC0lFFABRRRQAtJS0lABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFLQAlFFFABRRS0AJRS0lABRRRQAUUtFACUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUtJRQAtJRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABS0lFABRRS0AJS0lLQAUlFFABRRRQAtJRRQAUUUUAFFFFABRRRQAUUUtACUUUUAFFFFABRRRQAUUUUAFFFLQAlFFFABRRS0AJRS0lABR3oooAWkoooAKKKKACiiigAooooAKKKPxoAKKKKACiiigBaSiigAooooAKKKKACilpKACiiigAooooAKWkooAKKKKACiiigAooooAKKKKACl4pKKACiiigAooooAKKKKACiiigApaKTtQAUUUUAFLSUUAFFFHagAooooAKKWkoAKKKKACilpKACiiigAoopcUAf/2Q=='
      	}
      }
    }
  },
  methods : {
  	getData : function(){
	  	var self = this
		this.$http.get('http://127.0.0.1:9000/movieDetails', {
			params: {
				id : self.$route.params.movieId
			},
		}).then(function (response) {
			self.movie = response.data
			console.log(self.movie)
			console.log(self.movie.images.small)
		}).catch(function (error) {
			console.log(error);
		});  		
  	}
  },
  created (){
  	var self = this
  	self.getData();
  }
}
</script>

<style>
#movieDetails{
	margin: 0 10px
};
#movieDetails h1{
    margin: 30px 0 5px;
    font-size: 24px;
    line-height: 32px;
    word-break: break-all;	
}
#movieDetails h2{
    color: #aaa;
    margin: 0 0 15px;
    font-size: 15px;
}
.subject-info {
	overflow: hidden;
	position: relative;
	margin-bottom: 10px
}

.subject-info .rating {
	line-height: 18px
}

.subject-info .rating strong {
	font-weight: normal;
	color: #494949;
	padding-right: 8px
}

.subject-info .rating span {
	color: #aaa
}

.subject-info .left {
	margin-right: 100px
}

.subject-info .left .sales {
	padding-top: 16px;
	padding-bottom: 16px
}

.subject-info .left .sales .buy {
	color: #E76648;
	font-size: 13px;
	border: 1px solid #E76648;
	border-radius: 3px;
	height: 24px;
	padding: 0 6px;
	display: inline-block;
	text-align: center;
	line-height: 24px
}

.subject-info .right {
	float: right
}

.subject-info .right img {
	display: block
}

.subject-info .cover {
	width: 100px
}

.subject-info .meta {
	color: #494949;
	margin-top: 15px;
	padding-right: 24px;
	font-size: 14px;
	line-height: 1.6
}

.subject-info .open-app {
	display: block;
	font-size: 14px;
	line-height: 1;
	margin-top: 10px;
	margin-bottom: -30px
}

.subject-info .right {
	float: right
}
.subject-intro{

}
.subject-intro p{
	font-size: 15px;
    color: #494949;
}
</style>
