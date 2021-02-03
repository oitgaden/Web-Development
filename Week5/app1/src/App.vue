<template>
    <div id="app">

      <router-view/>

      <NavBar></NavBar>

  </div>
</template>

<script>
  import NavBar from './components/NavBar.vue';
  
  export default {
    name: 'App',
    components: { NavBar },
  }
</script>

<style>
  body {
      background-color: lightcoral;
  }
</style>
