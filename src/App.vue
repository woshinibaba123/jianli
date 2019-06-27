<template>
  <div id="app">
     <div class="header">
    <h1>付翔的简历</h1>
    </div>
    <router-view  v-if="isRouterAlive"/>
  </div>
</template>

<script>
export default {
  name: 'App',
  provide () {
    return {
      reload: this.reload
    }
  },
  data () {
    return {
      isRouterAlive: true
    }
  },
  methods: {
    reload () {
      this.isRouterAlive = false
      this.$nextTick(function () {
        this.isRouterAlive = true
      })
    }}
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  margin: 0px auto;
  max-width: 1000px;
}
.header{
    width: 100%;
    height: 100px;
    text-align: center；
}
.header h1{
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    text-align: center
}
</style>
