<template>
  <div>
    <md-dialog :md-active.sync="show">
      <md-dialog-title>Submission</md-dialog-title>
      <div v-if="!correct" id="error-message">
        <p>{{ message }}</p>
      </div>
      <div v-else id="message">
        <p>Nice work!</p>
      </div>
      <md-button v-if="!correct" class="failure md-raised md-primary" @click="show = false">
        Try Again
      </md-button>
      <md-button v-else class="correct md-raised md-primary" @click="nextLesson">
        Next Lesson
      </md-button>
    </md-dialog>
  </div>
</template>

<script>
export default {
  name: "SubmitDialog",
  data: function() {
    return {
      show: false,
    };
  },
  props: {
      correct: Boolean,
      message: String
  },
  methods: {
    showDialog() {
      this.show = true
    },
    nextLesson() {
        this.show=false
        this.$emit("nextLesson")
    }
  },
};
</script>

<style lang="scss" scoped>
.md-dialog-title {
  text-align: center;
}
.failure {
    background-color: #ff0aaf !important;
}
.correct {
    background-color: #ffa009 !important;
}
#error-message {
  text-align: center;
  color: #ff0aaf;
  margin-top: -10px;
  margin-bottom: 10px;
}

#message {
text-align: center;
  margin-top: -10px;
  margin-bottom: 10px;
}
</style>
