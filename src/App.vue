<template>
  <div id="app">

      <router-view name = "default"/>


  </div>
</template>

<script>



export default {
  name: 'app',
    components: {},
}
</script>

<style>
    @import "assets/css/app.css";
    #app{
        height: 100%;
    }
</style>
