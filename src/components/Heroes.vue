<template>
  <div class='container'>
    <h2>Heroes</h2>
      <div class="row">
        <div v-for='hero in heroes' :key='hero.id' class='col-3'>
          <img :src='`https://api.opendota.com${hero.img}`' alt=''>
          {{ hero.localized_name }}
        </div>
      </div>
    
  </div>
</template>

<script>
export default {
  name: 'Heroes',
  components: {},
  data () {
    return {
      heroes: []
    }
  },
  mounted () {
    fetch('https://api.opendota.com/api/heroStats')
      .then(res => {
        return res.json()
      })
      .then(data => { this.heroes = data })
  }
}
</script>

<style scoped>
img {
  width: 100%;
}
</style>