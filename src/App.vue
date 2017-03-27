<template>
  <div id="app">
    <transition name="fade" mode="out-in">
      <router-view class="view"></router-view>
    </transition>
    </br>
    </br>
    <bottomNav :activeName = 'bottomNav'></bottomNav>
  </div>
</template>

<script>
import first from './components/first.vue'
import bottomNav from './components/bottomNav.vue'
import movie from './components/movie.vue'
import headNav from './components/headNav.vue'
export default {
  data () {
    return {
      msg: 'hello app',
      title : "标题",
      bottomNav : '票房榜'
    }
  },
  watch : {
    '$route' : function(){
      var rname = this.$route.path;
      switch(rname) {
        case '/movie':
            this.bottomNav = '电影top'
            break
        case '/search':
            this.bottomNav = '搜索'
            break
        case '/reveal':
            this.bottomNav = '热映'
            break
        case '/':
            this.bottomNav = '票房榜'
            break
      }
    }
  },
  components : {
    first,
    bottomNav,
    movie,
    headNav
  },
  created () {
      var rname = this.$route.path;
      switch(rname) {
        case '/movie':
            this.bottomNav = '电影top'
            break
        case '/search':
            this.bottomNav = '搜索'
            break
        case '/reveal':
            this.bottomNav = '热映'
            break
        case '/':
            this.bottomNav = '票房榜'
            break
      }
  }
}
</script>

<style>

body,nav,dl,dt,dd,p,h1,h2,h3,h4,ul,ol,li,input,button,textarea,footer{margin:0;padding:0}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s ease;
}
.fade-enter, .fade-leave-active {
  opacity: 0
}

.grid-content .active{
  color: #03a9f4
}
.grid-content a{
  color : #979595;
}
/*.child-view {
  position: absolute;
  transition: all .5s cubic-bezier(.55,0,.1,1);
}
.slide-left-enter, .slide-right-leave-active {
  opacity: 0;
  -webkit-transform: translate(30px, 0);
  transform: translate(30px, 0);
}
.slide-left-leave-active, .slide-right-enter {
  opacity: 0;
  -webkit-transform: translate(-30px, 0);
  transform: translate(-30px, 0);
}*/


</style>
