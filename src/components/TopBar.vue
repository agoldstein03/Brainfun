<template>
  <div class="topbar">
    <md-toolbar class="md-primary">
      <md-button class="md-icon-button" @click="showNavigation = true">
        <md-icon>menu</md-icon>
      </md-button>
      <span class="md-title"><b>BrainFUN</b></span>
    </md-toolbar>

    <md-drawer :md-active.sync="showNavigation">
      <md-toolbar md-elevation="0">
        <span class="md-title">Menu</span>
      </md-toolbar>

      <md-list>
        <md-list-item>
          <span class="md-list-item-text">Lessons</span>
        </md-list-item>
      </md-list>
    </md-drawer>
  </div>
</template>

<script>
export default {
  name: "TopBar",
  data: () => ({
    showNavigation: false,
  }),
};
</script>

<style lang="scss" scoped>
@import "~vue-material/dist/theme/engine";

@include md-register-theme("default", (
  primary: #ffffff
));

@import "~vue-material/dist/components/MdDrawer/theme";

.md-toolbar {
  height: 10vh;
}

.md-drawer {
  width: 230px;
  max-width: calc(100vw - 125px);
}
</style>
