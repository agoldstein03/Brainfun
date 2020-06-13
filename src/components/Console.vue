<template>
  <div class="container md-elevation-8">
    ++++++++++++++
    
    <Play id="play"/>
    <Submit id="submit"/>
  </div>
</template>

<script>

import Play from "./Play.vue";
import Submit from "./Submit.vue";

export default {
  name: "Console",
  components: {
    Play,
    Submit
  },
  data: function() {
    return {
      text: "",
    };
  },
};
</script>

<style lang="scss" scoped>
.container {
  //width: 50vw;
  //overflow: auto;
  background-color: rgb(69, 69, 69);
  font-size: 32px;
  color: white;
  font-family: "Courier New", Courier, monospace;
  padding: 16px;
  min-height: 112px;
  height: 100%;
}
</style>
