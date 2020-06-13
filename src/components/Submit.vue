<template>
  <div>
    <md-button class="md-icon-button md-raised md-primary">
      <md-icon>done</md-icon>
    </md-button>
  </div>
</template>

<script>
export default {
  name: "Submit",
  data: function() {return {}},
};
</script>

<style lang="scss" scoped>
@import "~vue-material/dist/theme/engine";

@include md-register-theme("default", (
  primary: #FF0BB2
));

@import "~vue-material/dist/components/MdButton/theme";
</style>
