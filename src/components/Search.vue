<template>
  <div>
    <div class="row justify-content-center main">
        <div class="active-purple-3 active-purple-4 mb-4">
              <div class="input-group">
                <input type="text" class="form-control" placeholder="Search GitHub by Repo Name">
                <div class="input-group-append">
                    <button class="btn btn-secondary" type="button" @click="searchName">
                      Search
                    </button>
                </div>
              </div>
        </div>
    </div>
    <Results :repos="this.repos" v-show="hasResults" />
  </div>
</template>

<script>
import ApiService from '../services/ApiService'
import Results from './Results'

export default {
  name: 'Search',
  props: {},
  components: {
    Results
  },
  data () {
    return {
      repos: [],
      hasResults: false
    }
  },
  methods: {
    async getRepos() {

    },
    retrieveRepos: function() {
      ApiService.get()
        .then(response => {
          this.repos = response.data
          console.log(response)
        })
        .catch(e => {
          console.log(e)
        })
    },
    searchName: function() {
      ApiService.findByName(this.name)
        .then(response => {
          this.repos = response.data
          console.log(this.repos)

          if (this.repos.length > 0) {
            this.hasResults = true;
          }
        })
        .catch(e => {
          console.log(e)
        })
    }
  },
  mounted() {
    //this.retrieveRepos()
  }
}
</script>
