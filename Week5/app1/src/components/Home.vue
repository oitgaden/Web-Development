<template>
  <div>

      <img src="../images/image.png"/>

      <h1 style="background-color: lightblue;">Sample Web Page</h1>

      <h2>Date: {{ current_date }}</h2>

      <h2 class="section-heading">First Section</h2>

      <div id="first-section" class="inside">
          <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Facilisi morbi tempus iaculis urna id volutpat lacus laoreet. Malesuada nunc vel risus commodo viverra maecenas accumsan. Suscipit adipiscing bibendum est ultricies integer quis. Velit aliquet sagittis id consectetur purus ut faucibus pulvinar elementum. In cursus turpis massa tincidunt dui ut ornare. Arcu risus quis varius quam quisque id diam vel. Mauris commodo quis imperdiet massa tincidunt. Tincidunt arcu non sodales neque sodales ut. Lobortis scelerisque fermentum dui faucibus. Amet tellus cras adipiscing enim eu turpis egestas pretium aenean. Condimentum mattis pellentesque id nibh tortor id. Mauris a diam maecenas sed.
          </p>
          <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Facilisi morbi tempus iaculis urna id volutpat lacus laoreet. Malesuada nunc vel risus commodo viverra maecenas accumsan. Suscipit adipiscing bibendum est ultricies integer quis. Velit aliquet sagittis id consectetur purus ut faucibus pulvinar elementum. In cursus turpis massa tincidunt dui ut ornare. Arcu risus quis varius quam quisque id diam vel. Mauris commodo quis imperdiet massa tincidunt. Tincidunt arcu non sodales neque sodales ut. Lobortis scelerisque fermentum dui faucibus. Amet tellus cras adipiscing enim eu turpis egestas pretium aenean. Condimentum mattis pellentesque id nibh tortor id. Mauris a diam maecenas sed.
          </p>
      </div>

      <h2 class="section-heading">Second Section</h2>

      <div id="second-section" class="inside">
          <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Facilisi morbi tempus iaculis urna id volutpat lacus laoreet. Malesuada nunc vel risus commodo viverra maecenas accumsan. Suscipit adipiscing bibendum est ultricies integer quis. Velit aliquet sagittis id consectetur purus ut faucibus pulvinar elementum. In cursus turpis massa tincidunt dui ut ornare. Arcu risus quis varius quam quisque id diam vel. Mauris commodo quis imperdiet massa tincidunt. Tincidunt arcu non sodales neque sodales ut. Lobortis scelerisque fermentum dui faucibus. Amet tellus cras adipiscing enim eu turpis egestas pretium aenean. Condimentum mattis pellentesque id nibh tortor id. Mauris a diam maecenas sed.
          </p>
          <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Facilisi morbi tempus iaculis urna id volutpat lacus laoreet. Malesuada nunc vel risus commodo viverra maecenas accumsan. Suscipit adipiscing bibendum est ultricies integer quis. Velit aliquet sagittis id consectetur purus ut faucibus pulvinar elementum. In cursus turpis massa tincidunt dui ut ornare. Arcu risus quis varius quam quisque id diam vel. Mauris commodo quis imperdiet massa tincidunt. Tincidunt arcu non sodales neque sodales ut. Lobortis scelerisque fermentum dui faucibus. Amet tellus cras adipiscing enim eu turpis egestas pretium aenean. Condimentum mattis pellentesque id nibh tortor id. Mauris a diam maecenas sed.
          </p>
      </div>
    </div>
</template>

<script>
  export default {
    name: 'Home',
      mounted() {
        this.current_date = new Date().toDateString();
      },
    data () {
      return {
        error: '',
        current_date: ''
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  div.inside {
    background-color: lightgreen;
  }

  #first-section {
      font-weight: bold;
  }

  .section-heading {
      font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  }
</style>
