<template>
  <div class="container md-elevation-8">
    <div class="label md-elevation-8">
        Console
    </div>
    <div class="content">
        Hello
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Console',
    data: function() {
        return {
            text: ''
        }
    }
  }
</script>

<style lang="scss" scoped>

  .container {
    background-color: black;
  }

  .label {
      background-color: black;
  }

  .content {
    background-color: grey;
  }
</style>