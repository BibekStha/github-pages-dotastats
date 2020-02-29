<template>
  <div class='container'>
    <h2 class="display-4">Heroes</h2>
    <h3>Strength</h3>
      <div class="row mb-5">
        <div v-for='hero in strHeroes' :key='hero.id' class='col-4 col-md-3 p-4'>
          <span><img :src='`https://api.opendota.com${hero.img}`' alt='' class="mb-2">
          {{ hero.localized_name }}</span>
        </div>
      </div>
    <h3>Agility</h3>
      <div class="row">
        <div v-for='hero in agiHeroes' :key='hero.id' class='col-4 col-md-3 p-4'>
          <span><img :src='`https://api.opendota.com${hero.img}`' alt='' class="mb-2">
          {{ hero.localized_name }}</span>
        </div>
      </div>
    <h3>Intelligence</h3>
      <div class="row">
        <div v-for='hero in intHeroes' :key='hero.id' class='col-4 col-md-3 p-4'>
          <span><img :src='`https://api.opendota.com${hero.img}`' alt='' class="mb-2">
          {{ hero.localized_name }}</span>
        </div>
      </div>
  </div>
</template>

<script>
import _ from 'lodash/core'

export default {
  name: 'Heroes',
  components: {},
  data () {
    return {
      heroes: [],
      strHeroes: [],
      agiHeroes: [],
      intHeroes: []
    }
  },
  mounted () {
    fetch('https://api.opendota.com/api/heroStats')
      .then(res => {
        return res.json()
      })
      .then(data => {
        console.log(data[0])
        this.heroes = data
        _.forEach(data, hero => {
          let heroAttr = hero.primary_attr
          heroAttr === 'str' ? this.strHeroes.push(hero) : heroAttr === 'agi' ? this.agiHeroes.push(hero) : this.intHeroes.push(hero)
        })
      })
  }
}
</script>

<style scoped>
img {
  width: 100%;
}
</style>