<template>
  <div class="container">
    <div class="label">
      Notepad
    </div>
    <div class="content">
      Hello
    </div>
  </div>
</template>

<script>
export default {
  name: "Notepad",
  data: function() {
    return {
      text: "",
    };
  },
};
</script>

<style lang="scss" scoped>
.container {
  background-color: #4a86e8;
}

.label {
  margin-left: 8px;
  padding-right: 16px;
  background-color: #4a86e8;
  border-bottom: 8px solid #335c9d;
}

.content {
  border-top: 8px solid #335c9d;
}
</style>
