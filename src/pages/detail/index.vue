<template>
  <div class="counter-warp">
   详情id： {{id}}
  </div>
</template>

<script>
// Use Vuex
import store from './store'

export default {
  data () {
    return {
      id: ''
    }
  },
  computed: {
    count () {
      return store.state.count
    }
  },
  methods: {
    increment () {
      store.commit('increment')
    },
    decrement () {
      store.commit('decrement')
    }
  },
  mounted () {
    this.id = this.$mp.query.id
  }
}
</script>

<style>
.counter-warp {
  text-align: center;
  margin-top: 100px;
}
.home {
  display: inline-block;
  margin: 100px auto;
  padding: 5px 10px;
  color: blue;
  border: 1px solid blue;
}
</style>
