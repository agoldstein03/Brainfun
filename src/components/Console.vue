<template>
  <div class="container md-elevation-8">
    ++++++++++++
  </div>
</template>

<script>
export default {
  name: "Console",
  data: function() {
    return {
      text: "",
    };
  },
};
</script>

<style lang="scss" scoped>
.container {
  background-color: rgb(69, 69, 69);
  font-size: 32px;
  color: white;
  font-family: "Courier New", Courier, monospace;
  padding: 16px;
}
</style>
