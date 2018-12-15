<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import { login } from './api/api'
export default {
  name: 'App',
  created () {
    this.onLoad()
  },
  methods: {
    onLoad () {
      login({openid: '110110', password: '1996'}).then(res => {
        console.log('成功')
      }).catch(e => {
        console.log(e)
      })
    }
  }
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
