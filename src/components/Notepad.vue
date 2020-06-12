<template>
  <div class="container md-elevation-8">
    <div class="label md-elevation-8">
        Notepad
    </div>
    <div class="content">
        Hello
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Notepad',
    data: function() {
        return {
            text: ''
        }
    }
  }
</script>

<style lang="scss" scoped>

  .container {
    background-color: blue;
  }

  .label {
      background-color: blue;
  }
</style>