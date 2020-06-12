<template>
  <div>
    <md-toolbar class="md-primary md-elevation-8">
      <md-button class="md-icon-button" @click="showNavigation = true">
          <md-icon>menu</md-icon>
        </md-button>
      <span class="md-title">Title</span>
    </md-toolbar>

    <md-drawer :md-active.sync="showNavigation">
      <md-toolbar class="md-transparent" md-elevation="0">
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
    name: 'TopBar',
    data: () => ({
      showNavigation: false,
    })
  }
</script>

<style lang="scss" scoped>
  .md-toolbar {
    height: 10vh;
  }
  .md-drawer {
    width: 230px;
    max-width: calc(100vw - 125px);
  }
</style>