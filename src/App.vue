<template>
  <div id="app">
    <div class="toolbar grey">
      <a href="https://locale.ai/index.html" target="_blank"><img class="img-logo" src="./assets/locale.png"></a>
      <router-link class="links mr-3" to="/">Home</router-link>
      <span class="border-l"/>
      <router-link class="links ml-3" to="/about">About App</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "app"
}
</script>

<style scoped>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background: #fcfcfc;
}
.toolbar {
  border: 1px solid black !important;
  padding: 10px 0px;
}
.links {
  text-decoration: none;
  color: black;
  font-size: 20px;
}
.links:hover {
  text-decoration: underline;
}
.img-logo {
  float: left;
  height: 25px;
  margin: 0px 0px 0px 10px;
  cursor: pointer;
}
.border-l {
  border-left: 1px solid black;
  position: relative;
  top: -2px;
}
</style>
