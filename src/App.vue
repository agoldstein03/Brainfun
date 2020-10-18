<template>
  <div id="app">
    <div id="top">

      <TopBar :lesson="lesson" :exercise="exercise" v-on:change="changeExercise" v-on:login="login" />
    </div>
    <!-- <div id="middle" class="md-layout"> -->
      <div class="not-shrunk md-layout-item">
        <div id="right" class="md-layout">
          <div class="md-layout-item"
        :style="{'max-height': `${middleHeight}px`,'height': `${middleHeight}px`,'min-height': `${middleHeight}px`}">
            <Directions :lesson="lesson" :exercise="exercise" :lessonData="lessonData ? lessonData : {'hints': []}" ref="directions" />
          </div>
          <div id="console" class="md-layout-item">
            <Console v-on:play="play" v-on:stop="forceStop" v-on:submit="submit" ref="console" />
          </div>
        </div>
      </div>

      <div class="shrink md-layout-item">
        <div id="right" class="md-layout">
          <div class="md-layout-item">
            <Output :output="output" />
          </div>
          <div id="commands" class="md-layout-item">
            <Commands v-on:command="runCommand" />
          </div>
        </div>
      </div>
    <!-- </div> -->

    <div id="bottom">
      <TapeVisualizer :checker="lessonData ? lessonData.checker : ''" :code="code" v-on:done="stop" v-on:changeOutput="changeOutput" v-on:reset="reset" :output.sync="output" id="tape" ref="tape" />
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
let auth = firebase.auth();


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
      char: "",
      middleHeight: 600,
      uid: "",
      current: {lesson: 1, exercise: 1}
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
  firestore: {
    lessons: db.collection('lessons'),
  },
  created() {


auth.onAuthStateChanged((function(user) {
  if (user) {
    this.uid = user.uid.uid;
    this.$bind('current', db.collection('current').doc(this.uid ? this.uid : "anon"));
    this.lesson = (this.current ?  this.current : {}).lesson ? (this.current ?  this.current : {}).lesson : 1;
    this.exercise = (this.current ?  this.current : {}).exercise ? (this.current ?  this.current : {}).exercise : 1;
  } else {
    auth.signInAnonymously();
  }
}).bind(this));

    this.$bind('lessonData', db.collection('lessons').doc(this.fullLesson));
    this.$bind('current', db.collection('current').doc(this.uid ? this.uid : "anon"));
    this.lesson = (this.current ?  this.current : {}).lesson ? (this.current ?  this.current : {}).lesson : 1;
    this.exercise = (this.current ?  this.current : {}).exercise ? (this.current ?  this.current : {}).exercise : 1;

    this.$firestoreRefs.current.get().then(a=>a.data()).then(a=>{this.lesson=a.lesson;this.exercise=a.exercise});//{lesson: num, exercise: this.exercise}

    
        this.fullLesson = this.lesson+'.'+this.exercise;



  },
  watch: {
    fullLesson: {
      // call it upon creation too
      immediate: true,
      handler(num) {
        //console.log(db);
        this.$bind('lessonData', db.collection('lessons').doc(num))
      },
    },
    lesson: {
      // call it upon creation too
      handler(num) {
        this.fullLesson = num+'.'+this.exercise;
    this.$bind('current', db.collection('current').doc(this.uid ? this.uid : "anon"));
        this.$firestoreRefs.current.set({lesson: num, exercise: this.exercise});
      },
    },
    exercise: {
      // call it upon creation too
      handler(num) {
        this.fullLesson = this.lesson+'.'+num;
    this.$bind('current', db.collection('current').doc(this.uid ? this.uid : "anon"));
        this.$firestoreRefs.current.update({lesson: this.lesson, exercise: num});
      },
    },
  },
  methods: {
    reset() {
      this.output = "";
    },
    changeOutput(char) {
      this.output += char;
    },
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
      this.lesson = lesson;
      this.exercise = ex;
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
      this.$refs.submit.showDialog(this.correct, this.msg);
    },
    nextLesson() {
      if (this.lessons.some(les => les.lesson == this.lesson && les.exercise == (this.exercise + 1))) {
        this.exercise++;
      } else if (this.lessons.some(les => les.lesson == (this.lesson + 1) && les.exercise == 1)) {
        this.lesson++;
        this.exercise = 1;
      } else {
        alert("Thank you for trying our demo! We hope to add more lessons soon; stay tuned!");
      }
    },
    callRightValue(value) {
      this.$refs.tape.rightValue(value)
    },
    getInput() {
      this.active = true;
    },
    sizeMiddle() {
      const pageHeight = window.innerHeight
      const topHeight = document.getElementById("top").clientHeight
      const shrinkHeight = document.getElementsByClassName("shrink")[0].clientHeight
      const bottomHeight = document.getElementById("bottom").clientHeight
      this.middleHeight = pageHeight - topHeight - shrinkHeight - bottomHeight + 1
    }
  },
  mounted() {
    this.sizeMiddle()
    window.addEventListener("resize", this.sizeMiddle())
  },
};
</script>

<style lang="scss">

.shrink {
  flex: 0 0 !important;
}

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
  flex-direction: column;

  display: grid;
  grid-template-columns: 50% 50%;
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
  flex: 0 auto;
  flex-basis: 7.5vh;
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

#console {
  flex: 1 1;
}

#commands {
  flex: 0 0;
}
</style>
