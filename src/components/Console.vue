<template>
  <div class="container md-elevation-8">
    <md-field id="editor">
      <md-textarea :key="key" md-autogrow v-model="code"></md-textarea>
    </md-field>
    <div class="buttons">
      <Play id="play" />
      <Submit id="submit" />
    </div>
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
    format: function() {
      let newCode = this.code.replace(/[^<>+-.,[\]\n\r\t\s]+/g, "")
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

<style lang="scss" scoped>

$consolePadding: 16px;
$buttonsLeftSpace: $consolePadding / 2;
$buttonVerticalSpace: $consolePadding / 2;

// Careful! THIS IS NOT SCOPED
/*
.editor {
  height: 100%;
  & > 
}*/

#editor {
  flex: 1 1;
}

.buttons {
  flex: 0 0;
  margin-left: $buttonsLeftSpace;
}

.container {
  //width: 50vw;
  //overflow: auto;
  display: flex;
  position: relative;
  background-color: rgb(69, 69, 69);
  //min-height: 112px;
  padding: $consolePadding;
  height: 100%;
  font-family: "Courier New", Courier, monospace;
}

#submit {
  margin-top: $buttonVerticalSpace;
}

/*
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
*/
#editor {
  height: 100%;
  margin: 0px;
  padding: 0px;
  display: flex;
}

.md-textarea {
  color: white;
  font-size: 24px !important;
  //padding: 16px !important;
  //padding-right: 52px !important;
  padding: 0 !important;
  overflow: auto !important;
  height: 100% !important;
  max-height: 100% !important;
}
</style>
