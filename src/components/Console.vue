<template>
  <div class="consoleContainer md-elevation-8">
    
    {{ code }}

    <PrismEditor v-model="code" language="bf" :line-numbers="false" class="editor" />

    <Play id="play"/>
    <Submit id="submit"/>
  </div>
</template>

<script>

import Play from "./Play.vue";
import Submit from "./Submit.vue";
import PrismEditor from 'vue-prism-editor';
import "prismjs";
import "prismjs/themes/prism-tomorrow.css";

export default {
  name: "Console",
  components: {
    Play,
    Submit,
    PrismEditor
  },
  data: function() {
    return {
      code: ""
    };
  },
};
</script>

<style lang="scss"> // Careful! THIS IS NOT SCOPED
/*
.editor {
  height: 100%;
  & > 
}*/

.prism-editor__code {
  margin: 0 !important;
}

.consoleContainer {
  //width: 50vw;
  //overflow: auto;
  background-color: rgb(69, 69, 69);
  font-size: 32px;
  color: white;
  font-family: "Courier New", Courier, monospace;
  //padding: 16px;
  padding: 0px;
  min-height: 112px;
  height: 100%;
}
</style>
