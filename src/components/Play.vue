<template>
  <div :key="key">
    <md-button v-if="!playing" @click="press" class="md-fab md-primary">
      <md-icon class="md-size-2x">play_arrow</md-icon>
    </md-button>
    <md-button v-else @click="press" class="md-fab md-primary">
      <md-icon class="md-size-2x">stop</md-icon>
    </md-button>
  </div>
</template>

<script>
export default {
  name: "Play",
  data: function() {return {
    playing: false,
    key: 0
  }},
  methods: {
    press() {
      this.playing = !this.playing;
      if (this.playing) {
        this.$emit("play")
      } else {
        this.$emit("stop")
      }
      this.key++
    }, stop() {
      this.playing = false;
      this.key++
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
  color: #ff8327 !important;
}

</style>
