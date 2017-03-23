<template>
  <div id="app">
    <transition name="fade" mode="out-in">
      <router-view class="view"></router-view>
    </transition>
    
    <bottomNav></bottomNav>
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
      title : "标题"
    }
  },
  components : {
    first,
    bottomNav,
    movie,
    headNav
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
