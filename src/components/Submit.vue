<template>
  <div>
    <md-button @click="submit" class="md-fab md-primary">
      <md-icon class="md-size-2x">done</md-icon>
    </md-button>
  </div>
</template>

<script>
export default {
  name: "Submit",
  data: function() {return {
  }},
  methods: {
    submit() {
      this.$emit("submit")
    }
  }
};
</script>

<style lang="scss" scoped>

.md-fab {
  margin-right: 0;
  margin-left: 0;
  background-color: white !important;
}

.md-icon {
  color: #FF0BB2 !important;
}

</style>
