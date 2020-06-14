<template>
  <div>
    <md-button class="md-fab md-primary">
      <md-icon class="md-size-2x">play_arrow</md-icon>
    </md-button>
  </div>
</template>

<script>
export default {
  name: "Play",
  data: function() {return {}},
};
</script>

<style lang="scss" scoped>

.md-fab {
  margin-right: 0;
  margin-left: 0;
  background-color: white !important;
}

.md-icon {
  color: #ff8327 !important;
}

</style>
