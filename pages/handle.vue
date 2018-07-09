<template>
  <div id="table-test">
    用户
  </div>
</template>
<script>
  /*eslint-disable*/
  import webHttp from '../plugins/axios'
  export default {
    layout: 'main',
    data() {
      return {
      }
    },
    components: {
      webHttp
    },
    mounted() {
      //   webHttp({
      //     url: '/api/login',
      //     data: {
      //       name: 'test'
      //     },
      //     callback: (response) => {
      //       console.log(response)
      //     }
      //   })
    }
  }
</script>
<style>
  #table-test{
    width: 100%;
  }
</style>
