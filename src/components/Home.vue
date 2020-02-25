<template>
  <div class="hello align-self-stretch">
    <h1>{{ msg }}</h1>
    
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      msg: 'Welcome to Dota2 Statistics Website'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
}

h1, h2 {
  font-weight: lighter;
  font-size: 3em;
}


</style>
