<template>
  <div class="md-content">
    Console
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

  .md-content {
    padding: 16px;
    justify-content: center;
    align-items: center;
    background: black;
    color: white;
    margin-bottom: 0px;
    height: 100%;
  }
</style>