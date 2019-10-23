<template>
  <div class="d-flex justify-content-center">
    <div id="app">
      <img alt="GitFork Logo" src="./assets/logo.png">
      <br /> <br />
      <Main msg="Welcome to GitFork"/>
    </div>
  </div>
</template>

<style lang="css">
@import 'assets/css/style.css';
</style>

<script>
import Main from './components/Main.vue'

export default {
  name: 'app',
  components: {
    Main
  }
}
</script>
