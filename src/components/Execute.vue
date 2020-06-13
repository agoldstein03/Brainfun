<template>
  <div class="container">
    <div class="label">
      Execute
    </div>
    <div class="content">
      Hello
    </div>
  </div>
</template>

<script>
export default {
  name: "Execute",
  data: function() {
    return {
      text: "",
    };
  },
};
</script>

<style lang="scss" scoped>
.container {
  background-color: purple;
}

.label {
  background-color: purple;
}
</style>
