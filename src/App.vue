<template>
  <div id="app">
    <router-view/>
    <img src="./assets/logo.png">
    <img src="./assets/logo.png">
    <img src="./assets/logo.png">
    <img src="./assets/logo.png">
    <img src="./assets/logo.png">
    <img src="./assets/logo.png">
    <img src="./assets/logo.png">
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
  color: #2c3e50;
}
#app > * {
  text-align: center;
  margin: 0 auto;
}
#app > img {
  display: block;
}
body {
  background: #EFF3F7
}
</style>
