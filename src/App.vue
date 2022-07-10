<template>
  <h1
    v-if="show"
    v-switching-color:fast.underline.textcenter="colors">
    Hello Vue3 directives
  </h1>

  <button @click.stop.prevent="show = !show">Click</button>

  <h2>Click outside</h2>

  <div v-click-ouside="clickedOutside" class="box">Here is some text</div>
</template>

<script>
export default {
  name: 'App',

  data() {
    return {
      colors: ['red', 'gold', 'pink', 'blue'],
      show: false
    }
  },

  mounted () {
    this.colors.push('purple');
  },

  methods: {
    clickedOutside() {
      alert('you are click outside 👅')
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.box {
  height: 500px;
  width: 300px;
  border: 1px solid #000;
}
</style>
