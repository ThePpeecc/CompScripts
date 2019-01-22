<template>
  <div id="app">
    <h1>Overview</h1>
    <router-link to="arch">Arch</router-link>
    <router-link to="os">OS</router-link>
    <router-link to="net">Network</router-link>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
