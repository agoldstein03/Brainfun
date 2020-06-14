<template>
  <div class="topbar">
    <md-toolbar class="md-primary">
      <md-button class="md-icon-button" @click="showNavigation = true">
        <md-icon>menu</md-icon>
      </md-button>
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
            @md-opened="showMenu"
          >
            <md-optgroup label="Lesson 1: Welcome to BrainFUN!"> </md-optgroup>

            <md-optgroup label="Lesson 2: The + Operator">
              <md-option value="l2ex1">Exercise 1</md-option>
              <md-option value="l2ex2">Exercise 2</md-option>
            </md-optgroup>
          </md-select>
        </md-field>
      </span>
    </md-toolbar>

    <md-drawer :md-active.sync="showNavigation">
      <md-toolbar md-elevation="0">
        <span class="md-title">Menu</span>
      </md-toolbar>

      <md-list>
        <md-list-item>
          <span class="md-list-item-text">Lessons</span>
        </md-list-item>
      </md-list>
    </md-drawer>
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
      const ex = this.lesson.charAt(4);
      this.$el.querySelector("#label").innerHTML =
        "Lesson " + lesson + " - Ex. " + ex
    },
    showMenu() {
    }
  },
};
</script>

<style lang="scss" scoped>
@import "~vue-material/dist/theme/engine"; // Import the theme engine

@include md-register-theme(
  "default",
  (
    primary: md-get-palette-color(white, A100),
    // The primary color of your application
      accent: md-get-palette-color(red, A200) // The accent or secondary color,
  )
);

@import "~vue-material/dist/theme/all"; // Apply the theme

.md-title {
  color: white;
}

.md-toolbar {
  height: 10vh;
  background-image: linear-gradient(
    to left,
    #ffa207,
    #ff901b,
    #ff7f2a,
    #ff6d36,
    #ff5b42,
    #ff4d4e,
    #ff3e5a,
    #ff2e67,
    #ff1f78,
    #ff0e8a,
    #ff039d,
    #ff0bb2
  );
}

.md-icon {
  color: white !important;
}

.md-icon-button {
  color: white;
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
  color: white;
}

#logo {
  margin-left: 1vw;
  width: 150px;
}
</style>
