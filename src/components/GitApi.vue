<template>

</template>

<script>
import axios from 'axios';

const token = '84e4588a6e7c2f676c57e0595eeacb9097a9ebf0';
const baseDomain = "https://api.github.com";
const user = 'placeholder';
const url = '/search/repositories';
const res = `${baseDomain}/${url}?q=topic:python`;

export default {
  data() {
    return {
      forks: [],
      errors: []
    }
  },
  created() {
    axios({
        method: 'get',
        url: res,
        responseType: 'json'
    })
    .then(function (response) {
        // handle success
        console.log(response);
    })
    .catch(function (error) {
        // handle error
        console.log(error);
    })
    .finally(function () {
        // always executed
    });
  }
}
</script>
