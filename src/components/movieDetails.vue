<template>
  <div id="movieDetails">

  </div>
</template>

<script>
export default {
  data () {
    return {
      author: '',
      articles : []
    }
  },
  methods : {
  	goDetail(obj){
  		window.location.href = obj
  	}
  },
  created (){
  	var self = this
	this.$http.get('http://127.0.0.1:9000/movie', {
		params: {
		  key: '45c5a8c1087989149f8fd3704cb522bf',
		  ps : 20,
		  pno : 1
		},
	}).then(function (response) {
		self.articles = response.data.subjects
	}).catch(function (error) {
		console.log(error);
	});
  }
}
</script>

<style>


</style>
