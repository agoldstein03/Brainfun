<template>
  <div id="app">
    <div id="top">

      <TopBar :lesson="fullLesson" v-on:change="changeExercise" v-on:login="login" />
    </div>
    <div id="middle" class="md-layout">
      <div class="md-layout-item">
        <div id="right" class="md-layout">
          <div class="md-layout-item">
            <Directions :lessonData="lessonData" ref="directions" />
          </div>
          <div id="console" class="md-layout-item">
            <Console v-bind:code.sync="code" v-on:play="play" v-on:stop="forceStop" v-on:submit="submit" ref="console" />
          </div>
        </div>
      </div>

      <div class="md-layout-item">
        <div id="right" class="md-layout">
          <div class="md-layout-item">
            <Output />
          </div>
          <div id="commands" class="md-layout-item">
            <Commands v-on:command="runCommand" />
          </div>
        </div>
      </div>
    </div>

    <div id="bottom">
      <TapeVisualizer :checker="lessonData ? lessonData.checker : ''" :code="code" v-on:done="stop" :output="output" id="tape" ref="tape" />
    </div>
    <Login ref="login" />
    <SubmitDialog v-on:nextLesson="nextLesson" :success="correct" :message="msg" ref="submit" />
    <md-dialog-prompt
    v-model="char"
      :md-active.sync="active"
      md-title="Input a character"
      md-input-maxlength="1"
      md-confirm-text="Done"
      @md-confirm="callRightValue"
      @md-cancel="callRightValue('')" />
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
import Output from "./components/Output.vue";

/* globals firebase */

let db = firebase.firestore();

export default {
  name: "App",
  data: function() {
    return {
      code: "",
      output: "",
      fullLesson: "1.1",
      lesson: 1,
      exercise: 1,
      lessons: null,
      lessonData: {lessonTitle: "", checker: ""},
      correct: true,
      msg: "You failed!",
      active: false,
      char: ""
      //realLessonData: this.lessonData.doc(this.lesson+"."+this.exercise)
    };
  },
  components: {
    TopBar,
    Directions,
    Console,
    TapeVisualizer,
    Commands,
    Login,
    SubmitDialog,
    Output,
  },
  //firestore: {
  //  lessons: db.collection('lessons'),
  //},
  created() {
    this.$bind('lessonData', db.collection('lessons').doc(this.fullLesson))
  },
  watch: {
    fullLesson: {
      // call it upon creation too
      immediate: true,
      handler(num) {
        console.log(db);
        this.$bind('lessonData', db.collection('lessons').doc(num))
      },
    },
    lesson: {
      // call it upon creation too
      immediate: true,
      handler(num) {
        this.fullLesson = num+'.'+this.exercise;
      },
    },
    exercise: {
      // call it upon creation too
      immediate: true,
      handler(num) {
        this.fullLesson = this.lesson+'.'+num;
      },
    },
  },
  methods: {
    runCommand(command) {
      this.$refs.console.addChar(command);
      if (command === "<") {
        this.$refs.tape.left();
      } else if (command === ">") {
        this.$refs.tape.right();
      } else if (command === "+") {
        this.$refs.tape.add();
      } else if (command === "-") {
        this.$refs.tape.subtract();
      } else if (command === ".") {
        this.$refs.tape.readButton();
      } else if (command === ",") {
        this.$refs.tape.writeButton();
      }
    },
    changeExercise(lesson, ex) {
      this.$refs.directions.changeExercise(lesson, ex);
    },
    login() {
      this.$refs.login.login();
    },
    play() {
      this.$refs.tape.run();
    },
    forceStop() {
      this.$refs.tape.stop();
    },
    stop() {
      this.$refs.console.stop()
    },
    submit() {
      const response = this.$refs.tape.submit();
      this.correct = response.correct;
      this.msg = response.reason;
      this.$refs.submit.showDialog();
    },
    nextLesson() {
    },
    callRightValue(value) {
      this.$refs.tape.rightValue(value)
    },
    getInput() {
      this.active = true;
    }
  },
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

    display: grid;
    grid-template-columns: 1fr 1fr;

}

#middle > div:first-child {
  flex: 1 1;
}

#middle > div:last-child {
  flex: 0 0;
}

#middle {
  flex: 1 1;
  display: flex;
  flex-direction: column;
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
