<template>
  <div class="container">
    <md-tabs  class="md-transparent" md-alignment="fixed">
      <md-tab id="tab-task" md-label="TASK" exact>
        <h1>{{ this.$parent.lesson }} - {{ lessonData.lessonTitle }}</h1>
      </md-tab>

      <md-tab id="tab-references" md-label="REFERENCES">
        <p>Unde provident nemo reiciendis officia, possimus repellendus. Facere dignissimos dicta quis rem. Aliquam aspernatur dolor atque nisi id deserunt laudantium quam repellat.</p>
      </md-tab>

      <md-tab id="tab-hints" md-label="HINTS">
        <p>Qui, voluptas repellat impedit ducimus earum at ad architecto consectetur perferendis aspernatur iste amet ex tempora animi, illum tenetur quae assumenda iusto.</p>
      </md-tab>
    </md-tabs>
  </div>
</template>

<script>

export default {
  name: "Directions",
  props: [
    'lessonData'
  ],
  data: function() {
    return {
      lesson: this.$parent.lesson,
      exercise: this.$parent.exercise,
      //realLessonData: this.lessonData.doc(this.lesson+"."+this.exercise)
    };
  },
  methods: {
    // changeExercise(lesson, ex) {

    // }
  }
};
</script>

<style lang="scss" scoped>
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
