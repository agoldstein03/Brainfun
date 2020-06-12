<template>
  <div class="container md-elevation-8">
    <div class="label md-elevation-8">
        Directions
    </div>
    <div class="content">
        Hello
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Directions',
    data: function() {
        return {
            text: ''
        }
    }
  }
</script>

<style lang="scss" scoped>

  .container {
    background-color: green;
  }

  .label {
      background-color: green;
  }
</style>