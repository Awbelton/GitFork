<template>
  <div class="title">
    <h1>{{ msg }}</h1>
    <p>
      Search GitHub for forks!
    </p>
    <h3>Search For Forks</h3>
    <br/>
    <Search />
    <br />
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
