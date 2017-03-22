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


  <!-- 评论 -->
<!--   <section class="subject-comments"> 
   <h2>美女与野兽的短评(31720)</h2> 
   <div class="bd" id="comment-list">
    <ul data-reactroot="" class="list comment-list">
     <li class="">
      <div class="desc">
       <a href="/people/146696675/"><img src="https://img1.doubanio.com/icon/up146696675-8.jpg" alt="遗迹混揉" /></a>
       <div class="user-info">
        <strong>遗迹混揉</strong>
        <span class="rating-stars" data-rating="3"><span class="rating-star rating-star-medium-full"></span><span class="rating-star rating-star-medium-full"></span><span class="rating-star rating-star-medium-full"></span><span class="rating-star rating-star-medium-gray"></span><span class="rating-star rating-star-medium-gray"></span></span>
        <div class="date">
         2017-03-17 03:00:19
        </div>
       </div>
      </div><p>看完之后真心希望长残的不是丹尼尔&middot;雷德克里夫，而是艾玛&middot;沃森。PS：想必那位没有理解我的意见，我的意思是丹尼尔演技那么好为什么没有继续帅下去，幸好扮大叔还是比较合适的，然后艾玛&middot;沃森，长得那么小巧玲珑，为什么不提升一下自己的演技，跟国内花瓶没什么区别，只希望她一辈子不要只会演赫敏。</p>
      <div class="btn-info">
       <div class="ic-btn ic-btn-like  left ">
        <span class="text">1483</span>
       </div>
       <div class="ic-btn ic-btn-more   right"></div>
      </div></li>
     <li class="go-comment-list"><a href="/movie/subject/25900945/comments?from=subject">查看全部短评</a></li>
     <!-- react-empty: 76 -->
     <!-- react-empty: 77 -->
    </ul>
   </div> 
  </section> -->
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
      },
      comment : {}
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
  	},
  // 	getComment : function(){
  // 		var self = this
		// this.$http.get('http://127.0.0.1:9000/movieComment', {
		// 	params: {
		// 		id : self.$route.params.movieId
		// 	},
		// }).then(function (response) {
		// 	self.comment = response.data.comments
		// }).catch(function (error) {
		// });  	
  // 	}
  },
  created (){
  	var self = this
  	self.getData();
  	// self.getComment();
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

.subject-comments{}
.list{
	margin-right: -18px;
}

.list li {
    position: relative;
    padding: 15px 18px 15px 0;
    word-wrap: break-word;
    overflow: hidden;
    box-sizing: border-box;
}
.list li:first-child {
    padding-top: 0;
}
.list a {
    display: block;
    overflow: hidden;
    text-decoration: none;
    color: #494949;
}
.list li .desc>a {
    display: inline;
}

.list .go-app, .list .go-review-list, .list .go-comment-list, .list .go-annotation-list, .list .go-list {
    text-align: center;
    padding-bottom: 14px;
    margin-top: -1px;
    line-height: 18px;
}

.comment-list li .desc {
    font-size: 0;
    line-height: normal;
    margin: 0 0 11px;
    color: #494949;
    position: relative;
}
.comment-list li p {
    padding: 0 0 0 40px;
    line-height: 22px;
    color: #494949;
    margin: 5px 0
}
.comment-list li .btn-info {
    height: 22px;
    margin: 10px 0 0 40px;
}
.comment-list li .desc img, .comment-list li .desc .avatar {
    width: 36px;
    border-radius: 50%;
    vertical-align: text-top;
    margin-right: 10px;
    float: left;
}
.comment-list li .desc .user-info {
    margin-left: 40px;
}
.comment-list li .desc strong {
    font-size: 15px;
    display: inline-block;
    vertical-align: text-top;
    margin-right: 6px;
}
.list li .rating-stars {
    font-size: 15px;
    vertical-align: text-top;
}
.comment-list li .desc .date {
    margin-top: 6px;
    font-size: 12px;
    color: #aaa;
}
.comment-list li::after {
    height: 0;
    left: 34px;
    right: 0;
}
.list li::after {
    left: 0;
    bottom: 0;
    width: 100%;
    height: 1px;
    background: #E8E8E8;
    -webkit-transform: scaleY(0.5);
    content: '';
    position: absolute;
    -webkit-transform-origin: 0 bottom;
}
.ic-btn {
	display: inline-block;
	margin-right: 20px;
	font-size: 14px;
	cursor: pointer
}

.ic-btn.left {
	float: left
}

.ic-btn.right {
	float: right
}

.ic-btn::before {
	content: '';
	width: 20px;
	height: 20px;
	background-position: center center;
	background-repeat: no-repeat;
	display: inline-block;
	margin-bottom: -2px
}

.ic-btn .text {
	color: #ccc;
	margin-left: 3px;
	position: relative;
	left: 0;
	top: -3px
}

.ic-btn-comment::before {
	background-image: url(https://img3.doubanio.com/f/talion/7a0756b3b6e67b59ea88653bc0cfa14f61ff219d/pics/card/ic_like_gray.svg)
}

.ic-btn-more::before {
	background-image: url(https://img3.doubanio.com/f/talion/be268c0a1adb577c8dfdcfbe48c818af3983ed62/pics/card/more.svg)
}

.ic-btn-like::before {
	background-image: url(https://img3.doubanio.com/f/talion/7a0756b3b6e67b59ea88653bc0cfa14f61ff219d/pics/card/ic_like_gray.svg)
}

.ic-btn-like.active .text {
	color: #42bd56
}

.ic-btn-like.active::before {
	background-image: url(https://img3.doubanio.com/f/talion/2d3be3ae95f65d9e4e6620cc3c524e79a2edf2ad/pics/card/ic_like_green.svg)
}

.ic-btn-heart::before {
	background-image: url(https://img3.doubanio.com/pics/card/ic_heart_gray.svg)
}

.ic-btn-heart.active .text {
	color: #42bd56
}

.ic-btn-heart.active::before {
	background-image: url(https://img3.doubanio.com/f/talion/0129352875382ff0544020161709c2ae9b00c737/pics/card/ic_heart_red.svg)
}

.ic-btn-retweet::before {
	background-image: url(https://img3.doubanio.com/f/talion/8604ef3950b947d55406e2a6f5cf6ca7f0b934e3/pics/card/ic_retweet_gray.svg)
}

.ic-btn-retweet.active .text {
	color: #42bd56
}

.ic-btn-retweet.active::before {
	background-image: url(https://img3.doubanio.com/f/talion/e8ec58db5bf1dbd82eb7965dfc51ffb7f0f5b79f/pics/card/ic_retweet_green.svg)
}

.more-menu {
	position: absolute;
	bottom: 0;
	right: 0;
	border-radius: 4px;
	background-color: #fcfcfc;
	box-shadow: 1px 1px 4px 0 rgba(0,0,0,0.1);
	border: solid 1px #ccc;
	white-space: nowrap
}
</style>
