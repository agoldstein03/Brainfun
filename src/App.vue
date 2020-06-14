<template>
  <div id="app">
    <div id="top">
      <TopBar v-on:change="changeExercise"/>
    </div>
    <div id="middle" class="md-layout">
      <div class="md-layout-item">
        <Directions :lessonData="lessonData" ref="directions"/>
      </div>
      <div class="md-layout-item" style="border-left:3px solid black">
        <div id="right" class="md-layout">
          <div id="console" class="md-layout-item">
            <Console ref="console"/>
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
  </div>
</template>

<script>
import TopBar from "./components/TopBar.vue";
import Directions from "./components/Directions.vue";
import Console from "./components/Console.vue";
import TapeVisualizer from "./components/TapeVisualizer.vue";
import Commands from "./components/Commands.vue";


/* globals firebase */

let db = firebase.firestore();

export default {
  name: "App",
  components: {
    TopBar,
    Directions,
    Console,
    TapeVisualizer,
    Commands
  },
  //firestore: {
  //  lessons: db.collection('lessons'),
  //},
  data() {
    return {
      lesson: 2,
      exercise: 1,
      lessons: null,
      lessonData: null,
      //realLessonData: this.lessonData.doc(this.lesson+"."+this.exercise)
    }
  },
  watch: {
    lesson: {
      // call it upon creation too
      immediate: true,
      handler(num) {
        this.$bind('lessonData', db.collection('lessons').doc(num+"."+this.exercise))
      },
    },
    exercise: {
      // call it upon creation too
      immediate: true,
      handler(num) {
        this.$bind('lessonData', db.collection('lessons').doc(this.exercise+"."+num))
      },
    },
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
  }
};
</script>

<style lang="scss">

body {
  height: 100%;
  min-height: 100%;
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
