<template>
  <div class="container">
    <md-field id="editor" class=".hwt-container codeContainer">
      <!-- <p id="formatted" class="code" spellcheck="false"></p> -->
      <Mark v-bind:config="{highlight: [{highlight: '+', className: 'one'},{highlight: '-', className: 'two'},{highlight: '>', className: 'three'},{highlight: '<', className: 'four'},{highlight: '[', className: 'five'},{highlight: ']', className: 'six'},{highlight: '.', className: 'seven'},{highlight: ',', className: 'eight'}]}" el="md-textarea" v-bind:value="code"/>
      <md-textarea
        spellcheck="false"
        class="code"
        :key="key"
        md-autogrow
        v-model="code"
        @input="format()"
      ></md-textarea>
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

//import HighlightWithinTextarea from "highlight-within-textarea-unjquery/highlight-within-textarea.js";
import Mark from "./Mark";

export default {
  name: "Console",
  components: {
    Play,
    Submit,
    Mark
  },
  data: function() {
    return {
      code: "",
      key: 0,
      commands: [
        "<",
        ">",
        "+",
        "-",
        ".",
        ",",
        "[",
        "]"
      ],
      colors: [
        "#63b598",
        "#ce7d78",
        "#ea9e70",
        "#a48a9e",
        "#c6e1e8",
        "#648177",
        "#0d5ac1",
        "#f205e6",
      ],
    };
  },
  methods: {
    format: function() {
      /*let formatted = ``;
      for (const c of this.code) {
        const index = this.commands.indexOf(c)
        if (c !== -1) {
          formatted += `<span style="color: ${this.colors[index]}">${c}</span>`;
        } else {
          formatted += c
        }
      }
      this.$el.querySelector("#formatted").innerHTML = formatted;*/
    },
    addChar: function(char) {
      this.code = this.code.concat(char);
    },
  },
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

  box-shadow: inset 0px -9px 8px -10px black;
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

#formatted {
  word-wrap: break-word;
}


.code {
  position: absolute;
  top: 0px;
  left: 0px;
  //padding: 16px !important;
  //padding-right: 52px !important;
  margin: 0 !important;
  padding: 0 !important;
  height: 100% !important;
  max-height: 100% !important;
  width: 100%;
}

.codeContainer, .code {
  color: white;
  letter-spacing: 0.01em;
  line-height: 30px !important;
  font-size: 24px !important;
  font-weight: bold;
  letter-spacing: 0.1em;
}

.md-textarea {
  color: white !important;
  -webkit-text-fill-color: transparent !important;
}

.md-field.md-theme-default:before {
  background-color: rgb(69, 69, 69) !important;
}

.md-field.md-theme-default:after {
  background-color: rgb(69, 69, 69) !important;
}
</style>
