<template>
  <div class="container md-elevation-8">
    <div class="label md-elevation-8">
        Execute
    </div>
    <div class="content">
        Hello
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Execute',
    data: function() {
        return {
            text: ''
        }
    }
  }
</script>

<style lang="scss" scoped>

  .container {
    background-color: purple;
  }

  .label {
      background-color: purple;
  }
</style>