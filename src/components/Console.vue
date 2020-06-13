<template>
  <div class="consoleContainer md-elevation-8">
    <md-field id="editor">
      <md-textarea :key="key" md-autogrow v-model="code" @input="highlight()"></md-textarea>
    </md-field>
    <Play id="play" />
    <Submit id="submit" />
  </div>
</template>
<script>
import Play from "./Play.vue";
import Submit from "./Submit.vue";

export default {
  name: "Console",
  components: {
    Play,
    Submit,
  },
  data: function() {
    return {
      code: "",
      key: 0,
    };
  },
  methods: {
    highlight: function() {
      let newCode = this.code.replace(/[^<>+-.,[\]\n]+/g, "")
      if (this.code !== newCode) {
        this.code = newCode
        this.key++
      }
    },
    addChar: function(char) {
      this.code = this.code.concat(char)
    }
  }
};
</script>

<style lang="scss">
// Careful! THIS IS NOT SCOPED
/*
.editor {
  height: 100%;
  & > 
}*/

.consoleContainer {
  //width: 50vw;
  //overflow: auto;
  position: relative;
  background-color: rgb(69, 69, 69);
  min-height: 112px;
  height: 100%;
  font-family: "Courier New", Courier, monospace;
}

#play {
  position: absolute;
  top: 10px;
  right: 10px;
}

#submit {
  position: absolute;
  top: 60px;
  right: 10px;
}

#editor {
  height: 100%;
  margin: 0px;
  padding: 0px;
  display: flex;
}

.md-textarea {
  color: white;
  font-size: 24px !important;
  padding: 16px !important;
  margin-right: 52px;
  height: 100% !important;
  max-height: 100% !important;
}
</style>
