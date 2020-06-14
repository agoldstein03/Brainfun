<template>
  <div class="topbar">
    <md-toolbar class="md-primary">
      <img id="logo" src="../assets/brainfun.png" />
      <span class="lesson visible"><b id="label">Lesson 2 - Ex. 2</b><md-icon class="md-size-2x">expand_more</md-icon></span>
      <span class="lesson hidden">
        <md-field class="md-primary">
          <label for="lessons" id="label">Lessons</label>
          <md-select
            v-model="lesson"
            name="lessons"
            id="lessons"
            @md-selected="changeExercise"
          >
            <md-optgroup label="Lesson 1: Welcome to BrainFUN!"> </md-optgroup>

            <md-optgroup label="Lesson 2: The + Operator">
              <md-option value="l2ex1">Exercise 1</md-option>
              <md-option value="l2ex2">Exercise 2</md-option>
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
export default {
  name: "TopBar",
  data: () => ({
    showNavigation: false,
    lesson: "l2ex1",
  }),
  mounted() {
    const lesson = this.lesson.charAt(1);
    const ex = this.lesson.charAt(4);
    this.$el.querySelector("#label").innerHTML =
      "Lesson " + lesson + " - Ex. " + ex
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
