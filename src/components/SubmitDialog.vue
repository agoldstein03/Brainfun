<template>
  <div>
    <md-dialog :md-active.sync="show">
      <md-dialog-title>Submission</md-dialog-title>
      <div v-if="!success" id="error-message">
        <p>{{ message }}</p>
      </div>
      <div v-else id="message">
        <p>Nice work!</p>
      </div>
      <md-button v-if="!success" class="failure md-raised md-primary" @click="show = false">
        Try Again
      </md-button>
      <md-button v-else class="success md-raised md-primary" @click="nextLesson">
        Next Lesson
      </md-button>
    </md-dialog>
  </div>
</template>

<script>
export default {
  name: "Submit",
  data: function() {
    return {
      show: false,
    };
  },
  props: {
      success: Boolean,
      message: String
  },
  methods: {
    showDialog() {
      this.show = true
    },
    nextLesson() {
        this.show=false
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
.success {
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
