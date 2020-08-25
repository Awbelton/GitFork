<template>
  <div>
    <div class="d-flex justify-content-center">
      <div id="app">
        <img alt="GitFork Logo" src="../assets/logo.png">
        <br /> <br />
      </div>
    </div>
    <div class="title">
      <h1>Welcome to GitFork</h1>
      <p>
        Search GitHub for forks!
      </p>
      <h3>Search For Forks. Start by entering a repository name.</h3>
      <br/>
      <Search />
      <br />
    </div>
  </div>
</template>

<script>
import Search from './Search.vue'

export default {
  name: 'Main',
  props: {
    msg: String
  },
  components: {
    Search
  }
}
</script>
