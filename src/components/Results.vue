<template>
    <div class="row">
        <div class="justify-content-center main col-md-6">
            <div>
                <h4>Results List</h4>
            </div>
            <div>
                <ul class="list-group">
                    <li class="list-group-item" v-for="repo in repos">
                    <a href="#">{{ repo.full_name }}</a>
                    </li>
                </ul>
        </div>
        <button class="m-3 btn btn-sm btn-danger" @click="removeAllResults">
            Clear
        </button>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Results',
  props: ['repos'],
  methods: {
      removeAllResults: function() {
          
      }
  },
  mounted() {
      console.log();
  }
}
</script>