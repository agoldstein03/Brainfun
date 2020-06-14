<template>
  <div class="topbar">
    <md-toolbar class="md-primary">
      <img id="logo" src="../assets/brainfun.png" />
      <span class="lesson visible"><b id="label">Lesson {{ lessonNum }} - Ex. {{ exercise }}</b><md-icon class="md-size-2x">expand_more</md-icon></span>
      <span class="lesson hidden">
        <md-field class="md-primary">
          <label for="lessons">Lessons</label>
          <md-select
            name="lessons"
            id="lessons"
            @md-selected="changeExercise"
          >
            <md-optgroup v-for="(lessonsInfo, theLessonNum) in formattedLessons" :key="theLessonNum" :label="'Lesson '+theLessonNum+': '+lessonsInfo[0].lessonTitle"> 
              <md-option v-for="lessonInfo in lessonsInfo" :key="lessonInfo.exercise" :value="theLessonNum+'.'+lessonInfo.exercise">Exercise {{ lessonInfo.exercise }}</md-option>
            </md-optgroup>
          </md-select>
        </md-field>
      </span>
      <div class="md-toolbar-section-end">
        <md-button class="md-icon-button" @click="showDialog">
          <md-icon class="login md-size-2x">login</md-icon>
        </md-button>
      </div>
    </md-toolbar>
  </div>
</template>

<script>

/* global firebase */

let db = firebase.firestore();

export default {
  name: "TopBar",
  prop: [
    "lesson"
  ],
  data: () => ({
    showNavigation: false,
    lessonNum: 2,
    exercise: 1,
    allLessons: [],
    formattedLessons: {}
  }),
  mounted() {
    /*const lesson = this.lesson.charAt(1);
    const ex = this.lesson.charAt(4);
    this.$el.querySelector("#label").innerHTML =
      "Lesson " + lesson + " - Ex. " + ex*/
      let [num1, num2] = this.prop.split('.');
      this.lessonNum = parseInt(num1);
      this.exercise = parseInt(num2);
  },
  firestore: {
    allLessons: db.collection('lessons')
  },
  watch: {
    allLessons(data) {
      this.formattedLessons = this.lessonsFormat(data);
    },
    lesson(data) {
      let [num1, num2] = data.split('.');
      this.lessonNum = parseInt(num1);
      this.exercise = parseInt(num2);
    }
  },
  methods: {
    changeExercise(exercise) {
      const lesson = exercise.charAt(1);
      const ex = exercise.charAt(4);
      this.$el.querySelector("#label").innerHTML =
        "Lesson " + lesson + " - Ex. " + ex
      this.$emit("change", lesson, ex)
    },
    showDialog() {
      this.$emit("login")
    },
    lessonsFormat(les) {
    let obj = {};
    for (let l of les) {
      if (!obj[l.lesson]) {
        obj[l.lesson] = [l];
      } else {
        obj[l.lesson].push(l)
      }
    }
    return obj
    }
  },
};
</script>

<style lang="scss" scoped>

.md-toolbar {
  height: 10vh;
  background-color: #fafafa !important;
}

.md-icon {
  color: #0b0b0b !important;
}

.md-icon-button {
  color: #0b0b0b;
}

.md-drawer {
  width: 230px;
  max-width: calc(100vw - 125px);
}

.md-menu-content {
  background-color: white;
}

.hidden {
  opacity: 0;
}

.login {
  margin-right: 20px;
}

.lesson {
  width: 280px;
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  padding-top: 6px;
  padding-left: 25px;
  left: 0;
  right: 0;
  text-align: center;
  font-size: 28px;
  color: #0b0b0b;
}

#logo {
  margin-left: 1vw;
  width: 150px;
}
</style>
