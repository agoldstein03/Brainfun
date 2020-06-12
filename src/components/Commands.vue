<template>
  <div class="container md-elevation-8">
    <div class="label md-elevation-8">
        Commands
    </div>
    <div class="content">
        Hello
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Commands',
    data: function() {
        return {
            text: ''
        }
    }
  }
</script>

<style lang="scss" scoped>

  .container {
    background-color: orange;
  }

  .label {
      background-color: orange;
  }
</style>