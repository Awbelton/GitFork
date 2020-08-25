<template>
    <div class="col-md-6">
      <h4>Results List</h4>
      <ul class="list-group">
        <li class="list-group-item"
          :class="{ active: index == currentIndex }"
          v-for="(repo, index) in repos"
          :key="index"
          @click="setActiveRepo(repo, index)"
        >
          {{ repo.title }}
        </li>
      </ul>

      <button class="m-3 btn btn-sm btn-danger" @click="removeAllResults">
        Clear
      </button>
    </div>
</template>

<script>
export default {
  name: 'Results',
  props: {},
  methods: {
      removeAllResults: function() {
          
      }
  }
}
</script>