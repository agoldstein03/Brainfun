<template>
  <div class="md-content">
    Notepad
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

  .md-content {
    padding: 16px;
    justify-content: center;
    align-items: center;
    background: blue;
    color: white;
    margin-bottom: 0px;
    height: 100%;
  }
</style>