<template>
    <div v-if="!$auth.loading" class="menu-bar">
        <span v-if="$auth.isAuthenticated" class="menu-item" v-on:click='goToHome'>Home</span>
        <span v-if="$auth.isAuthenticated" class="menu-item" v-on:click='goToRegistration'>Registration</span>
        <span v-if="$auth.isAuthenticated" class="menu-item" v-on:click='goToProducts'>Products</span>
        <!-- show login when not authenticated -->
        <button v-if="!$auth.isAuthenticated" class="menu-item" @click="login">Login</button>
        <span id="weather-info" class="menu-item" v-if="$auth.isAuthenticated"><Weather></Weather></span>
        <!-- show logout when authenticated -->
        <button v-if="$auth.isAuthenticated" class="menu-item" @click="logout">Logout</button>
    </div>
</template>

<script>
  import Weather from './Weather.vue';

  export default {
    name: 'NavBar',
    components: { Weather },
    methods: {
      goToHome: function() {
        this.$router.push({ path: 'home' })
      },
      goToRegistration: function() {
        this.$router.push({ path: 'registration' })
      },
      goToProducts: function() {
        this.$router.push({ path: 'products' })
      },
      // Log the user in
      login() {
        this.$auth.loginWithRedirect();
      },
      // Log the user out
      logout() {
        this.$auth.logout({
          returnTo: window.location.origin
        });
      }
    }
  }
</script>

<style scoped>
    .menu-item {
        margin-right: 10px;
        padding: 5px;
    }

    .menu-bar {
        background-color: cyan;
        height: 40px;
        margin-top: 10px;
        vertical-align: middle;
        padding-top: 20px;
        width: 50%;
    }
</style>