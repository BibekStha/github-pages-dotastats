<template>
  <div id="app">
    <header>
      <Navbar></Navbar>
    </header>
    <main class="d-flex">
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import navbar from './components/Nav'

export default {
  name: 'app',
  components: {'Navbar': navbar}
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Comfortaa:300,400|Roboto:300,400&display=swap');

body {
  margin: 0;
  background-color: #263238;
}

a, a:visited {
  color: #C7503C;
}

a:hover, a:focus, a:active {
  color: #D78476;
  text-decoration: none;
}

#app {
  font-family: 'Comfortaa', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #ECEFF1;
}

main {
  text-align: center;
  margin-top: 40px;
  min-height: 60vh;
}
</style>
