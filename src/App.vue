<template>
  <div id="app" :class="{'light-background':!getDarkMode,'dark-background':getDarkMode}">
    <div id="nav">
      <Navbar/>
    </div>
    <router-view/>
  </div>
</template>

<script>
import Navbar from '@/components/navbar.vue'
import { mapGetters } from 'vuex'
export default {
  components:{
    Navbar,
  },
  computed:{
    ...mapGetters(["getDarkMode"])
  }
}
</script>
<style>
*{
  transition: all 0.8s cubic-bezier(0.2,0.8.0.2,1);
}
body{
  margin: 0;
  padding: 0;
  box-sizing: border-box;

}
#app {
  font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji;
  font-size: 14px;
  line-height: 1.5;
}
.dropdown-caret{
  display: inline-block;
  width: 0;
  height: 0;
  vertical-align: middle;
  content: "";
  border-top-style: solid;
  border-top-width: 4px;
  border-right: 4px solid transparent;
  border-bottom: 0 solid transparent;
  border-left: 4px solid transparent;
  margin-left: 4px;
}
.light-background{
  background-color: white !important;
}
.dark-background{
  background-color: #0d1117 !important;
  color: rgba(255, 255, 255, 0.74) !important;
}
.dark-background svg{
  fill: rgba(255, 255, 255, 0.658) !important;
}
</style>
