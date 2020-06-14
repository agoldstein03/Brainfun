<template>
  <div id="app">
    <div id="top">
      <TopBar v-on:change="changeExercise" v-on:login="login"/>
    </div>
    <div id="middle" class="md-layout">
      <div class="md-layout-item">
        <Directions ref="directions"/>
      </div>
      <div class="md-layout-item" style="border-left:3px solid black">
        <div id="right" class="md-layout">
          <div id="console" class="md-layout-item">
            <Console v-on:submit="submit" ref="console"/>
          </div>
          <div id="commands" class="md-layout-item">
            <Commands v-on:command="runCommand"/>
          </div>
        </div>
      </div>
    </div>
    <div id="bottom">
      <TapeVisualizer id="tape" ref="tape"/>
    </div>
    <Login ref="login"/>
    <SubmitDialog :success="correct" :message="msg" ref="submit"/>
  </div>
</template>

<script>
import TopBar from "./components/TopBar.vue";
import Directions from "./components/Directions.vue";
import Console from "./components/Console.vue";
import TapeVisualizer from "./components/TapeVisualizer.vue";
import Commands from "./components/Commands.vue";
import Login from "./components/Login.vue";
import SubmitDialog from "./components/SubmitDialog.vue";

export default {
  name: "App",
  data: function() {
    return {
      correct: true,
      msg: "You failed!"
    };
  },
  components: {
    TopBar,
    Directions,
    Console,
    TapeVisualizer,
    Commands,
    Login,
    SubmitDialog
  },
  methods: {
    runCommand(command) {
      this.$refs.console.addChar(command)
      if (command === "<") {
        this.$refs.tape.left()
      } else if (command === ">") {
        this.$refs.tape.right()
      } else if (command === "+") {
        this.$refs.tape.add()
      } else if (command === "-") {
        this.$refs.tape.subtract()
      }
    },
    changeExercise(lesson, ex) {
      this.$refs.directions.changeExercise(lesson, ex)
    },
    login() {
      this.$refs.login.login()
    },
    submit() {
      this.$refs.submit.showDialog()
    }
  }
};
</script>

<style lang="scss">

body {
  height: 100%;
  min-height: 100%;
  overflow: hidden;
}

#app {
  font-family: Roboto, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  height: 100%;
}

#right {
  height: 100%;
  display: flex;
  flex-direction: column;
}

#middle {
  flex: 1 1;
  display: flex;
  flex-direction: row;
  //height: 70vh;
}

#top {
  flex: 0 0;
  //height: 10vh;
}

#bottom {
  flex: 0 0;
  //height: 20vh;
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
}

#commands {
  flex: 0 0;
}

</style>
