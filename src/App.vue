<template>
  <div id="app">
    <div id="top">
      <TopBar/>
    </div>
    <div class="md-layout">
      <div class="md-layout-item md-size-35">
        <Directions/>
      </div>
      <div class="md-layout-item md-size-65">
        <div class="md-layout">
          <div class="md-layout-item md-size-50">
            <Console/>
          </div>
          <div class="md-layout-item md-size-50">
            <Notepad/>
          </div>
          <div class="md-layout-item md-size-50">
            <Commands/>
          </div>
          <div class="md-layout-item md-size-50">
            <Execute/>
          </div>
        </div>
      </div>
    </div>
    <div id="bottom">
      <TapeVisualizer/>
    </div>
  </div>
</template>

<script>
import TopBar from './components/TopBar.vue'
import Directions from './components/Directions.vue'
import Console from './components/Console.vue'
import Notepad from './components/Notepad.vue'
import TapeVisualizer from './components/TapeVisualizer.vue'
import Commands from './components/Commands.vue'
import Execute from './components/Execute.vue'

export default {
  name: 'App',
  components: {
    TopBar,
    Directions,
    Console,
    Notepad,
    TapeVisualizer,
    Commands,
    Execute
  }
}
</script>

<style>
#app {
  font-family: Roboto, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.md-layout {
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
  justify-content: center;
  align-items: center;
  background-color: green;
  margin-bottom: 0px;
  height: 100%;
}

.label {
    position: absolute;
    left: 0px;
    top: 0px;
    background-color: green;
    color: white;
    padding: 8px;
}

.content {
    height: 100%;
    width: 100%;
    background-color: white;
}
</style>
