<template>
  <div id="app">
    <div id="top">
      <TopBar />
    </div>
    <div id="middle" class="md-layout">
      <div class="md-layout-item">
        <Directions />
      </div>
      <div class="md-layout-item" style="border-left:3px solid black">
        <div id="right" class="md-layout">
          <div id="console" class="md-layout-item">
            <Console />
            <Play id="play"/>
            <Submit id="submit"/>
          </div>
          <div id="commands" class="md-layout-item">
            <Commands />
          </div>
        </div>
      </div>
    </div>
    <div id="bottom">
      <TapeVisualizer />
    </div>
  </div>
</template>

<script>
import TopBar from "./components/TopBar.vue";
import Directions from "./components/Directions.vue";
import Console from "./components/Console.vue";
import TapeVisualizer from "./components/TapeVisualizer.vue";
import Commands from "./components/Commands.vue";
import Play from "./components/Play.vue";
import Submit from "./components/Submit.vue";

export default {
  name: "App",
  components: {
    TopBar,
    Directions,
    Console,
    TapeVisualizer,
    Commands,
    Play,
    Submit
  },
};
</script>

<style lang="scss">
#app {
  font-family: Roboto, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#right {
  height: 100%;
  display: flex;
  flex-direction: column;
}

#middle {
  height: 70vh;
}

#top {
  height: 10vh;
}

#bottom {
  height: 20vh;
}

.container {
  position: relative;
  padding: 8px;
  height: 100%;
}

.md-layout-item {
  height: 100%;
}

#console {
  flex: 1 1;
  z-index: 1;
}

#commands {
  flex: 0 0;
  z-index: 0;
}

#play {
  position: absolute;
  top: 10px;
  right: 10px;
}

#submit {
  position: absolute;
  top: 60px;
  right: 10px;
}

</style>
