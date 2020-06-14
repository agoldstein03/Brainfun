<template>
  <div class="container">
    <md-tabs class="md-transparent" md-alignment="fixed">
      <md-tab id="tab-task" md-label="TASK" exact>
        <h1>{{ this.$parent.lesson }} - {{ lessonData ? lessonData.lessonTitle : '' }}</h1>
        <p class="desc" v-bind:style="styleObject">{{ lessonData ? lessonData.directions : '' }}</p>
      </md-tab>

      <md-tab id="tab-references" md-label="REFERENCES">
        <p v-bind:style="styleObject">Unde provident nemo reiciendis officia, possimus repellendus. Facere dignissimos dicta quis rem. Aliquam aspernatur dolor atque nisi id deserunt laudantium quam repellat.</p>
      </md-tab>

      <md-tab id="tab-hints" md-label="HINTS">
        <md-list>
          <md-list-item v-for="(hint, i) in lessonData.hints" :key="i" md-expand>
            <md-icon>lightbulb</md-icon>
            <span class="md-list-item-text">Hint #{{ i+1 }}</span>

            <md-list slot="md-expand">
              <md-list-item class="md-inset">{{ hint }}</md-list-item>
            </md-list>
          </md-list-item>
        </md-list>
      </md-tab>
    </md-tabs>
  </div>
</template>

<script>

export default {
  name: "Directions",
  props: [
    'lessonData',
    'lesson',
    'exercise'
  ],
  data: function() {
    return {
      styleObject: {
        lineHeight: "25px",
        fontSize: "20px"
      },
      //hints: [],
      //realLessonData: this.lessonData.doc(this.lesson+"."+this.exercise)
    };
  },
  created() {
    //this.hints = data.hints;
  },
  watch: {
    //lessonData(data) {
    //  this.hints = data.hints;
    //}
  },
  methods: {
    // changeExercise(lesson, ex) {

    // }
  },
};
</script>

<style lang="scss" scoped>

::v-deep .md-tabs-content {
  //min-height: 0;
  //overflow-y: scroll !important;
}

.desc {
  white-space: pre-line;
}

.container {
  overflow: auto;
  height: 100%;
  box-shadow:
    inset 0px -9px 8px -10px black;
}
.content {
  padding-left: 10px;
  padding-right: 10px;
}
</style>
