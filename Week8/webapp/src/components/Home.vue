<template>

  <div>

    <h1>Main Heading</h1>

    <h2 class="section-heading">Section 1</h2>

    <div id="first-section" class="section">
        Lorem ipsum dolor sit amet, <span>consectetur adipiscing elit</span>, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
    </div>

    <h2 class="section-heading">Section 2</h2>

    <div class="section">
        Orci a scelerisque purus  
        semper eget duis at. Tincidunt <span>vitae semper</span> quis lectus nulla at volutpat.
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Home',
    data () {
      return {
        error: ''
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .section-heading {
      background-color: cyan;
  }

  #first-section {
      color: purple;
      font-size: 20pt;
  }

  .section span {
      color: green;
  }

  .section {
      font-size: 15pt;
  }
</style>
