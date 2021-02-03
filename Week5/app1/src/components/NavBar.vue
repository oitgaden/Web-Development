<template>
    <div class="links">
        <span v-on:click='goToHome'>Home</span>
        <span v-on:click='goToTables'>Table Example</span>
        <span v-on:click='goToForms'>Form Example</span>
    </div>
</template>

<script>
  export default {
    name: 'NavBar',
    methods: {
      goToHome: function() {
        this.$router.push({ path: 'home' })
      },
      goToTables: function() {
        this.$router.push({ path: 'tables' })
      },
      goToForms: function() {
        this.$router.push({ path: 'forms' })
      }
    }
  }
</script>

<style scoped>
  span {
      font-family: monospace;
      font-weight: bold;
      font-size: 14pt;
      cursor: pointer;
      padding-right: 20px;
      background-color: white;
      text-align: center;
  }

  .links {
      background-color: lightgray;
      margin-top: 20px;
      padding: 10px;
  }
</style>